var acc = document.getElementsByClassName("list");
    var i;

        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
    var vibor = this.nextElementSibling;
       if (vibor.style.display === "block") {
       vibor.style.display = "none";
    } else {
      vibor.style.display = "block";
    }
  });
}