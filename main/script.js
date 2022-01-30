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

let inputVal = document.getElementById("inputValue")
const addBtn = document.getElementById("buttonForm");
const root = document.getElementById("lessonsContainerParent");

addBtn.addEventListener("click", function() {
const root = document.getElementById("lessonsContainerParent");

  const LC = document.createElement("div");
  const LP = document.createElement("div");
  const L = document.createElement("div");
  const LPH = document.createElement("div");
  const LI = document.createElement("div");
  const LIT = document.createElement("p");
  const LITa = document.createElement("a");

  LC.className = "lessonsContainer";
  LP.className = "lessonPattern";
  L.className = "lecturer";
  LPH.className = "lecturerPhoto";
  LI.className = "lecturerInfo";
  LIT.className = "lecturerInfoText";
  LITa.className = "lecturerInfoTextLink";

  LC.appendChild(LP);
  LP.appendChild(L);
  L.appendChild(LPH);
  L.appendChild(LI);
  LI.appendChild(LIT);
  LIT.appendChild(LITa);
  LITa.innerHTML = document.getElementById("inputValue").value
  if(LITa.innerHTML === "") {
    alert("Lesson name field is empty")
  } else {
    root.appendChild(LC);
  }
  document.getElementById("inputValue").placeholder = "JavaScript";
})
