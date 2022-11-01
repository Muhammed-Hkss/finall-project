import * as firebase from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { createNewUser } from '../api';



const firebaseConfig = {
  apiKey: "AIzaSyBIgga7xBX53wPwxrTyN7N-bPTypzBDUuA",
  authDomain: "database-72d13.firebaseapp.com",
  projectId: "database-72d13",
  storageBucket: "database-72d13.appspot.com",
  messagingSenderId: "890481094452",
  appId: "1:890481094452:web:52f13dde826cedde783f61",
  measurementId: "G-5LWRE15Q15"
};



const app = firebase.initializeApp(firebaseConfig);


export const auth = getAuth(app)


const provider = new GoogleAuthProvider()

export const handelLoginWithGoogle = () => signInWithPopup(auth , provider)



export const handelLoginWithEmailAndPassword =  async (useremail , userpassword ) => {
  try{
    await signInWithEmailAndPassword(auth, useremail , userpassword)  
  }catch(e){

  }
}

export const handelRegisrterWithEmailAndPassword = async (useremail , userpassword , name , photo , number , id) => {
  try{
    const res = await createUserWithEmailAndPassword(auth, useremail , userpassword)
    console.log(res);
    updateProfile(res.user , {
      displayName:name,
      phoneNumber:number,
      // phoneNumber: phoneNumber,
      photoURL:photo,
      userId:id
    })
     createNewUser(res.user.uid, res ).then(r => {
      console.log(r);
    })

  }catch{
    
  }
}

export const handelSignOut = () => signOut(auth)

