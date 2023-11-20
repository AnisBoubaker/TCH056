// Fonction pour ouvrir la modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Fonction pour fermer la modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Fonction pour passer à la diapositive suivante
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Fonction pour afficher la diapositive actuelle
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  // Fonction pour afficher les diapositives
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }
  