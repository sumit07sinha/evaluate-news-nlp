function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let inputURL = document.getElementById("name").value;
  if (Client.validationOfURL(JSON.parse(JSON.stringify(inputURL)))) {
    console.log("::: FORM INPUT VALID :::");

    console.log("BUILDING REQUEST");
    fetch("http://localhost:8080/article", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: inputURL }),
    })
      .then((res) => console.log(res.json()))
      .then(function (res) {
        // print for debugging
        console.log(res);
        document.getElementById("text").innerHTML = res.text;
        document.getElementById("polarity").innerHTML = res.polarity;
        document.getElementById("subjectivity").innerHTML = res.subjectivity;
        document.getElementById("polarityConfidence").innerHTML =
          res.polarity_confidence;
      });
  } else {
    // Display error message if URL is not valide
    var errorSection = document.querySelector(".errorSection");
    var error = document.querySelector("section.errorSection #error");
    error.innerHTML =
      "The URL:[" +
      JSON.stringify(inputURL) +
      "] is not a valid URL. Please enter a valid url";
    errorSection.style.display = "block";
  }
}
export { handleSubmit };
