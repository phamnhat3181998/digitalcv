function handleSubmit() {
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  const errorEmail = document.getElementById("error-email");
  const checkEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const check = emailValue.match(checkEmail);
  const sectionContent = document.querySelector("#personal-info .mt-40");
  const submitControl = document.querySelector(".submit-email");
  if (check) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui long nhap dung dinh dang Email";
  }
}

// function handleOnMouseOver(element) {
//   const viewMore = element.querySelector(".view-more");
//   viewMore.style.display = "inline-block";
// }
// function handleOnMouseOut(element) {
//   const viewMore = element.querySelector(".view-more");
//   viewMore.style.display = "none";
// }
// function handleViewMore(element) {
//   const parentElement = element.closest(".parent");
//   const viewMore = parentElement.querySelector(".view-more");

//   if (viewMore.innerHTML == "View more") {
//     const sectionContent = parentElement.querySelectorAll(".jsCript");
//     sectionContent.forEach((element) => {
//       element.style.display = "block";
//     });
//     viewMore.innerHTML = "Less more";
//   } else {
//     const sectionContent = parentElement.querySelectorAll(".jsCript");
//     sectionContent.forEach((element) => {
//       element.style.display = "none";
//     });
//     viewMore.innerHTML = "View more";
//   }
// }

function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const sectionContent = parentElement.querySelector(".jsCript");
  const viewMore = parentElement.querySelector(".view-more");

  if (
    sectionContent.style.display === "none" ||
    sectionContent.style.display === ""
  ) {
    sectionContent.style.display = "block";
    viewMore.innerHTML = "Less more";
  } else {
    sectionContent.style.display = "none";
    viewMore.innerHTML = "View more";
  }
}
