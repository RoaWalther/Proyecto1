"use strict"

document.querySelector(".t12").addEventListener("click",()=>{
	let dato = document.getElementById("num").value;
	let tamano = document.getElementById("tamano").value;
	(dato ==1)?document.querySelector(".container0").style.fontSize= `${tamano}px`
			  :(dato ==2)?document.querySelector(".container1").style.fontSize= `${tamano}px`
			  :(dato ==3)?document.querySelector(".container2").style.fontSize= `${tamano}px`
			  :alert("Ingresa texto 1, texto 2 o texto 3");
});

document.querySelector(".t14").addEventListener("click",()=>{
	let dato = document.getElementById("num").value;
	let color = document.getElementById("color").value;	
	(dato ==1)?document.querySelector(".container0").style.color= `${color}`
			 :(dato ==2)?document.querySelector(".container1").style.color= `${color}`
			 :(dato ==3)?document.querySelector(".container2").style.color= `${color}`
			 :alert("Ingresa texto 1, texto 2 o texto 3");
});

document.querySelector(".t16").addEventListener("click",()=>{
	let dato = document.getElementById("num").value;
	let fondo = document.getElementById("fondo").value;	
	(dato==1)?document.querySelector(".container0").style.background= `${fondo}`
			 :(dato==2)?document.querySelector(".container1").style.background= `${fondo}`
			 :(dato==3)?document.querySelector(".container2").style.background= `${fondo}`
			 :alert("Ingresa texto 1, texto 2 o texto 3");
});







