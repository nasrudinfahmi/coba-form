import { fetchSpreadsheet } from "../services/spreadsheet.js";
import { uploadFile } from "../services/storage.js";
import { checkAndFormatPhoneNumber, clearValueForm } from "../utils/utils.js";

const form = document.getElementById("test-form");
const loading = document.getElementById("loading-container");
const nama = document.getElementById("nama");
const noHp = document.getElementById("noHP");
const file = document.getElementById("file");

form.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();

    if (
      nama.value?.trim() == "" ||
      noHp.value?.trim() == "" ||
      file.files.length == 0
    ) {
      clearValueForm(nama, noHp, file);
      return alert("Data Tidak Valid!");
    }

    const nomorHp = checkAndFormatPhoneNumber(noHp.value);

    if (!nomorHp) {
      clearValueForm(nama, noHp, file);
      return alert("Nomor Telepon Tidak Valid!");
    }

    const fileImg = file.files[0];
    if (fileImg.type.split("/")[0] !== "image") {
      clearValueForm(nama, noHp, file);
      return alert("Gambar Tidak Valid!");
    }

    loading.style.display = "block";

    const fileUrl = await uploadFile(
      "gambar-form",
      new Date().getTime() + fileImg.name,
      fileImg
    );

    const datas = {
      nama: nama.value.trim(),
      noHp: nomorHp.trim(),
      fileUrl,
    };

    await fetchSpreadsheet(datas);
    clearValueForm(nama, noHp, file);
    loading.style.display = "none";
  } catch (error) {
    console.log(error.message);
    alert("Ada sesuatu yang salah!");
  }
});
