function mostrar()
{
	//Abril Cortes Div X
	let destino;

	destino = document.getElementById("txtIdDestino").value;
	switch(destino)
	{
	case "Cataratas":
	case "Mar del plata":
		alert("Hace calor");
	break;
	case "Ushuaia":
	case "Bariloche":
		alert("Hace frio");
	break;
    }
}//FIN DE LA FUNCIÓN