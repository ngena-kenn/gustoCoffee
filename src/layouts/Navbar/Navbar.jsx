import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/auth/authActions";
import { GrPowerShutdown } from "react-icons/gr";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { fetchUserProfile } from "../../store/profile/profileActions";
import '../css/page.css';
import '../css/page.scss';
import { Button } from '@mui/material';

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function Navbar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userProfile = useSelector((state) => state.profile.userProfile);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (userProfile) {
      setFirstName(userProfile.prenom || "");
      setLastName(userProfile.nom || "");
    }
  }, [userProfile]);

  const styleIcon = {
    cursor: "pointer",
  };

  const styleBurger = {
    width: "30px",
    height: "30px",
    color: "#836349",
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigate = () => {
    closeMenu();
    navigate("/mon-compte");
  };

  const handleLogout = () => {
    closeMenu();
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {}, [isAuthenticated]);

  return (
    <nav>
      <div className="nav_hamburger" onClick={handleToggleMenu}>
        {isMenuOpen ? (
          <RxCross2 style={styleBurger} />
        ) : (
          <GiHamburgerMenu style={styleBurger} />
        )}
      </div>
      <div className="nav_logo">
        <Link to="/" onClick={closeMenu}>
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <ul className={`nav_navigation ${isMenuOpen ? "open" : ""}`}>
      <li class="nav-item">
          <Link to='/' onClick={closeMenu} class="nav-link active">Accueil</Link>
      </li>
      <li class="nav-item">
          <Link to='/reserver' onClick={closeMenu} class="nav-link">Reservation</Link>
      </li>
      <li class="nav-item">
          <Link  to='/tarifs' onClick={closeMenu} class="nav-link">Tarifs</Link>
      </li>
      <li class="nav-item">
          <Link to='/concept' onClick={closeMenu} class="nav-link">Evenements</Link>
      </li>
      <li class="nav-item">
          <Link to='/qui-sommes-nous' onClick={closeMenu} class="nav-link">Franchise</Link>
      </li>
      <li class="nav-item">
          <Link to="/contact" onClick={closeMenu} class="nav-link">Contact</Link>
        </li>
        
      </ul>
      <ul className={`nav_user ${isMenuOpen ? "open" : ""}`}>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/mes-reservations" onClick={closeMenu}>
                Mes Reservations
              </Link>
            </li>
            <li>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  style={{
                    cursor: "pointer",
                    width: "50px",
                    height: "50px",
                  }}
                  alt={`${firstName}`}
                  src="ras"
                  onClick={handleNavigate}
                />
              </StyledBadge>
            </li>
            <li>
              <GrPowerShutdown style={styleIcon} onClick={handleLogout} />
            </li>
          </>
        ) : (
          <>
            <li class="nav-item">
                <div style={{ paddingLeft: 10, paddingBottom: 10}}>
                  <Button onClick={() => {
                    navigate('/connexion')
                    closeMenu()
                  }} variant='outlined' color='success'  
                  >Connexion</Button>
                </div>
              </li>
            <li class="nav-item">
                <div style={{ paddingLeft: 10, paddingBottom: 10}}>
                  <Button onClick={() => {
                    navigate('/inscription')
                    closeMenu()
                  }} variant='outlined' color='success'  
                  >Inscription</Button>
                </div>
              </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
