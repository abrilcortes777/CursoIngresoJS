function mostrar()
{
	//Abril Cortes Div X
	var contador;
	var acumulador;
	var numeroIngresado;

	contador = 0;
	acumulador = 0;

	while(contador < 5)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador++;
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / 5;
}//FIN DE LA FUNCIÓN