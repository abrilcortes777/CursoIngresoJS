//Abril Cortés Div X
function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if (edad >= 18){
	   alert("Es adolescente");
	}
    else{

		if(edad >= 13){
			alert("Es adolescente");
		}
		else{
			alert("Es niño");
		}
	}

}//FIN DE LA FUNCIÓN