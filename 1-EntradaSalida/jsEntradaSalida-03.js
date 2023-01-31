/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

//Abril Cortés

function mostrar()
{
	let nombreIngresado; //variable local

	//nombreIngresado = txtIdNombre.value; (no es standar)

	nombreIngresado = document.getElementById("txtIdNombre").value; //tomar el dato por Id

	alert(nombreIngresado);

}


