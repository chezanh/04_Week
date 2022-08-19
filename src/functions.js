let now = new Date();

let h3 = document.querySelector("h3");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

h3.innerHTML = `${day} ${date}, ${hours}:${minutes}, ${year}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.queryselector("#location-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
  if (searchInput.value) {
    h1.innerHTML = `${searchInput.value}`;
  } else {
    h1.innerHTML = null;
    alert("Please enter a location");
  }
  h1.innerHTML = `${searchInput.value}`;
}
