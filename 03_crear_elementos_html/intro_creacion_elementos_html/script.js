
$(document).ready(function() {
	$h1 = $("<h1>Hola</h1>");
	$p = $("<p>Soy un párrafo generado dinámicamente</p>");
	$('body').append($h1);
	$('body').append($p);
	
   $p = '<p>Soy el jueves</p>' ;
   $('#uno').after($p);
	   $('p').remove();
});
