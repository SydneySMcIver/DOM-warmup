let div = document.createElement("div");
div.className = "alert";
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

function clickablediv() {
  document.getElementById("alert").style.background = "green";
}
