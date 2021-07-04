var main = document.getElementById("main-page");
var second = document.getElementById("second-page");
var third = document.getElementById("third-page");
var onOk = document.getElementById("ok");
var onOk1 = document.getElementById("ok1");
var onCancel = document.getElementById("cancel");
var onCancel1 = document.getElementById("cancel1");
var assign = document.getElementById("assign-groups");
var setValues = document.getElementById("set-values");

second.style.display = "none";
third.style.display = "none";

assign.addEventListener("click", () => {
  second.style.display = "block";
  main.style.display = "none";
  third.style.display = "none";
});

onOk.addEventListener("click", () => {
  second.style.display = "none";
  main.style.display = "block";
  third.style.display = "none";
});

onCancel.addEventListener("click", () => {
  second.style.display = "none";
  main.style.display = "block";
  third.style.display = "none";
});

onOk1.addEventListener("click", () => {
  second.style.display = "none";
  main.style.display = "block";
  third.style.display = "none";
});

onCancel1.addEventListener("click", () => {
  second.style.display = "none";
  main.style.display = "block";
  third.style.display = "none";
});

setValues.addEventListener("click", () => {
  second.style.display = "none";
  main.style.display = "none";
  third.style.display = "block";
});
