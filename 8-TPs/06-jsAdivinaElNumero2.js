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
let contadorIntentos = 0;

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
	alert("Error");
	alert(numeroSecreto);
	
	 diferencia = numeroIngresado - numeroSecreto;
	 veces++;
   }
   else if(numeroIngresado < numeroSecreto)
   {
	 alert("Error");
	 alert(numeroSecreto);
	 
	  diferencia = numeroSecreto - numeroIngresado;
	  veces++;
	  
  }
  else if(numeroIngresado == numeroSecreto)
  {
	alert(numeroSecreto);
  }
 switch(veces)
 {
	case 1:
		mensaje = "Lo hizo luego de "+ veces + " intento,usted es un Psíquico";
	break;
	case 2:
		mensaje = "Lo hizo luego de " + veces + " intentos,excelente percepción";
	break;
	case 3:
		mensaje = "Lo hizo luego de " + veces + " intentos.Esto es suerte";
	break;
	case 4:
		mensaje = "Lo hizo luego de " + veces + "intentos.Excelente técnica";
	break;
	case 5: 
		mensaje = "Lo hizo liego de " + veces + "intentos,usted está en la media";
	break;

 }
 if(veces >= 6 || veces <= 10 )
 {
	mensaje = "Lo hizo luego de " + veces + " intentos,falta técnica";
 }
 else
 {
	mensaje = "Lo hizo luego de " + veces + " intentos,usted es afortunado en el amor";
 }
 document.getElementById("txtIdIntentos").value = mensaje;
}
