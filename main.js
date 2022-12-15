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
    href: '#discography',
    name: 'Discography',
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
    src: 'img/belgradeJazzFestival.jpg',
    alt: 'John Birks Dizzy Gillespie',
    text: "Dizzy Gillespie first time in Belgrade",
  },
  {
    src: 'img/belgradeJazzFestival.jpg',
    alt: 'John Birks Dizzy Gillespie',
    text: "Dizzy Gillespie first time in Belgrade",
  }
];

for (let i in gallery_items__img) {
  $gallery_item.append(
    `<img class="gallery_items__img" src="${gallery_items__img[i].src}" alt="${gallery_items__img[i].alt}">`
  );
}

//gallery

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

  if (!lastName.value) {
    lastNameErr.classList.add('visible');
    lastName.classList.add('invalid');
    lastNameErr.setAttribute('aria-hidden', false);
    lastNameErr.setAttribute('aria-invalid', true);
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

  if (!agreeTerms.checked) {
    agreeTermsErr.classList.add('visible');
    agreeTerms.classList.add('invalid');
    agreeTermsErr.setAttribute('aria-hidden', false);
    agreeTerms.setAttribute('aria-invalid', true);
  }
}
