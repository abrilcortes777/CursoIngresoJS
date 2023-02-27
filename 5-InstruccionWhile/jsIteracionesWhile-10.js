/*
Abril Cortes Div X
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
    let acumuladorDeNegativos = 0;
	let contadorDeNegativos = 0;
	let contadorDeCeros = 0;
	let contadorDePositivos = 0;
	let acumuladorDePositivos = 0;
	let contadorPar = 0;
	let promedioPositivos = 0;
	let promedioNegativos = 0;
	let diferencia;

	respuesta="si";

while(respuesta == "si")
{
   numeroIngresado = prompt("Ingrese un numero"); 
   numeroIngresado = parseInt(numeroIngresado);

   if(numeroIngresado < 0)
   {
      acumuladorDeNegativos = acumuladorDeNegativos + numeroIngresado;
	  contadorDeNegativos++;
   }
   else if (numeroIngresado == 0)
   {
	    contadorDeCeros++;
   } 
   else
   {
       acumuladorDePositivos = acumuladorDePositivos + numeroIngresado;
	   contadorDePositivos++;
   }
    if(numeroIngresado % 2 == 0)
	{
      contadorPar++;
	}
	respuesta = prompt("¿Quiere ingresar otro numero?");
}	

if( contadorDePositivos != 0)
{
	promedioPositivos = acumuladorDePositivos / contadorDePositivos;
	
}
if(contadorDeNegativos != 0)
{
	promedioNegativos = acumuladorDeNegativos / contadorDeNegativos;
}


diferencia = contadorDePositivos - contadorDeNegativos;

document.write("1-Suma de los negativos: " + acumuladorDeNegativos + ".<br>");
document.write("\n 2-Suma de los positivos: " + acumuladorDePositivos + ".<br>");
document.write("\n 3-Cantidad de positivos: " + contadorDePositivos + ".<br>");
document.write("\n 4-Cantidad de negativos: " + contadorDeNegativos + ".<br>");
document.write("\n 5-Cantidad de ceros: " + contadorDeCeros + ".<br>");
document.write("\n 6-Cantidad de números pares: " + contadorPar + ".<br>");
document.write("\n 7-Promedio de positivos: " + promedioPositivos +".<br>");
document.write("\n 8-Promedios de negativos: " + promedioNegativos + ".<br>");
document.write("\n 9-Diferencia entre positivos y negativos: " + diferencia + ".<br>");

}//FIN DE LA FUNCIÓN