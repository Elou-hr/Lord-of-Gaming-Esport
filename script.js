function toggleMenu() {
  const menu = document.querySelector('.mobile-menu');
  const spans = document.querySelectorAll('.burger span');
  
  if (menu.style.display === "flex") {
    menu.style.display = "none";
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  } else {
    menu.style.display = "flex";
    // Animation petite croix pour le burger
    spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
  }
}