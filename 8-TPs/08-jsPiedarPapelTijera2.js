var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

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
    }

}//FIN DE LA FUNCIÓN
function papel()
{

}//FIN DE LA FUNCIÓN
function tijera()
{
	
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{

}