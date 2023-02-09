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
 let descuento;
 let nuevoPrecio;
 let marcaDeLampara;
 let impuesto;
 let mensaje;

  cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
  marcaDeLampara = document.getElementById("Marca").value;

 cantidadDeLamparas = parseInt(cantidadDeLamparas);

if(cantidadDeLamparas >= 6)
{
     descuento = PRECIOXUNIDAD * (50/100);
     nuevoPrecio = PRECIOXUNIDAD - descuento;

     document.getElementById("txtIdprecioDescuento").value = nuevoPrecio;
}
else if(cantidadDeLamparas == 5)
   {
         if(marcaDeLampara == "ArgentinaLuz")
         {
              descuento = PRECIOXUNIDAD * (40/100);
              nuevoPrecio = PRECIOXUNIDAD - descuento;

              document.getElementById("txtIdprecioDescuento").value = nuevoPrecio;
         }
         else
         {
               descuento = PRECIOXUNIDAD * (30/100);  
               nuevoPrecio = PRECIOXUNIDAD - descuento;

               document.getElementById("txtIdprecioDescuento").value = nuevoPrecio;
         }
   }
      else if(cantidadDeLamparas == 4)
      {
            if(marcaDeLampara== "ArgentinaLuz" || "FelipeLamparas")
            {
                   descuento = PRECIOXUNIDAD * (25/100);  
                   nuevoPrecio = PRECIOXUNIDAD - descuento;
   
                   document.getElementById("txtIdprecioDescuento").value = nuevoPrecio;
            }
            else
            {
                  descuento = PRECIOXUNIDAD * (20/100);  
                  nuevoPrecio = PRECIOXUNIDAD - descuento;

                  document.getElementById("txtIdprecioDescuento").value = nuevoPrecio;
            }
      }
         else if(cantidadDeLamparas == 3)
         {
               if(marcaDeLampara == "ArgentinaLuz")
               {
                    descuento = PRECIOXUNIDAD * (15/100);  
                    nuevoPrecio = PRECIOXUNIDAD - descuento;

                    document.getElementById("txtIdprecioDescuento").value = nuevoPrecio;
               }

               else if(marcaDeLampara == "FelipeLampara")
                  {
                        descuento = PRECIOXUNIDAD * (10/100);  
                     nuevoPrecio = PRECIOXUNIDAD - descuento;
        
                     document.getElementById("txtIdprecioDescuento").value = nuevoPrecio;
                  }
                  else
                  {
                       descuento = PRECIOXUNIDAD * (5/100);  
                       nuevoPrecio = PRECIOXUNIDAD - descuento;
        
                       document.getElementById("txtIdprecioDescuento").value = nuevoPrecio;
                  }                     
         }
         else
         {
            nuevoPrecio = PRECIOXUNIDAD * cantidadDeLamparas;
            document.getElementById("txtIdprecioDescuento").value = nuevoPrecio;
         }

if(nuevoPrecio > 120)
{
     impuesto = nuevoPrecio * (10/100);
     nuevoPrecio = nuevoPrecio + impuesto;

     mensaje = "Usted pago $" + impuesto + " de IIBB";

     document.getElementById("txtIdprecioDescuento").value = mensaje;
}  

}

               
      
           
   




   