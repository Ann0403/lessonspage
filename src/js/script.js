
(function () {
	const burger = document.querySelector('.button-burger');
	burger.addEventListener('click', () => {
		burger.classList.toggle('burger_active');
	
});
}());

$(function() {
  $('.button-burger').click(function() {
    $('.header__menu__item').slideToggle();
  });
});