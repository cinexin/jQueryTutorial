<!-- ejercicio 3 -->
$(document).ready(function() {
	
	<!-- ejercicios 4,5-->
	var $div = $('div');
	$div.hide('fast'); <!-- esta linea es para poder ver el resultado en el navegador --> 
	$div.fadeIn('slow');
	
	var $objetivo = $('li:nth-child(4)');
	$objetivo.fadeOut('slow');
	

});