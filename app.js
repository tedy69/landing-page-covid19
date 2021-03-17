const settings = {
  async: true,
  crossDomain: true,
  url: "https://covid19.mathdro.id/api/countries/indonesia",
  method: "GET",
};

document.addEventListener("DOMContentLoaded", () =>
  $.ajax(settings).done((response) => {
    createHtml(response);
  })
);

function createHtml(data) {
  var nf = new Intl.NumberFormat();

  var globalData = data;

  document.querySelector(".total-confirmed").innerHTML = nf.format(
    globalData.confirmed.value
  );
  document.querySelector(".total-death").innerHTML = nf.format(
    globalData.deaths.value
  );
  document.querySelector(".total-recovered").innerHTML = nf.format(
    globalData.recovered.value
  );
  document.querySelector(".total-active").innerHTML = nf.format(
    globalData.confirmed.value -
      globalData.recovered.value -
      globalData.deaths.value
  );
}

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function alertshow() {
  document.querySelector(".alert").style.display = "block";
}
