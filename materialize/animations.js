var isDragging = false;

var x = 0, y = 0;

$(document).ready(function() {
	$('.modal').modal();
	$("#1").mousedown(function() {
		$(document).mousemove(function(evt) {
			console.log('dragging!');
			x = evt.pageX;
			y = evt.pageY;


			$('#1').css({'margin-left': x + 'px'});
			$('#1').css({'margin-top': y + 'px'});
		});

		$(document).mouseup(function() {
			console.log(x + " - " + y);
			$(document).unbind('mousemove');

			$('#1').css({'margin-left': x + 'px'});
			$('#1').css({'margin-top': y + 'px'});
		});
	});
});