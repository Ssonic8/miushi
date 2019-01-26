$(document).ready(function(){
	let navList = document.querySelector('.main-nav__list'),
			contactsList = document.querySelector('.main-nav__contacts'),
			menuButton = document.querySelector('.main-nav__toggle'),
			closeButton = document.querySelector('.main-nav-close');

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

	$('#header-carousel').owlCarousel({
		items: 1,
		loop: true,
		center: true,
		margin: 10,
		navText: ["",""],
		responsive: {
				0: {
					nav: false
				},
				1170: {
					nav: true
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
});