/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
//Abril Cortés Div X 
function CalcularPrecio () 
{
let cantidadDeLamparas;
const PRECIOXUNIDAD = 35;
let porcentaje = 0;
let precio;
let nuevoPrecio;
let marca;
let precioFinal;
let iibb;
let porcentajeelIibb;

marca = document.getElementById("Marca").value;
cantidadDeLamparas = document.getElementById("txtIdCantidad").value
precio = cantidadDeLamparas * PRECIOXUNIDAD;


if ( cantidadDeLamparas >= 6)
{
porcentaje = -50;

}
else if(cantidadDeLamparas == 5)
{
    switch(marca)
    {
        case "ArgentinaLuz":
            porcentaje = -50;
        break;
        default:
            porcentaje = -30;
        break;

    }
    
}
else if(cantidadDeLamparas == 4)
{
    switch(marca)
    {
        case "ArgentinaLuz":
        case "FelipeLamparas":
            porcentaje = -25;
        break;
        default:
            porcentaje = -20;
        break;
    }
}
else if(cantidadDeLamparas == 3)
{
    switch(marca)
    {
        case "ArgentinaLuz":
            porcentaje = -15;
        break;
        case "FelipeLamparas":
            porcentaje = -10;
        break;
        default:
            porcentaje = -5;
        break;
        
    }
}
else if(cantidadDeLamparas < 3)
{
    porcentaje = 0;
}

precioFinal = precio * porcentaje /100 + precio;



if(precioFinal > 120)
  {
    porcentajeelIibb = precioFinal * 10/100;
    iibb = precioFinal + porcentajeelIibb;
    nuevoPrecio = precioFinal + iibb;
    alert("Usted pago $" +iibb + " de IIBB");
  }

  document.getElementById("txtIdprecioDescuento").value = precioFinal;

/*//A

if ( cantidadDeLamparas >= 6)
{
  descuento = precio * 50/100;
  nuevoPrecio = precio - descuento;

}
else if(cantidadDeLamparas == 5)
{
    if(marca == "ArgentinaLuz")
    {
        descuento = precio * 40/100;
        nuevoPrecio = precio - descuento;
    }
    else
    {
        descuento = precio * 30/100;
        nuevoPrecio = precio - descuento;

    }
}
else if(cantidadDeLamparas == 4)
{
    if(marca == ("ArgentinaLuz" || "FelipeLamparas"))
    {
        descuento = precio * 25/100;
        nuevoPrecio = precio - descuento;
    }
    else
    {
        descuento = precio * 20/100;
        nuevoPrecio = precio - descuento; 
    }
}
else if(cantidadDeLamparas == 3)
{
    if(marca == "ArgentinaLuz")
    {
        descuento = precio * 15/100;
        nuevoPrecio = precio - descuento;
    }
    else if(marca == "FelipeLamparas")
    {
        descuento = precio * 10/100;
        nuevoPrecio = precio - descuento;
    }
    else
    {
        descuento = precio * 5/100;
        nuevoPrecio = precio - descuento;
    }
}
else if(cantidadDeLamparas < 3)
{
    nuevoPrecio = precio;
}
 
  if(nuevoPrecio > 120)
  {
    porcentajeelIibb = nuevoPrecio * 10/100;
    iibb = nuevoPrecio + porcentajeelIibb;
    nuevoPrecio = nuevoPrecio + iibb;
    alert("Usted pago $" +iibb + " de IIBB");
  }
   document.getElementById("txtIdprecioDescuento").value = nuevoPrecio;*/ 
}              
 
      
           
   




   