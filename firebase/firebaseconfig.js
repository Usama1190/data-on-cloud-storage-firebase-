import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js";
import { getFirestore, doc, getDoc, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB5wQ_gSUkF14-_xY4hR4EbmfwXfE8HQJg",
    authDomain: "upload-user-data-on-firebase.firebaseapp.com",
    projectId: "upload-user-data-on-firebase",
    storageBucket: "upload-user-data-on-firebase.appspot.com",
    messagingSenderId: "504937220445",
    appId: "1:504937220445:web:252116b730e3aa8e7780b4",
    measurementId: "G-Y156D2E1NK"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export {storage, doc, getDoc, collection, addDoc, ref ,uploadBytes, uploadBytesResumable, getDownloadURL}
