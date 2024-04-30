import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Error404 from "./pages/Error404";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer.jsx";
import SignUp from "./pages/Signup/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Concept from "./pages/Concept/Concept";
import Tarifs from "./pages/tarif/tarifs";
import Reserver from "./pages/Reserver/Reserver";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Account from "./pages/Account/Account";
import ListeUsers from "./pages/Admin/ListUser";
import FormulaireFormules from "./pages/Admin/FormulairesFormules";
import ReservationsUtilisateur from "./pages/Admin/ReservationUtilisateur";
import FormulesUser from "./pages/FormulesUser/Formules";
import SelectDateTime from "./components/SelectDateTime/SelectDateTime";
import Emplacement from "./pages/Emplacement/Emplacement";
import ReservationList from "./pages/ReservationList/ReservationList";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import UsersMessages from "./pages/Admin/UsersMessages";
import SalonPrivate from "./pages/SalonPrivate/SalonPrivate";
import SalonPrivateDate from "./pages/SalonPrivate/SalonPrivateDate";
import SalonPrivateFormule from "./pages/SalonPrivate/SalonPrivateFormule";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import VerifyPassword from "./pages/ResetPassword/VerifyPassword";
import Admin from "./pages/Admin/Admin";
import NewsletterAdmin from "./pages/Admin/NewsletterAdmin";
import CookieConsent from "react-cookie-consent";
import MentionsLegales from "./pages/MentionsLegales/MentionsLegales";
import Cgu from "./pages/C.G.U/Cgu";
import ConditionsVente from "./pages/ConditionsVente/ConditionsVente";
import Politique from "./pages/Politique/Politique";
import { selectIsAdmin } from "./store/auth/authReducer";

const Private = ({ Component }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? <Component /> : <Navigate to="/connexion" />;
};
const AdminRoute = ({Component }) => {
  const isAdmin = useSelector(selectIsAdmin);

  return isAdmin ? <Component /> : <Navigate to="/connexion" />;
};

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/mon-compte" element={<Private Component={Account} />} />
        <Route
          path="/mes-reservations"
          element={<Private Component={ReservationList} />}
        />
        <Route
          path="/reserver/formules"
          element={<Private Component={FormulesUser}/>}
        />
        <Route
          path="/reserver/formules/dates"
          element={<Private Component={SelectDateTime}/>}
        />
        <Route
          path="/reserver/formules/dates/emplacement"
          element={<Private Component={Emplacement}/>}
        />

        <Route
          path="/reserver/salons-private"
          element={<Private Component={SalonPrivate}/>}
        />
        <Route
          path="/reserver/salons-private/formules"
          element={<Private Component={SalonPrivateFormule}/>}
        />
        <Route
          path="/reserver/salons-private/formules/dates"
          element={<Private Component={SalonPrivateDate}/>}
        />

        <Route path="/admin" element={<AdminRoute Component={Admin}/>} />
        <Route path="/admin/newsletter" element={<AdminRoute Component={NewsletterAdmin}/>} />
        <Route path="/admin/users" element={<AdminRoute Component={ListeUsers}/>} />
        <Route path="/admin/formules" element={<AdminRoute Component={FormulaireFormules}/>} />
        <Route path="/admin/reservation" element={<AdminRoute Component={ReservationsUtilisateur}/>} />
        <Route path="/admin/messages" element={<AdminRoute Component={UsersMessages}/>} />

        <Route path="/" element={<Home />} />
        <Route path="/concept" element={<Concept />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/reserver" element={<Reserver />} />
        <Route path="/qui-sommes-nous" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/connexion" element={<SignIn />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-password/verify" element={<VerifyPassword />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/conditions-generales-utilisation" element={<Cgu />} />
        <Route path="/conditions-vente" element={<ConditionsVente />} />
        <Route path="/politique-de-confidentialite" element={<Politique />} />



      </Routes>
      <CookieConsent
        style={{
          background: "#836349",
          height: "100px",
          display: "flex",
          alignItems: "center",
        }}
      buttonStyle={{
        background: "#fff",
        color: "#836349",
        fontSize: "20px",
        borderRadius: "5px",
        padding: "5px 10px",
        border: "1px solid #836349",
        margin: "0 10px",
        width: "200px",
      }
      }
      buttonText="J'accepte"
      >
        Ce site utilise des cookies pour améliorer l'expérience utilisateur.
      </CookieConsent>
      <Footer />
    </>
  );
}

export default App;
