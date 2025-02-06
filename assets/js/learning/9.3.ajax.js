const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.npoint.io/37b03059009dda95802a", true);

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log("Response :", xhr.responseText);
  } else {
    console.error("Error :", xhr.status);
  }
};
xhr.send();
