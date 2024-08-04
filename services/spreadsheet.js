async function fetchSpreadsheet(datas) {
  try {
    const scriptSpreadsheet =
      "https://script.google.com/macros/s/AKfycbwtacIzeECRmGq1CeJplllSZEhLm1JDcb5K7MDd-wXr8jn8qj55HcYQnZCwhOcHA-Am/exec";

    const formData = new FormData();

    formData.append("Nama", datas.nama);
    formData.append("Nomor Telepon", datas.noHp);
    formData.append("File", datas.fileUrl);
    formData.append("Preview", datas.fileUrl.split("&token=")[0]);

    await fetch(scriptSpreadsheet, { method: "POST", body: formData });
  } catch (error) {
    throw new Error("Gagal menambahkan data di spreadsheet!");
  }
}

export { fetchSpreadsheet };
