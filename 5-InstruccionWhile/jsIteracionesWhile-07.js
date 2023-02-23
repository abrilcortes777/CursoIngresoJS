/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
//Abril Cortés Div X
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	respuesta = "si"
	contador=0;
	acumulador=0;
	
	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
        respuesta = prompt("Quiere ingresar un numero nuevamente?");
		acumulador = acumulador + numeroIngresado;
		contador++;
		
	}
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;

}//FIN DE LA FUNCIÓN