function mostrar()
{
	//tomo el mes
	let mesDelAnio = document.getElementById("txtIdMes").value;

	switch(mesDelAnio)
	{
		case "Enero":
			alert("Que comiences bien el año");
		break;
		case "Marzo":
			alert("A clases");
		break;
		case "Julio":
			alert("Se vienen las vacaiones");
		break;
		case "Diciembre":
			alert("Felices fiestas");
		break;	
	}


}//FIN DE LA FUNCIÓN