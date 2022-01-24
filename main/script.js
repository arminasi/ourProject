function openForm() {
  if(document.getElementById("popupForm").style.display === "block") {
    document.getElementById("popupForm").style.display = "none";
    document.getElementById("myBtn").innerHTML = "Add";
  } else {
    document.getElementById("popupForm").style.display = "block";
    document.getElementById("myBtn").innerHTML = "Close";
  }
}

function changeMod() {
  let form = document.getElementById("container");
  let element = document.body;
  element.classList.toggle("dark-mode");
  form.style.background = "black";
  form.style.color = "white";
}