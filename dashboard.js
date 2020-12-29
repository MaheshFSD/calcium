function myFunction() {
    var x = document.getElementById("navbarjs");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }