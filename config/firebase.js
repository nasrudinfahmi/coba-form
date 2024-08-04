import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBLxNTfhIUPR1HYWdSV1EvmIfa4zHANsbU",
  authDomain: "coba-form.firebaseapp.com",
  projectId: "coba-form",
  storageBucket: "coba-form.appspot.com",
  messagingSenderId: "139728355365",
  appId: "1:139728355365:web:cc3ddb8f33b9719aebffcc",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
