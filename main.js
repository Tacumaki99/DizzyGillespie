// Nav menu
const $main_nav__item = $('.main-nav__items');
const $mobile_nav__item = $('.mobile-nav__items');

const nav__item = [
    {
        linkHref:"#top",
        linkName:"Home"
    },
    {
        linkHref:"",
        linkName:"Gallery"
    },
    {
        linkHref:"index.html#reviews",
        linkName:"Discography"
    },
    {
        linkHref:"index.html#contact",
        linkName:"Contact"
    },
    {
        linkHref:"index.html#contact",
        linkName:"About"
    }
];
 //mainNav
for(let i in nav__item){
    $main_nav__item.append(`<li class="main-nav__item"><a href="${nav__item[i].linkHref}">${nav__item[i].linkName}</a></li>`);
}
 //mainNav
 //mobileNav
 for(let i in nav__item){
    $mobile_nav__item.append(`<li class="mobile-nav__item"><a href="${nav__item[i].linkHref}">${nav__item[i].linkName}</a></li>`);
}

var backdrop = document.querySelector('.backdrop');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

toggleButton.addEventListener("click", function() {
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
  });

backdrop.addEventListener("click", function() {
    mobileNav.classList.remove("open");
    backdrop.classList.remove("open");
  });
  //mobileNav
// Nav menu


let slideIndex = 0;
quoteSlidesShow();

function quoteSlidesShow() {
  let i;
  let quoteSlides = document.getElementsByClassName("quotes-slider");
  for (i = 0; i < quoteSlides.length; i++) {
    quoteSlides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > quoteSlides.length) {slideIndex = 1}    
  quoteSlides[slideIndex-1].style.display = "block";  
  setTimeout(quoteSlidesShow, 4000); // Change image every 2 seconds
}
