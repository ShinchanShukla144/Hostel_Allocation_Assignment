import firebase from "../configs/firebase-congif";

const socialAuth = (provider) => {
    firebase.auth().signInWithPopup(provider).then((res)=>{
        return res.user;
    }).catch((er)=>{
        return er;
    })
};

export default socialAuth;