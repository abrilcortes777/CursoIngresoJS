/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
//Abril Cortes DIV x
let eleccionMaquina;

function comenzar()
{
eleccionMaquina = Math.floor(Math.random() *(1 + 3 - 1) + 1);
alert(eleccionMaquina);
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
    }
    else if(eleccionMaquina == "Papel")
    {
        alert("Usted perdio,la maquina selecciono papel");
    }
    else if(eleccionMaquina == "Tijera")
    {
        alert("Usted gano,la maquina selecciono tijera");
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
    }
    else if(eleccionMaquina == "Tijera")
    {
        alert("Usted perdio,la maquina elegio tijera");
    }
    else if(eleccionMaquina == "Piedra")
    {
        alert("Usted gano,la maquina elegio piedra");
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
}	
else if(eleccionMaquina == "Piedra")
{
    alert("Usted perdio,la maquina eligio piedra");
}
else if(eleccionMaquina == "Tijera")
{
    alert("Empate,la maquina eligio tijera");
}
}//FIN DE LA FUNCIÓN