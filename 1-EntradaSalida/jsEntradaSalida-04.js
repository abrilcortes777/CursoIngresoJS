/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
//Abril Cortés
function mostrar()
{
	let nombreIngresado;

	nombreIngresado = prompt("ingrese su nombre");

	document.getElementById("txtIdNombre").value = nombreIngresado;

	alert(nombreIngresado);
}

