function mostrar()
{
	//Abril Cortés Div X
	//Genero el número RANDOM entre 1 y 10 
	let nota;
	 
	nota = Math.floor(Math.random() *(1 + 10 - 1) + 1)
		
	if (nota >= 9) {
		alert("Su nota es " + nota + "\n EXCELENTE");
	}
	else{
		if(nota > 4){
			alert("Su nota es " + nota + "\n APROBÓ");
		}
		else{
			alert("Su nota es " + nota + "\n Vamos, la proxima se puede");
		}
	}


}//FIN DE LA FUNCIÓN