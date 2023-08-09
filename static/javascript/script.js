const nav = document.querySelector("nav");
document.addEventListener("scroll", function () {
  if (window.scrollY > 174) {
    nav.style.backgroundColor = "rgb(0, 0, 0)";
    nav.style.width = "100%";
    nav.style.padding = "10px 20px"
    nav.style.backdropFilter = "blur(10px)";
    nav.style.height = "fit-content";
    nav.style.borderBottom = "0px solid white";
  } else {
    nav.style.width = "90%";
    nav.style.borderBottom = "1px solid white";
    nav.style.height = "13vh";
    nav.style.backdropFilter = "blur(0)";
    nav.style.backgroundColor = "rgba(0,0,0,0)";
  }
});