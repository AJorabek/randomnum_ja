let form = document.getElementById("form");
let deg = document.getElementById("color-degree");
let color1;
let color2;
let degree = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  color1 = form["color-input-1"].value;
  color2 = form["color-input-2"].value;
  document.body.style.backgroundImage = `linear-gradient(${degree}deg,${color1},${color2})`;
});
deg.addEventListener("input", () => {
  degree = deg.value;
  document.body.style.backgroundImage = `linear-gradient(${degree}deg,${color1},${color2})`;
});