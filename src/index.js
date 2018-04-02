import "../scss/main.scss";

var item = document.getElementsByClassName("carouselimg");
var back = document.getElementById("back");
var forward = document.getElementById("forward");

forward.onclick = function plusDivs(n) {
  n = 1
  showDivs(slideIndex += n);
};
back.onclick = function plusDivs(n) {
  n = -1
  showDivs(slideIndex += n);
};

var slideIndex = 1;

function showDivs(n) {
  var i;
  if (n > item.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = item.length
  };
  for (i = 0; i < item.length; i++) {
    item[i].style.display = "none";
  }
  item[slideIndex - 1].style.display = "flex";
}

var sitem = document.getElementsByClassName("carouselitem");
var sback = document.getElementById("sback");
var sforward = document.getElementById("sforward");

sforward.onclick = function splusDivs(sn) {
  sn = 1
  sshowDivs(sslideIndex += sn);
};
sback.onclick = function splusDivs(sn) {
  sn = -1
  sshowDivs(sslideIndex += sn);
};

var sslideIndex = 1;

function sshowDivs(sn) {
  var si;
  if (sn > sitem.length) {
    sslideIndex = 1
  }
  if (sn < 1) {
    sslideIndex = sitem.length
  };
  for (si = 0; si < sitem.length; si++) {
    sitem[si].style.display = "none";
  }
  sitem[sslideIndex - 1].style.display = "flex";
}
