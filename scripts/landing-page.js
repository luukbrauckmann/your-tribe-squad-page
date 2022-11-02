addEventListener('wheel', (event) => {
	if (event.deltaY == 100) hideLandingPage()
}, false)
addEventListener('touchstart', (event) => touchStart(event.touches[0].clientY), false)
addEventListener('touchmove', (event) => touchmove(event.touches[0].clientY), false)

var initialY = null;
function touchStart(clientY) {
	initialY = clientY;
}
function touchmove(clientY) {
	if (initialY === null) return
	const currentY = clientY
	const diffY = initialY - currentY;
	if (diffY > 0) hideLandingPage()
}

/**
 * Functie om landingpage te verbergen
 * Opacity wordt elke scrolltik .1 omlaag gezet
 * Als opacity kleiner of gelijk aan .6 is wordt het naar 0 gezet
 * Aan het einde wordt er 300ms gewacht om als opacity groter dan .6 is het te resetten naar 1.
 */
var opacity = 1
function hideLandingPage() {
	if (opacity != 0) {
		opacity = opacity - .1
		const element = document.getElementById('landing-page')
		if (opacity <= .6) opacity = 0
		element.style.opacity = opacity
		setTimeout(() => {
			if (opacity > .6) opacity = 1
			else element.style.display = 'none'
			element.style.opacity = opacity
		}, 300);
	}
}
