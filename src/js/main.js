$(document).ready(function(){
	let menu = document.querySelector('.main-nav'),
			menuButton = document.querySelector('.main-nav__toggle'),
			closeButton = document.querySelector('.main-nav-close');

	menuButton.addEventListener('click', function(evt){
		evt.preventDefault();
		menu.classList.add('main-nav--active');
		closeButton.addEventListener('click', function(evt){
			evt.preventDefault();
			menu.classList.remove('main-nav--active');
		});
	});

	$('#header-carousel').owlCarousel({
		items: 1,
		loop: true,
		center: true,
		margin: 10,
		navText: ["",""],
		nav: false,
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