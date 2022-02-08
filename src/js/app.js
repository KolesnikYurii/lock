import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

$(function () {

	$('.hero__slider').slick({
		prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-prev.svg" alt="logo" width="11" height="22"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-next.svg" alt="logo" width="11" height="22"></button>',
		dots: true,
		autoplay: true,
		speed: 400,
		fade: true,
		cssEase: 'linear'
	});

	$('.popular__slider').slick({
		prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-prev.svg" alt="logo" width="13" height="27"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-next.svg" alt="logo" width="13" height="27"></button>',
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		speed: 400,
	});
});