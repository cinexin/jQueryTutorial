/* Ejercicios del 10 al 14 */
$(document).ready(function() {
	$('#boton').click(function() {
		var Agregar = $('input[name=itemDeLista]').val();
		var $item = $('<div class="item">'+Agregar+'</div>');
		$('div.lista').append($item);
	});
	
	/* OJO: No podemos acceder directamente con "$('.item')" porque el objeto aún no estará en el DOM al cargar el HTML */
	$(document).on('click','.item', function() {
	    $(this).remove();
	});
});


