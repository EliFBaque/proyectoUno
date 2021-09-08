let divGameIndex = document.querySelector(".game-container")
	
CreacionInicial()

/* Seleccion dentro de los divs*/

let dataTitulo = document.querySelectorAll(".data-titulo")
let dataImg = document.querySelectorAll(".data-img")
let dataDescripcion = document.querySelectorAll(".data-descripcion")
let dataGenero = document.querySelectorAll(".data-genero")
let dataUrl = document.querySelectorAll(".game-url")
let gameCards = document.querySelectorAll(".game-card")
let opcionesMenu = document.querySelectorAll(".menu ul li a")	
let array = []

/* Juegos Random En pagina principal */
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://free-to-play-games-database.p.rapidapi.com/api/games",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
		"x-rapidapi-key": "9090cdf2ffmsh1fc4e5881b7989ap1a3715jsnddd7653576cb"
	}
};

$.ajax(settings).done(function (response){
	while(array.length < 15){
		numRandom = Math.floor(Math.random() * ((response.length - 0) + 0)) 
		if(!(array.includes(numRandom))){
			array.push(numRandom)
		}
	}

	for(let i = 0; i < gameCards.length; i++) {
		dataTitulo[i].textContent = response[array[i]].title
		dataGenero[i].textContent = response[array[i]].genre
		dataDescripcion[i].textContent = response[array[i]].short_description
		dataImg[i].setAttribute("src", response[array[i]].thumbnail)
		dataUrl[i].setAttribute("href", response[array[i]].game_url)
	}
});

function CreacionInicial(){
	for(let i = 0 ; i < 15; i++){

		let divGameCardIndex = document.createElement("div")
		let aGameUrlIndex = document.createElement("a")
		let imgGameSectionIndex = document.createElement("img")
		let h1DataTituloIndex = document.createElement("h1") 
		let pDataGeneroIndex = document.createElement("p") 
		let pDataDescripcionIndex = document.createElement("p")
	
		divGameCardIndex.setAttribute("class", "game-card")
		aGameUrlIndex.setAttribute("class", "game-url")
		aGameUrlIndex.setAttribute("target", "_blank")
		aGameUrlIndex.setAttribute("rel", "noopener noreferrer")
		imgGameSectionIndex.setAttribute("class","img-game-section data-img")
		h1DataTituloIndex.setAttribute("class","data-titulo")
		pDataGeneroIndex.setAttribute("class","data-genero")
		pDataDescripcionIndex.setAttribute("class", "data-descripcion")

		divGameIndex.appendChild(divGameCardIndex)
		divGameCardIndex.appendChild(aGameUrlIndex)
		aGameUrlIndex.appendChild(imgGameSectionIndex)
		divGameCardIndex.appendChild(h1DataTituloIndex)
		divGameCardIndex.appendChild(pDataGeneroIndex)
		divGameCardIndex.appendChild(pDataDescripcionIndex)

	}
}