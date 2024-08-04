function clearValueForm(...args) {
  args.forEach((field) => {
    field.value = "";
    field.value = "";
    field.value = "";
    field.value = "";
  });
}

function checkAndFormatPhoneNumber(phoneNumber) {
  if (!phoneNumber) return false;

  const phoneRegex = /^(?:\+62|62|0)[2-9]{1}[0-9]{7,11}$/;

  if (phoneRegex.test(phoneNumber)) {
    let formattedNumber = phoneNumber.replace(/^\+?0/, "");

    if (!formattedNumber.startsWith("62")) {
      formattedNumber = "62" + formattedNumber;
    }

    return formattedNumber;
  } else {
    return false;
  }
}

export { clearValueForm, checkAndFormatPhoneNumber };
