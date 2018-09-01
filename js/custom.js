/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Home Slider
4. Init Menu

******************************/
$(document).ready(function () {
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var menu = $('.menu');
	var menuActive = false;
	var sideMenu = $('.hamburger-side-menu');
	var header = $('.header');
	var imgIndex = 0;
	var images = ["./images/cert-java.jpg", "./images/cert-html.jpg", "./images/cert-css.jpg", "./images/cert-js.jpg", "./images/cert-jquery.jpg", "./images/cert-php.jpg", "./images/cert-sql.jpg"];

	$('a[href^="#"]').on('click', function (event) {
		event.preventDefault();

		if (menuActive) {
			closeMenu();
		}

		var scrollTo = $($.attr(this, 'href')).offset().top;
		$('html, body').animate({ scrollTop: scrollTo == 0 ? 143 : scrollTo }, 500);
	});

	if (window.scrollY >= 143) {
		sideMenu.removeClass('d-none');
	} else {
		sideMenu.addClass('d-none');
	}

	$(document).on('scroll', function () {
		//setHeader();
		if (window.scrollY >= 143) {
			sideMenu.removeClass('d-none');
		} else if (window.innerWidth <= 575 && window.innerWidth > 377 && window.scrollY >= 60) {
			sideMenu.removeClass('d-none');
		} else if (window.innerWidth <= 377 && window.scrollY >= 80) {
			sideMenu.removeClass('d-none');
		} else {
			sideMenu.addClass('d-none');
		}
	});

	/*
	setHeader();
	*/
	initMenu();
	initHomeSlider();

	/* 

	2. Set Header

	*/

	function setHeader() {
		if (window.innerWidth < 992) {
			if ($(window).scrollTop() > 100) {
				header.addClass('scrolled');
			}
			else {
				header.removeClass('scrolled');
			}
		}
		else {
			if ($(window).scrollTop() > 100) {
				header.addClass('scrolled');
			}
			else {
				header.removeClass('scrolled');
			}
		}
		if (window.innerWidth > 991 && menuActive) {
			closeMenu();
		}
	}

	/* 

	3. Init Home Slider

	*/

	function initHomeSlider() {

		/* Custom nav events */
		if ($('.home_slider_prev').length) {

			$('.home_slider_prev').on('click', function () {
				imgIndex -= 1;

				if (imgIndex < 0) {
					imgIndex = images.length - 1;
				}

				$('img.center-fit').attr('src', images[imgIndex]);
				$('.item-count').html((imgIndex + 1) + '/' + images.length);
			});
		}

		if ($('.home_slider_next').length) {

			$('.home_slider_next').on('click', function () {
				imgIndex += 1;

				if (imgIndex >= images.length) {
					imgIndex = 0;
				}

				$('img.center-fit').attr('src', images[imgIndex]);
				$('.item-count').html((imgIndex + 1) + '/' + images.length);
			});
		}

	}

	/* 

	4. Init Menu

	*/

	function initMenu() {
		if ($('.hamburger').length && $('.menu').length) {
			var hamb = $('.hamburger');
			var close = $('.menu_close_container');

			hamb.on('click', function () {
				if (!menuActive) {
					openMenu();
				}
				else {
					closeMenu();
				}
			});

			sideMenu.on('click', function () {
				if (!menuActive) {
					openMenu();
				}
				else {
					closeMenu();
				}
			});

			close.on('click', function () {
				if (!menuActive) {
					openMenu();
				}
				else {
					closeMenu();
				}
			});
		}
	}

	function openMenu() {
		menu.addClass('active');
		header.addClass('position-fixed');
		sideMenu.addClass('d-none');
		menuActive = true;
	}

	function closeMenu() {
		menu.removeClass('active');
		header.removeClass('position-fixed');
		sideMenu.removeClass('d-none');
		menuActive = false;
	}
});