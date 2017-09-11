/* Выплывающее сверху вниз модальное окно */

var search = document.querySelector(".search-button");
var popup = document.querySelector(".search-container");
var form = popup.querySelector(".form-button");
var check_in = popup.querySelector("[name=check-in]");
var check_out = popup.querySelector("[name=check-out]");
var sum_adult = popup.querySelector("[name=sum-adult]");
var sum_child = popup.querySelector("[name=sum-child]");
if (window.localStorage) {
  var sum_adult_storage = localStorage.getItem("sum_adult");
  var sum_child_storage = localStorage.getItem("sum_child");
}

document.addEventListener("DOMContentLoaded", function (evt) {
  evt.preventDefault();
  if (sum_adult_storage && window.localStorage) {
    sum_adult.value = sum_adult_storage;
}
  if (sum_child_storage && window.localStorage) {
    sum_child.value = sum_child_storage;
  }
  popup.classList.remove("modal-show");
});

search.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  if (popup.classList.contains("modal-error")) {
    popup.classList.remove("modal-error");
  }
});

form.addEventListener("click", function (evt) {
  if (!check_in.value || !check_out.value || !sum_adult.value || !sum_child.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
      if (window.localStorage) {
        localStorage.setItem("sum_adult", sum_adult.value);
        localStorage.setItem("sum_child", sum_child.value);
      }
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

/* Интерактивная карта */

function initialize() {
  var mapOptions = {
    zoom: 9,
    center: new google.maps.LatLng(34.758,-111.737)
  };
  var map = new google.maps.Map(document.getElementById("map-sedona"), mapOptions);
  var myLatLng = new google.maps.LatLng(34.758,-111.737);
  var beachMaker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}
google.maps.event.addDomListener(window, "load", initialize);
