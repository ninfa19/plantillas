//funciones para el titulo, parallax y blur(desvanecer)

$(document).ready(function(){
//funcion para bajar la letra que dice titulo
	var height =$(window).height();   //calcula el alto de la pagina
	
	ajustesIniciales();
	
	function ajustesIniciales(){
		$("section#body").css({"margin-top": height - 80 + "px"});
		
	}
	
//Funcion scroll para el parallax y blur
	$(document).scroll(function(){
		var scrollTop = $(this).scrollTop(); //calcula los piexeles que seda para arriba
		var pixels =scrollTop / 70;
		
		//esta condicion sirve para cuando la pagina no se ha movido, pero si mueven el scroll y llega en la parte superior
		//el efecto para de aplicarse, a no ser de que se regrese
		
		/*if(scrollTop < height){
			$("section#contenedor_general").css({
				"-webkit-filter": "blur(" + pixels + "px)",
				"background-position": "center -" + pixels * 10 + "px"
			});

		}*/

	});
	
});