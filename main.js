// بسم الله الرحمن الرحيم

document.getElementById("btn").onclick = function () {
  let userName = document.getElementById("name").value;
  let nameResult = (document.getElementById(
    "nameResult"
  ).innerText = `welcome ${userName}`);
  let age = document.getElementById("age").value;
  let ageResult = (document.getElementById(
    "ageResult"
  ).innerText = `your age is ${age}`);
};
