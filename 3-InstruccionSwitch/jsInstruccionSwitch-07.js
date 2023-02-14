function mostrar()
{
//Abril Cortes Div x

let destino;

destino = document.getElementById("txtIdDestino").value;

switch(destino)
{
	case "Bariloche":
		alert("El destino se encuentra al Oeste de Argentina");
	break;
	case "Cataratas":
		alert("El destino se encuentra al Norte de Argentina");
	break;
	case "Mar del plata":
		alert("El destino se encuentra al Este de Argentina");
	break;
	case "Ushuaia":
		alert("El destino se encuentra al Sur de Argentina");
	break;
}
}//FIN DE LA FUNCIÓN