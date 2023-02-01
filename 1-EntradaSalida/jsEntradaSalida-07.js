/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//Declarar las variables
	let primerNumero;
	let segundoNumero;
	let resultado;

	//Definir variables
	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);
    
	resultado = primerNumero + segundoNumero;

	alert("La suma es: " + resultado);
}

function restar()
{
	//Declarar las variables
	let primerNumero;
	let segundoNumero;
	let resultado;

	//Definir variables
	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);
    
	resultado = primerNumero - segundoNumero;

	alert("La resta es: " + resultado);
}

function multiplicar()
{ 
	//Declarar las variables
	let primerNumero;
	let segundoNumero;
	let resultado;

	//Definir variables
	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);
    
	resultado = primerNumero * segundoNumero;

	alert("El producto es: " + resultado);
}

function dividir()
{
	//Declarar las variables
	let primerNumero;
	let segundoNumero;
	let resultado;

	//Definir variables
	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);
    
	resultado = primerNumero / segundoNumero;

	alert("El cociente es: " + resultado);

}

