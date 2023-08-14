function register() {
  const form = document.forms["register-form"];

  const companyName = form["company-name"].value;
  const boothSize = form["booth-size"].value;
  const table = form["table"].value;
  const chair = form["chair"].value;
  const name = form["name"].value;
  const tel = form["tel"].value;

  if (!companyName || !name || !tel) {
    alert("Please fill in company information");
  }
  if (boothSize == 0) {
    alert("Please select booth size");
  }

  if (chair && chair >= 1 && chair <= 10) {
    alert("Number of chair must be between 1 and 10");
  }
  //submit
}
