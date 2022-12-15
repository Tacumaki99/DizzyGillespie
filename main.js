// Nav menu
const $main_nav__item = $('.main-nav__items');
const $mobile_nav__item = $('.mobile-nav__items');

const nav__item = [
    {
        href:"index.html",
        name:"Home"
    },
    {
        href:"#gallery",
        name:"Gallery"
    },
    {
        linkHref:"index.html#reviews",
        linkName:"Discography"
    },
    {
        href:"index.html#contact",
        name:"Contact"
    },
    {
        href:"index.html#contact",
        name:"About"
    }
];
 //mainNav
for(let i in nav__item){
    $main_nav__item.append(`<li class="main-nav__item"><a href="${nav__item[i].href}">${nav__item[i].name}</a></li>`);
}
 //mainNav
 //mobileNav
 for(let i in nav__item){
    $mobile_nav__item.append(`<li class="mobile-nav__item"><a href="${nav__item[i].href}">${nav__item[i].name}</a></li>`);
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

  document.querySelector('.mobile-nav__item').addEventListener("click", function() {
    mobileNav.classList.remove("open");
    backdrop.classList.remove("open");
  });
  //mobileNav
// Nav menu

// quoteSlider
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
};
// quoteSlider

//gallery

const $gallery_item = $('.gallery_items_container');
const gallery_items__img = [
  {
      src:"img/dizzygillespie.jpg",
      alt:"John Birks Dizzy Gillespie",
      text:"John Birks 'Dizzy' Gillespie was an American jazz trumpeter, bandleader, composer, educator and singer."
  },
  {
    src:"img/belgradeJazzFestival.jpg",
    alt:"John Birks Dizzy Gillespie",
    text:"John Birks 'Dizzy' Gillespie was an American jazz trumpeter, bandleader, composer, educator and singer."
}
];

for(let i in gallery_items__img){
  $gallery_item.append(`<div class="gallery_items><img src="${gallery_items__img[i].src}" alt="${gallery_items__img[i].alt}" class="gallery_item_img"/></div>`);
}

//gallery