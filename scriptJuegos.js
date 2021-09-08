let divCard = document.querySelector(".galeria-game") 

CreacionDivs()

let dataTitulo = document.querySelectorAll(".data-titulo")
let dataImg = document.querySelectorAll(".data-img")
let dataDescripcion = document.querySelectorAll(".data-descripcion")
let dataUrl = document.querySelectorAll(".game-url")
let gameCards = document.querySelectorAll(".game-card")
let opcionesMenu = document.querySelectorAll(".menu ul li a")	
let array = []

/* Juegos x Para el comienzo*/

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
	while(array.length < 9){
		numRandom = Math.floor(Math.random() * ((response.length - 0) + 0)) 
		if(!(array.includes(numRandom))){
			array.push(numRandom)
		}
	}

	for(let i = 0; i < gameCards.length; i++) {
		dataTitulo[i].textContent = response[array[i]].title
		dataDescripcion[i].textContent = response[array[i]].short_description
		dataImg[i].setAttribute("src", response[array[i]].thumbnail)
		dataUrl[i].setAttribute("href", response[array[i]].game_url)
	}
});

/* Posicionar juegos segun que clicke la persona */

for(let i = 0; i < opcionesMenu.length; i++) {
	opcionesMenu[i].addEventListener("click", function(){
		let settings = {
			"async": true,
			"crossDomain": true,
			"url": "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&category=" + opcionesMenu[i].textContent + "&sort-by=popularity",
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
				"x-rapidapi-key": "9090cdf2ffmsh1fc4e5881b7989ap1a3715jsnddd7653576cb"
			}
		};
		
		$.ajax(settings).done(function (response) {
			for(let i = 0; i < gameCards.length; i++) {
				dataTitulo[i].textContent = response[i].title
				dataDescripcion[i].textContent = response[i].short_description
				dataImg[i].setAttribute("src", response[i].thumbnail)
				dataUrl[i].setAttribute("href", response[i].game_url)
				dataUrl[i].setAttribute("href", response[i].game_url)
			}
		});
	})
	
}

/* Funcion Div*/

function CreacionDivs(){
	for (let i = 0; i < 9; i++) {
		let divGameCard = document.createElement("div")
		let aUrl = document.createElement("a")
		let imgUrl = document.createElement("img")
		let h1Titulo = document.createElement("h1")
		let pDescripcion = document.createElement("p")
		
		divGameCard.setAttribute("class", "game-card")
		aUrl.setAttribute("class", "game-url")
		aUrl.setAttribute("target", "_blank")
		aUrl.setAttribute("rel", "noopener noreferrer")
		imgUrl.setAttribute("class", "img-game-section data-img")
		h1Titulo.setAttribute("class", "data-titulo")
		pDescripcion.setAttribute("class", "data-descripcion")

		divCard.appendChild(divGameCard)
		divGameCard.appendChild(aUrl)
		aUrl.appendChild(imgUrl)
		divGameCard.appendChild(h1Titulo)
		divGameCard.appendChild(pDescripcion)
	}
}




