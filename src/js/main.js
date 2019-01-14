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
	// $('#team-carousel').owlCarousel({
	// 	items: 1,
	// 	loop: true,
	// 	center: true,
	// 	margin: 10,
	// 	navText: ["",""],
	// 	nav: true
	// });
	// $('#docs-carousel').owlCarousel({
	// 	items: 3,
	// 	loop: true,
	// 	center: true,
	// 	margin: 10,
	// 	navText: ["",""],
	// 	nav: true
	// });
});