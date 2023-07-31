import {getAuth , onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { app } from "../../firebaseconfig";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const auth = getAuth(app);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <>
          <p>{`connecté en tant que  ${authUser.email}`}</p>
          <button onClick={userSignOut}>Déconnexion</button>
        </>
      ) : (
        <p>Déconnecté</p>
      )}
    </div>
  );
};

export default AuthDetails;