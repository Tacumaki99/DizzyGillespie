// Nav menu
const $main_nav__item = $('.main-nav__items');
const $mobile_nav__item = $('.mobile-nav__items');

const nav__item = [
  {
    href: 'index.html',
    name: 'Home',
  },
  {
    href: '#gallery',
    name: 'Gallery',
  },
  {
    href: '#contact',
    name: 'Contact',
  },
  {
    href: '#author',
    name: 'Author',
  },
];
//mainNav
for (let i in nav__item) {
  $main_nav__item.append(
    `<li class="main-nav__item"><a href="${nav__item[i].href}">${nav__item[i].name}</a></li>`
  );
}
//mainNav
//mobileNav
for (let i in nav__item) {
  $mobile_nav__item.append(
    `<li class="mobile-nav__item"><a href="${nav__item[i].href}">${nav__item[i].name}</a></li>`
  );
}

var backdrop = document.querySelector('.backdrop');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

toggleButton.addEventListener('click', function () {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});

backdrop.addEventListener('click', function () {
  mobileNav.classList.remove('open');
  backdrop.classList.remove('open');
});

document
  .querySelector('.mobile-nav__item')
  .addEventListener('click', function () {
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
  });
//mobileNav
// Nav menu

// quoteSlider
let slideIndex = 0;
quoteSlidesShow();

function quoteSlidesShow() {
  let i;
  let quoteSlides = document.getElementsByClassName('quotes-slider');
  for (i = 0; i < quoteSlides.length; i++) {
    quoteSlides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > quoteSlides.length) {
    slideIndex = 1;
  }
  quoteSlides[slideIndex - 1].style.display = 'block';
  setTimeout(quoteSlidesShow, 4000); 
}
// quoteSlider

//gallery

const $gallery_item = $('.gallery_items_container');
const gallery_items__img = [
  {
    src: 'img/dizzygillespie.jpg',
    alt: 'John Birks Dizzy Gillespie',
    text: "John Birks 'Dizzy' Gillespie was an American jazz trumpeter, bandleader, composer, educator and singer.",
  },
  {
    src: 'img/dizzy-gillespie-beograd-1955.jpg',
    alt: 'John Birks Dizzy Gillespie',
    text: "Dizzy Gillespie first time in Belgrade. Dizzy Gillespie had his first concert in Belgrade, 1955. in the premises of Kolarac",
  },
  {
    src: 'img/DizzyGillespieBalloonCheeks.jpg',
    alt: 'Dizzy Gillespie`s Balloon Cheeks',
    text: "He was know for his balloon cheeks. His mouth's buccinator muscles that line the cheeks were very streched and deformed.",
  },
  {
    src: 'img/trumpeter,bandleader.jpg',
    alt: 'Jazz ansambl',
    text: "He was a trumpeter, bandleader, composer, educator and singer.",
  }
  ,
  {
    src: 'img/unique_trumpet.jpg',
    alt: 'Dizzy Gillespie`s unique trumpet',
    text: "His unique trumpet desinge comes from accidental damage that happend on stage. The dancers Stump and Stumpy falling onto the instrument while it was on a trumpet stand on stage at Snookie's in Manhattan on January 6. 1953.",
  }
];

for (let i in gallery_items__img) {
  $gallery_item.append(
    `<img class="gallery_items__img" src="${gallery_items__img[i].src}" alt="${gallery_items__img[i].alt}">`
  );
}



//gallery

//discography
//discography

//contact
var first_name = document.getElementById('first_name');
var last_name = document.getElementById('last_name');
var email = document.getElementById('email');
var agree_terms = document.getElementById('agree-terms');

const submit = document.getElementById('submit');

submit.addEventListener('click', validateForm);

function validateForm(e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName');
  const firstNameErr = document.getElementById('firstNameErr');
  const lastName = document.getElementById('lastName');
  const lastNameErr = document.getElementById('lastNameErr');
  const email = document.getElementById('email');
  const emailErr = document.getElementById('emailErr');
  const agreeTerms = document.getElementById('agreeTerms');
  const agreeTermsErr = document.getElementById('agreeTermsErr');

  if (!firstName.value) {
    firstNameErr.classList.add('visible');
    firstName.classList.add('invalid');
    firstNameErr.setAttribute('aria-hidden', false);
    firstName.setAttribute('aria-invalid', true);
  }
  else {
    firstNameErr.classList.remove('visible');
    firstName.classList.remove('invalid');
    firstNameErr.setAttribute('aria-hidden', true);
    firstName.setAttribute('aria-invalid', false);
  }

  if (!lastName.value) {
    lastNameErr.classList.add('visible');
    lastName.classList.add('invalid');
    lastNameErr.setAttribute('aria-hidden', false);
    lastNameErr.setAttribute('aria-invalid', true);
  }
  else {
    lastNameErr.classList.remove('visible');
    lastName.classList.remove('invalid');
    lastNameErr.setAttribute('aria-hidden', true);
    lastNameErr.setAttribute('aria-invalid', false);
  }

  console.log(email.value);
  if (!email.value) {
    emailErr.classList.add('visible');
    email.classList.add('invalid');
    emailErr.setAttribute('aria-hidden', false);
    email.setAttribute('aria-invalid', true);
  } else if (
    !email.value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      )
  ) {
    emailErrValid.classList.add('visible');
    email.classList.add('invalid');
    emailErrValid.setAttribute('aria-hidden', false);
    email.setAttribute('aria-invalid', true);
  }
  else {
    emailErrValid.classList.remove('visible');
    email.classList.remove('invalid');
    emailErrValid.setAttribute('aria-hidden', true);
    email.setAttribute('aria-invalid', false);
  }

  if (!agreeTerms.checked) {
    agreeTermsErr.classList.add('visible');
    agreeTerms.classList.add('invalid');
    agreeTermsErr.setAttribute('aria-hidden', false);
    agreeTerms.setAttribute('aria-invalid', true);
  }
  else {
    agreeTermsErr.classList.remove('visible');
    agreeTerms.classList.remove('invalid');
    agreeTermsErr.setAttribute('aria-hidden', true);
    agreeTerms.setAttribute('aria-invalid', false);
  }
}
//contact