/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor"*/
//Abril Cortes Div X

let numeroSecreto; 
let contadorDeVeces = 0;

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
	alert(numeroSecreto);
	 diferencia = numeroIngresado - numeroSecreto;
	 mensaje = "Se paso " + diferencia + " del numero secreto.";
	 contadorDeVeces++;
   }
   else if(numeroIngresado < numeroSecreto)
   {
	alert(numeroSecreto);
	diferencia = numeroSecreto - numeroIngresado;
	mensaje = "Faltan " + diferencia + " para llegar al numero secreto.";
    contadorDeVeces++; 
  }
  if(numeroIngresado == numeroSecreto)
  {
	 switch(contadorDeVeces)
     {
	case 1:
		mensaje = "Lo hizo luego de "+ contadorDeVeces + " intento,usted es un Psíquico";
	break;
	case 2:
		mensaje = "Lo hizo luego de " + contadorDeVeces + " intentos,excelente percepción";
	break;
	case 3:
		mensaje = "Lo hizo luego de " + contadorDeVeces + " intentos.Esto es suerte";
	break;
	case 4:
		mensaje = "Lo hizo luego de " + contadorDeVeces + "intentos.Excelente técnica";
	break;
	case 5: 
		mensaje = "Lo hizo luego de " + contadorDeVeces + "intentos,usted está en la media";
	break;

     }
  }

 if(contadorDeVeces >= 6 && contadorDeVeces <= 10 )
 {
	mensaje = "Lo hizo luego de " + contadorDeVeces + " intentos,falta técnica";
 }
 else if(contadorDeVeces > 10)
 {
	mensaje = "Lo hizo luego de " + contadorDeVeces + " intentos,usted es afortunado en el amor";
 }
 document.getElementById("txtIdIntentos").value = mensaje;
}
