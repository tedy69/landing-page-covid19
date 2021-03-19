var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
switch (hari) {
  case 0:
    hari = "Minggu";
    break;
  case 1:
    hari = "Senin";
    break;
  case 2:
    hari = "Selasa";
    break;
  case 3:
    hari = "Rabu";
    break;
  case 4:
    hari = "Kamis";
    break;
  case 5:
    hari = "Jum'at";
    break;
  case 6:
    hari = "Sabtu";
    break;
}
switch (bulan) {
  case 0:
    bulan = "Januari";
    break;
  case 1:
    bulan = "Februari";
    break;
  case 2:
    bulan = "Maret";
    break;
  case 3:
    bulan = "April";
    break;
  case 4:
    bulan = "Mei";
    break;
  case 5:
    bulan = "Juni";
    break;
  case 6:
    bulan = "Juli";
    break;
  case 7:
    bulan = "Agustus";
    break;
  case 8:
    bulan = "September";
    break;
  case 9:
    bulan = "Oktober";
    break;
  case 10:
    bulan = "November";
    break;
  case 11:
    bulan = "Desember";
    break;
}
var tampilTanggal =
  hari + ", tanggal " + tanggal + " " + bulan + " " + tahun;

document.querySelector(".get-time").innerHTML = tampilTanggal;
  

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

function toSticky() {
  navbar.classList.add("sticky");
}

function alertshow() {
  document.querySelector(".alert").style.display = "block";
}
