/* EJERCICIOS 9,10,11 */
$(document).ready(function() {
	$(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
        	/* tecla a - mover izda */
			case 65:
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			/* tecla s - mover abajo */
			case 83:
				$('img').animate({top: "+=10px"}, 'fast');				
				break;
			/* tecla w - mover arriba  */				
			case 87:
				$('img').animate({top: "-=10px"}, 'fast');								
				break;
				
			/* tecla d - mover derecha */
			case 68:
				$('img').animate({left: "+=10px"}, 'fast');								
				break;
			default:
				break;
		}		
	});
});



