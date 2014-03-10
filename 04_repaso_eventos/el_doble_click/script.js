
$(document).ready(function() {
	/* EJERCICIO 5 */
	$('div').dblclick(function() {
		$(this).fadeOut('fast');
	});
	/* EJERCICIO 6 */
	$('div').mouseenter(function() {
		$(this).fadeTo('fast',1);
	});
	$('div').mouseleave(function() {
		$(this).fadeTo('fast',0.25);
	});	
});



