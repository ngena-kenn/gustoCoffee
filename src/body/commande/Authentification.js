import React, { useEffect, useRef, useState } from "react";
import './style.css';
import { Button } from "@mui/material";
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import './form.scss'
import { useNavigate } from 'react-router-dom';


const Authentification = () => {
  const form = useRef();
  const [haveAccount, sethaveAccount] = useState(false)
  const [dataUser, setdataUser] = useState({})
  const [disable, setdisable] = useState(false)
  const navigate = useNavigate()

  const handleChangeModeCont = () => {
    sethaveAccount(!haveAccount)
    setdataUser({})
  }

  const handleChangeInputs = (e) => {
    console.log(e.target.name);
    setdataUser((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value }))
    console.log(dataUser);
  }

  useEffect(() => {
    const confirmedPass = dataUser?.user_pass === dataUser?.ser_confirm_pass;
    console.log(">>>>>>>>>>>>>>>>>>< ", confirmedPass);  
    console.log("cleee >>>>>>>>>>>>>>>>> ", Object.keys(dataUser));
  }, [dataUser])

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('form ', form.current);
    emailjs.sendForm('service_f0np3b7', 'template_dse3izh', form.current
      , '6Jj0FamXApTqAa_Ck')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    navigate('/home')
  };

  return (
    <div className="login" style={{ display: 'flex', position: 'relative', width: '100%', height: '100vh', backgroundColor: 'green', flex: 1 }}>
     <div className="">
      <Button onClick={() => {
        navigate('/home')
      }} style={{position: 'absolute', top: 5, right: 10}} 
      variant="contained" color="success">Continuer sans inscription ou connexion</Button>
     </div>
      <div className="myform" style={{margin: 'auto', backgroundColor: 'white', padding: 20 }}>
        {!haveAccount ?
          <form ref={form} onSubmit={sendEmail}
          style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <TextField
              onChange={handleChangeInputs}
              style={{ margin: '10px 0' }}
              type={'text'} required
              value={dataUser['user_name'] || ''}
              id="name" name="user_name"
              label="Nom" variant="outlined"
            />
            <TextField
              onChange={handleChangeInputs}
              style={{ margin: '10px 0' }}
              value={dataUser['reply_to'] || ''}
              id="email" label="Email"
              name="reply_to"
              type={'email'} 
              required variant="outlined"
            />
            <TextField
              onChange={handleChangeInputs}
              style={{ margin: '10px 0' }}
              id="password" label="Mot de passe"
              value={dataUser['user_pass'] || ''}
              type={'password'} name="user_pass"
              required variant="outlined"
              color={dataUser['user_pass'] === dataUser['user_confirm_pass'] && 'success'}
              error={dataUser['user_pass'] !== dataUser['user_confirm_pass']}
            />
            <TextField
              onChange={handleChangeInputs}
              style={{ margin: '10px 0' }}
              value={dataUser['user_confirm_pass'] || ''}
              id="confirm" label="Confirmer mot de passe"
              type={'password'} name="user_confirm_pass"
              required variant="outlined"
              color={dataUser['user_pass'] === dataUser['user_confirm_pass'] && 'success'}
              error={dataUser['user_pass'] !== dataUser['user_confirm_pass']}
            />
            <div className="action-btn" style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
              <Button 
                className="new-compte" 
                type="submit" 
                disabled={disable}
                onSubmit={sendEmail}  
                variant="outlined"
              >Créer un compte</Button>
              <Button onClick={handleChangeModeCont} variant="outlined">J'ai un compte</Button>
            </div>
          </form>
          :
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <TextField
              style={{ margin: '10px 0' }}
              type={'text'} required
              id="name" name="user_name"
              onChange={handleChangeInputs}
              value={dataUser['user_name'] || ''}
              label="Nom" variant="outlined"
            />
            <TextField
              style={{ margin: '10px 0' }}
              id="email" label="Email"
              onChange={handleChangeInputs}
              value={dataUser['user_email'] || ''}
              type={'email'} name="user_email"
              required variant="outlined"
            />
            <TextField
             onChange={handleChangeInputs}
              style={{ margin: '10px 0' }}
              id="password" label="Mot de passe"
              value={dataUser['user_pass'] || ''}
              type={'password'} required name="user_pass"
              variant="outlined" />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined">Se connecter</Button>
              <Button onClick={handleChangeModeCont} variant="outlined">Créer un compte</Button>
            </div>
          </div>
        }

      </div>
    </div>
    // <div className="container">
    //   <div className="inscription">
    //     <div className="left">
    //       <h1>Bon retour !</h1>
    //       <p>Connectez-vous avec votre compte<br></br> pour nous rejoindre !</p>
    //       <Button variant="outlined" color="info"  className="">
    //         <Link to="/connect"style={{textDecoration: 'none', color: 'black'}}>se connecter</Link>
    //         </Button>
    //     </div>
    //     <div style={{width: '40%', marginBottom: 10}}>
    //       <h1>Créer un compte</h1>
    //       <div className="social_media">
    //         <i className="fa-brands fa-facebook-f"></i>
    //         <i className="fa-brands fa-google-plus-g"></i>
    //         <i className="fa-brands fa-Linkedin-in"></i>
    //       </div>
    //       <form className="form" ref={form} onSubmit={sendEmail}>
    //         <input type="text" placeholder="Pseudo" name="user_name"></input>
    //         <input type="email" placeholder="EmaiL" name="user_email"></input>
    //         <input type="password" placeholder="Mot de passe"></input>
    //         <input type="password" placeholder="Confirmez mot de passe"></input>
    //         <input type="text" name="reply_to" value='massihadjloum@gmail.com' hidden></input>
    //         <input type={'submit'} value='Send' />
    //         <Button variant="outlined" color="info">
    //           {/* <Link to="/home" style={{textDecoration: 'none', color: 'black'}}>s'incrire</Link> */}
    //           s'incrire
    //         </Button>
    //       </form>
    //     </div>
    //   </div>
    // </div>

  )
}


export default Authentification;
