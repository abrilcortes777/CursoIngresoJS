/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
let respuesta;
let operador;
let multiplicacion;
let resta;
let división;
let suma;
let primerNumero;
let segundoNumero;
let resultado;

    
function comenzar()
{   
    primerNumero = Math.floor(Math.random() *(1 + 10 - 1) + 1);
    segundoNumero = Math.floor(Math.random() *(1 + 10 - 1) + 1);
    operador = Math.floor(Math.random() *(1 + 4 - 1) + 1);

    document.getElementById("txtIdPrimerNumero").value = primerNumero;
    document.getElementById("txtIdSegundoNumero").value = segundoNumero
  switch(operador)
    {
     case 1:
         operador = "+ (suma)";
     break;
     case 2:
      operador = "- (resta)";
     break;
     case 3:
         operador = "* (multiplicación)";
     break;
     case 4:
         operador = "/ (división)";
     break;
    }
    
    if(operador == "+ (suma)")
    {
       resultado = primerNumero + segundoNumero;
    }
    else if(operador == "- (resta)")
    {
       resultado = primerNumero - segundoNumero;
    }
    else if(operador == "* (multiplicación)")
    {
       resultado = primerNumero * segundoNumero;
    }
    else if(operador == "/ (división)")
    {
       resultado = primerNumero / segundoNumero;
    }
    document.getElementById("txtIdOperador").value = operador;

}//FIN DE LA FUNCIÓN
function Responder()
{   let nuevoIntento = "si";
     respuesta = document.getElementById("txtIdRespuesta").value;
    do{
    switch(operador)
    {
     case 1:
         operador = "+ (suma)";
     break;
     case 2:
      operador = "- (resta)";
     break;
     case 3:
         operador = "* (multiplicación)";
     break;
     case 4:
         operador = "/ (división)";
     break;
    }
    
    if(operador == "+ (suma)")
    {
        resultado = primerNumero + segundoNumero;
    }
    else if(operador == "- (resta)")
    {
       resultado = primerNumero - segundoNumero;
    }
    else if(operador == "* (multiplicación)")
    {
       resultado = primerNumero * segundoNumero;
    }
    else if(operador == "/ (división)")
    {
       resultado = primerNumero / segundoNumero;
    }

    if(respuesta == resultado)
    {
        alert("Correcto,acerto al resultado");
    }
    else
    {
       alert("Intentelo nuevamete");
       
    } 

}while(respuesta != respuesta){}

}//FIN DE LA FUNCIÓN
