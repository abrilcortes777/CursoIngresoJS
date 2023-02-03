/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
//Abril Cortés Div X
function Sumar () 
{
	let primerPrecio;
    let segundoPrecio;
    let tercerPrecio;
    let total;

    primerPrecio = document.getElementById("txtIdPrecioUno").value;
    segundoPrecio = document.getElementById("txtIdPrecioDos").value;
    tercerPrecio = document.getElementById("txtIdPrecioTres").value;

    primerPrecio = parseFloat(primerPrecio);
    segundoPrecio = parseFloat(segundoPrecio);
    tercerPrecio = parseFloat(tercerPrecio);

    total = primerPrecio + segundoPrecio + tercerPrecio

    alert("El total es: " + total);
}
function Promedio () 
{
	let primerPrecio;
    let segundoPrecio;
    let tercerPrecio;
    let total;

    primerPrecio = document.getElementById("txtIdPrecioUno").value;
    segundoPrecio = document.getElementById("txtIdPrecioDos").value;
    tercerPrecio = document.getElementById("txtIdPrecioTres").value;

    primerPrecio = parseFloat(primerPrecio);
    segundoPrecio = parseFloat(segundoPrecio);
    tercerPrecio = parseFloat(tercerPrecio);

    total = ( primerPrecio + segundoPrecio + tercerPrecio ) / 3 ;


    alert("El promedio es: " + total);
}
function PrecioFinal () 
{
	let primerPrecio;
    let segundoPrecio;
    let tercerPrecio;
    let total;

    primerPrecio = document.getElementById("txtIdPrecioUno").value;
    segundoPrecio = document.getElementById("txtIdPrecioDos").value;
    tercerPrecio = document.getElementById("txtIdPrecioTres").value;

    primerPrecio = parseFloat(primerPrecio);
    segundoPrecio = parseFloat(segundoPrecio);
    tercerPrecio = parseFloat(tercerPrecio);

    total = ( primerPrecio + segundoPrecio + tercerPrecio ) + ( 21 / 100 ) ;
    
    alert("El total más el IVA es: " + total);
}