
window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 50;
  header.classList.toggle('scrolling-active', windowPosition);
})

window.addEventListener('scroll', function() {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 1600;
  header.classList.toggle('scrolling-active-footer', windowPosition);})

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}