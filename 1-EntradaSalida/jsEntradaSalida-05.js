/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
//Abril Cortés Div X
function mostrar()
{	
	//Declaro las variables
	let nombre;

	let edad;

	//Asigno valor a las variables
	nombre = document.getElementById("txtIdNombre").value;

	edad = document.getElementById("txtIdEdad").value;

	alert("Usted se llama " + nombre + " y tiene " + edad + " años.");
}

