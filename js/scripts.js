//Нужный скрипт

var docWidth = window.innerWidth;
var docHeight = window.innerHeight;
var deviceMobile = docWidth <= 425 && docWidth >= 320;
var deviceTablet = docWidth <= 768 && docWidth > 425;
var deviceLaptop = docWidth <= 1024 && docWidth > 768;
var deviceComp = docWidth > 1024;

$(document).ready(() => {
	$(window).bind("resize", () => {
		docWidth = window.innerWidth;
		docHeight = window.innerHeight;
		deviceMobile = docWidth <= 425 && docWidth >= 320;
		deviceTablet = docWidth <= 768 && docWidth > 425;
		deviceLaptop = docWidth <= 1024 && docWidth > 768;
		deviceComp = docWidth > 1024;
	});
});

function testFunction() {
	alert("Функция успешно работает!");
}


//Главный скрипт

var copyrite = "© Psylab";

$(document).ready(() => {
	console.log(copyrite);

	setRandomLineSec6();

	function setRandomLineSec6() {
		$(".sec6>.cont>.wrap>.line>.block>.dark>hr").each(function(i, el) {
			$(".sec6>.cont>.wrap>.line>.block>.dark>hr").eq(i).addClass("num-" + getRandomNumber(3));
		});

		function getRandomNumber(to) {
			return Math.floor(1 + Math.random() * to);
		}
	}
});
