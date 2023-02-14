function mostrar()
{
	//Abril Cortes Div X
let mesSeleccionando;

mesSeleccionando = document.getElementById("txtIdMes").value;

switch(mesSeleccionando)
{
	case "Febrero":
		alert("Este mes tiene 28 dias");
	break;
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
		alert("Este mes tiene 30 dias");
	break;
	default:
		alert("Este mes termina en 31 dias");
	break;

}


}//FIN DE LA FUNCIÓN