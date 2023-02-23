/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

let numeroSecreto;
let veces = 0;

function comenzar()
{
  numeroSecreto = Math.floor(Math.random() *(1 + 100 - 1) + 1);

}

function verificar()
{ 
  let numeroIngresado;
  let diferencia;
  let mensaje; 

  
  numeroIngresado	= document.getElementById("txtIdNumero").value;
  numeroIngresado = parseInt(numeroIngresado);

	if(numeroIngresado > numeroSecreto)
 {
   diferencia = numeroIngresado - numeroSecreto;
   mensaje = "Se paso " + diferencia + " del numero secreto.";
   contadorDeVeces++;
 }
 else if(numeroIngresado < numeroSecreto)
 {
    diferencia = numeroSecreto - numeroIngresado;
    mensaje = "Faltan " + diferencia + " para llegar al numero secreto.";
    contadorDeVeces++;
    
}
else if(numeroIngresado == numeroSecreto)
{
  mensaje = "Usted es un ganador!!! y en solo " + contadorDeVeces + " intentos";
}
 document.getElementById("txtIdIntentos").value = mensaje; 
}