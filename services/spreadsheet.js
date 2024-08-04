async function fetchSpreadsheet(datas) {
  try {
    const scriptSpreadsheet =
      "https://script.google.com/macros/s/AKfycbwYNxldnsuwJrmSoEzIKdaO7nTKUmnPXqyZPvKQ5a-blvOgKJnIqd5v7mwCOVHrBtnD/exec";

    const formData = new FormData();

    formData.append("Nama", datas.nama);
    formData.append("Nomor Telepon", datas.noHp);
    formData.append("File", datas.fileUrl);

    await fetch(scriptSpreadsheet, { method: "POST", body: formData });
  } catch (error) {
    throw new Error("Gagal menambahkan data di spreadsheet!");
  }
}

export { fetchSpreadsheet };
