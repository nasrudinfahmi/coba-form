import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
import { storage } from "../config/firebase.js";

async function uploadFile(folder, fileName, file) {
  try {
    const storageRef = ref(storage, `${folder}/${fileName}`);

    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);

    return url;
  } catch (error) {
    throw new Error("Gagal Upload Gambar");
  }
}

export { uploadFile };
