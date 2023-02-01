/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
//Abril Cortés Div X
function sumar()
{
	let primerNumero;
	let segundoNumero;
	let resultado;

	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	resultado = primerNumero + segundoNumero;

	alert("La suma es: " + resultado);
}

