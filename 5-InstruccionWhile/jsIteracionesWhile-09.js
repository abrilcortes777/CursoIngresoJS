/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
//Abril Cortes Div x;
function mostrar()
{
   let maximo;
   let minimo;
   let numeroIngresado;
   let contador;
   let respuesta;

   respuesta = "si";
   contador = 0;

  while(respuesta == "si")
  {
		 numeroIngresado = prompt("Ingrese un numero");
         numeroIngresado = parseInt(numeroIngresado);

	if(contador == 0)
	{
		maximo = numeroIngresado;
		minimo =numeroIngresado;

		contador = 1;
	}
    else if(numeroIngresado > maximo)
     {
	    maximo = numeroIngresado;
     }
     else if(numeroIngresado < minimo)
     {
	    minimo = numeroIngresado;
     }
    respuesta = prompt("¿Quiere ingresar otro numero?");
  }  

   document.getElementById("txtIdMaximo").value = maximo;
   document.getElementById("txtIdMinimo").value = minimo;




}//FIN DE LA FUNCIÓN