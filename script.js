// JS Slides

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// Section projects : Le contenu affiché change en fonction de la slide 

let listeDots=document.querySelectorAll('.dot');

listeDots.forEach(function(item) {
    item.addEventListener('click', function() {
        listeDots.forEach(function(i) {
            i.classList.remove('dot-active');
        })
        let description=document.querySelectorAll('.pd');
        description.forEach(function(d) {
            d.classList.remove('pd-active');
        })
        this.classList.add('dot-active');

        if(this.classList.contains('dot-1')) {
            let desc1=document.querySelector('.pd1');
            desc1.classList.add('pd-active');
        }
        if(this.classList.contains('dot-2')) {
            let desc2=document.querySelector('.pd2');
            desc2.classList.add('pd-active');
        }
        if(this.classList.contains('dot-3')) {
            let desc3=document.querySelector('.pd3');
            desc3.classList.add('pd-active');
        }
    })
})


// Couleur qui s'active sur les li du menu nav-pages


// Modal menu burger déroulant ("curtain menu")

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}