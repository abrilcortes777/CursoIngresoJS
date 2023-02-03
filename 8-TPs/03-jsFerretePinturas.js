/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
//Abril Cortés Div X
function FahrenheitCentigrados () 
{
	let temperaturaFahrenheit;
    let temperaturaCentígrados;

    temperaturaFahrenheit = document.getElementById("txtIdTemperatura").value;

    temperaturaFahrenheit = parseInt(temperaturaFahrenheit);

    temperaturaCentígrados = (temperaturaFahrenheit - 32) / 1.8;

    alert(temperaturaFahrenheit + " Fahrenheit son " + temperaturaCentígrados.toFixed(2) + " centígrados");
    
}

function CentigradosFahrenheit () 
{
	let temperaturaFahrenheit;
    let temperaturaCentígrados;

    temperaturaCentígrados = document.getElementById("txtIdTemperatura").value;

    temperaturaCentígrados = parseInt(temperaturaCentígrados);

    temperaturaFahrenheit = temperaturaCentígrados * 1.8 + 32;

    alert(temperaturaCentígrados+ " centígrados son " + temperaturaFahrenheit.toFixed(2) + " Fahrenheit");
    
}
