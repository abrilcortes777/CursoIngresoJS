function mostrar()
{
    //Abril Cortes Div X
let estacionDelAnio;
let destino;
let precio;
let porcentaje;

precio = 15000;
porcentaje = 0;
estacionDelAnio = document.getElementById("txtIdEstacion").value;
destino = document.getElementById("txtIdDestino").value;

switch(estacionDelAnio)
    {
        case "Invierno":

          switch(destino)
          {
            case "Bariloche":
            porcentaje = 20;

            break;
            case "Cataratas":
            case "Cordoba":
                porcentaje = -10;
            break;
            case "Mar del plata":
                porcentaje = -20;
            break;
          }
        break;
        case "Verano":
            switch(destino)
            {
                case "Bariloche":
                   porcentaje = -20;
                break;
                case "Cataratas":
                case "Cordoba":
                        porcentaje = 10;
                break;
                case "Mar del plata":
                    porcentaje = 20;
                break;
            }
        break;
        case "Otoño":
        case "Primavera":
            switch(destino)
            {
                case "Bariloche":
                case "Cataratas":
                case "Mar del plata":
                    porcentaje = 10;
                break;
                default:
                    porcentaje = 0;
                break;
            
            }
        break;
    } //Fin de switch
 
 precioFinal = precio * porcentaje /100 + precio;

 alert(precioFinal);
}//FIN DE LA FUNCIÓN