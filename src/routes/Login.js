import { auth, googleProvider } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

export const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  console.log(auth?.currentUser?.email);
  console.log(auth?.currentUser?.photoURL);

  const signIn = async () => {
    try {
      if (password === confirmPassword) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        console.error("Passwords do not match");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{fontFamily:"sans-serif"}}>
        <div style={{color:"cadetblue"}}>
      <center><b>Create a DEV@Deakin Account</b></center>
        </div>
      <br />
      <label>Name </label>
      <input
        type="text"
        placeholder="Name.."
        onChange={(e) => setName(e.target.value)}
      />
      <br/>
      <br/>
      <label>Email </label>
      <input
        type="text"
        placeholder="Email.."
        onChange={(e) => setEmail(e.target.value)}
      />
      <br/>
      <br/>
      <label>Password </label>
      <input
        type="password"
        placeholder="Password.."
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/>
      <br/>
      <label>Confirm Password </label>
      <input
        type="password"
        placeholder="Confirm Password.."
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br/>
      <br/>
      <button onClick={signIn}>Create</button>
      <br/>
      <br/>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};
