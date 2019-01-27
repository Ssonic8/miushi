$(document).ready(function(){

	$('#header-carousel').owlCarousel({
		items: 1,
		loop: true,
		center: true,
		margin: 10,
		responsive: {
				0: {
					nav: false
				},
				1170: {
					nav: false,
					navText: ["",""]
				}
			},
		pagination: true
	});
	$('.catalog__slider').owlCarousel({
		loop: true,
		center: true,
		margin: 2,
		responsive: {
				0: {
					items: 1,
					pagination: false
				},
				750: {
					items: 3,
					nav: true,
					navText: ["",""],
					pagination: true
				},
				1170: {
					items: 4,
					nav: true,
					navText: ["",""],
					pagination: true
				}
			},
		nav: false
	});
	$('#reviews-carousel').owlCarousel({
		loop: true,
		center: false,
		margin: 10,
		responsive: {
				0: {
					nav: false,
					pagination: false,
					items: 1
				},
				750: {
					nav: false,
					pagination: false,
					items: 2
				},
				1170: {
					nav: false,
					pagination: false,
					items: 3
				}
			}
	});

	var navList = document.querySelector('.main-nav__list'),
			contactsList = document.querySelector('.main-nav__contacts'),
			menuButton = document.querySelector('.main-nav__toggle'),
			closeButton = document.querySelector('.main-nav-close'),
			aboutButton = document.querySelector('.about__button-wrapper'),
			featuresButton = document.querySelector('.features__button-wrapper'),
			aboutParagraph = document.querySelectorAll('.about__paragraph--extra'),
			featuresItem = document.querySelectorAll('.features__item--extra'),
			footerHeaderSpan = document.querySelectorAll('.footer__menu-header span'),
			footerHeader = document.querySelectorAll('.footer__menu-header'),
			footerMenu = document.querySelectorAll('.footer__menu-list');


	menuButton.addEventListener('click', function(evt){
		evt.preventDefault();
		navList.classList.add('main-nav__list--active');
		contactsList.classList.add('main-nav__contacts--active');
		closeButton.addEventListener('click', function(evt){
			evt.preventDefault();
			navList.classList.remove('main-nav__list--active');
			contactsList.classList.remove('main-nav__contacts--active');
		});
	});

	aboutButton.addEventListener('click', function(evt){
		evt.preventDefault();
		aboutButton.classList.add('visually-hidden');
		aboutParagraph.forEach(function(par){
			par.classList.remove('about__paragraph--extra');
		});
	});

	featuresButton.addEventListener('click', function(evt){
		evt.preventDefault();
		featuresButton.classList.add('visually-hidden');
		featuresItem.forEach(function(item){
			item.classList.remove('features__item--extra');
		});
	});

	for (let i = 0; footerHeaderSpan.length; i++){
		footerHeaderSpan[i].addEventListener('click', function(){
			footerMenu[i].classList.toggle('footer__menu-list--active');
			footerHeader[i].classList.toggle('footer__menu-header--active');
		});
	};
});	
