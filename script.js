function showGuide(section) {
  document.getElementById('welcome').style.display = 'none';
  var guides = document.querySelectorAll('.guide');
  for (var i = 0; i < guides.length; i++) {
    guides[i].style.display = 'none';
  }
  document.getElementById(section).style.display = 'block';
}
function showWelcome() {
  document.getElementById('welcome').style.display = 'block';
  var guides = document.querySelectorAll('.guide');
  for (var i = 0; i < guides.length; i++) {
    guides[i].style.display = 'none';
  }
}
