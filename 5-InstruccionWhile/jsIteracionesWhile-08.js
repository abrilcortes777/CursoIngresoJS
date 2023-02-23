/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
//Abril Cortes Div X
function mostrar()
{
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="si";

while(respuesta == "si")
{
   numeroIngresado = prompt("Ingrese un numero"); 
   numeroIngresado = parseInt(numeroIngresado);

   if(numeroIngresado < 0)
   {
	respuesta = prompt("¿Quiere ingresar un numero nuevamente?");
	multiplicacionNegativos = numeroIngresado * multiplicacionNegativos;

	document.getElementById("txtIdProducto").value = multiplicacionNegativos;
   }
   else
   {
	respuesta = prompt("¿Quiere ingresar un numero nuevamente?");
	sumaPositivos = numeroIngresado + sumaPositivos;

	document.getElementById("txtIdSuma").value = sumaPositivos;
   }
}

}//FIN DE LA FUNCIÓN