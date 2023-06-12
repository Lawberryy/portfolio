// JS Slides

let slideIndex = 1;
showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

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
        if(this.classList.contains('dot-4')) {
          let desc4=document.querySelector('.pd4');
          desc4.classList.add('pd-active');
        }
        if(this.classList.contains('dot-5')) {
          let desc5=document.querySelector('.pd5');
          desc5.classList.add('pd-active');
        }
        if(this.classList.contains('dot-6')) {
          let desc6=document.querySelector('.pd6');
          desc6.classList.add('pd-active');
        }
        if(this.classList.contains('dot-7')) {
          let desc7=document.querySelector('.pd7');
          desc7.classList.add('pd-active');
        }
        if(this.classList.contains('dot-8')) {
          let desc8=document.querySelector('.pd8');
          desc8.classList.add('pd-active');
        }
    })
})


// Modal menu burger déroulant ("curtain menu")
// ouverture du menu burger
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}
// fermeture du menu
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}


// <----- Animation texte tapé (h1) ------>

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
  }

  setTimeout(function() {
      that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};