/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado = parseInt(numeroIngresado);

	    do{
			 numeroIngresado = prompt("Error.Ingrese un número entre 0 y 10.");
		}
		while (numeroIngresado < 0 || numeroIngresado > 9 )
	  document.getElementById("txtIdNumero") = numeroIngresado;

}//FIN DE LA FUNCIÓN