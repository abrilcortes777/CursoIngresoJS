//Abril Cortes Div X 
let eleccionMaquina;
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;

function comenzar()
{
eleccionMaquina = Math.floor(Math.random() *(1 + 3 - 1) + 1);	

}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(eleccionMaquina)
    {
    case 1:
        eleccionMaquina = "Piedra";
    break;
    case 2:
        eleccionMaquina = "Papel";
    break;
    case 3:
        eleccionMaquina = "Tijera";
    break;
    }

	if(eleccionMaquina == "Piedra")
    {
        alert("Empate,la maquina selecciono piedra");
		ContadorDeEmpates++;
    }
    else if(eleccionMaquina == "Papel")
    {
        alert("Usted perdio,la maquina selecciono papel");
		ContadorDePerdidas++;
    }
    else if(eleccionMaquina == "Tijera")
    {
        alert("Usted gano,la maquina selecciono tijera");
		ContadorDeGanadas++;
    }

}//FIN DE LA FUNCIÓN
function papel()
{
	switch(eleccionMaquina)
    {
    case 1:
        eleccionMaquina = "Piedra";
    break;
    case 2:
        eleccionMaquina = "Papel";
    break;
    case 3:
        eleccionMaquina = "Tijera";
    break;
    }

    if(eleccionMaquina == "Papel")
    {
        alert("Empate,la maquina selecciono papel"); 
		ContadorDeEmpates++;
    }
    else if(eleccionMaquina == "Tijera")
    {
        alert("Usted perdio,la maquina elegio tijera");
		ContadorDePerdidas++;
    }
    else if(eleccionMaquina == "Piedra")
    {
        alert("Usted gano,la maquina elegio piedra");
		ContadorDeGanadas++;
    }
}//FIN DE LA FUNCIÓN
function tijera()
{
	switch(eleccionMaquina)
    {
    case 1:
        eleccionMaquina = "Piedra";
    break;
    case 2:
        eleccionMaquina = "Papel";
    break;
    case 3:
        eleccionMaquina = "Tijera";
    break;
    }

    if(eleccionMaquina == "Papel")
    {
    alert("Usted gano,la maquina elegio papel");
	ContadorDeGanadas++;
    }	
    else if(eleccionMaquina == "Piedra")
    {
    alert("Usted perdio,la maquina eligio piedra");
	ContadorDePerdidas++;
    }
    else if(eleccionMaquina == "Tijera")
    {
    alert("Empate,la maquina eligio tijera");
	ContadorDeEmpates++;
    }
	
document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
}
//FIN DE LA FUNCIÓN

function mostrarResultado()
{}