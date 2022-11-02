addEventListener('load', (event) => onInit())

var squad = null

function onInit() {
	getSquad()
	getFooter()
}

/**
 * Data getter via fetch api
 * Relative file path: ../assets/squad.json
 */
function getSquad() {
	fetch('./assets/squad.json')
		.then((response) => response.json())
		.then((data) => {
			squad = data
			buildUniverse()
		})
}

function getFooter() {
	const year = new Date().getFullYear()
	const footer = document.getElementById('root-footer')
	footer.innerText = `© ${year} · Team Testmilu`
}

/**
 * Builds universe based on list
 */
function buildUniverse() {
	console.log(squad);
	const universe = [
		squad.slice(0, 10),
		squad.slice(10, 16),
		squad.slice(16, 19),
	]
	console.log(universe);
	// const personsPerOrbit = Math.ceil(squad.length / 3)
	// for (let i = 0; i < squad.length; i += personsPerOrbit) {
  //   const chunk = squad.slice(i, i + personsPerOrbit);
	// 	universe.push(chunk)
	// }
	const parent = document.getElementById('ovals')
	universe.forEach((orbit, index) => {
		const htmlOrbit = getOrbit(orbit, index)
		parent.appendChild(htmlOrbit)
	})
}

/**
 * Builds & returns html elements
 */
function getOrbit(items, index) {
	const oval = document.createElement('div')
	oval.classList.add('oval', `oval-${index}`)
	const carousel = document.createElement('div')
	carousel.classList.add('carousel')
	items.forEach((item, index) => {
		const child = getPlanet(item, index, items.length)
		carousel.appendChild(child)
	})
	oval.appendChild(carousel)
	return oval
}

/**
 * Builds & returns html element
 */
function getPlanet(item, index, arrayLength) {
	const a = document.createElement('a')
	a.href = item.pageUrl
	a.classList.add('carousel__item')
	a.style.animationDelay = item.animationDelay
	const img = document.createElement('img')
	img.src = item.imgUrl
	img.classList.add('bm-white')
	const p = document.createElement('p')
	p.innerText = item.name
	p.classList.add('hide')

	a.appendChild(img)
	a.appendChild(p)
	return a
}