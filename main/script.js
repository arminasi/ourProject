function openForm() {
  if(document.getElementById("popupForm").style.display === "block") {
    document.getElementById("popupForm").style.display = "none";
    document.getElementById("myBtn").innerHTML = "Add";
  } else {
    document.getElementById("popupForm").style.display = "block";
    document.getElementById("myBtn").innerHTML = "Close";
  }
}