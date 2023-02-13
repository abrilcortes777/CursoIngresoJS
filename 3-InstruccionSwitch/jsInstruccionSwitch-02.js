function mostrar()
{
	//Abril Cortes Div X
let mesDelAnio;

mesDelAnio = document.getElementById("txtIdMes").value;

switch(mesDelAnio)
{
case "Septiembre":
case "Octubre":
case "Noviembre":
case "Diciembre":
	alert("Ya pasamos el frio,ahora hace calor");
break;
case "Julio":
case "Agosto":
break;
default:
	alert("Abrigate que hace frio");
break;
}


}//FIN DE LA FUNCIÓN