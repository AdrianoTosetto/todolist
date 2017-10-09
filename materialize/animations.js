var isDragging = false;

var x = 0, y = 0;

var fodase = true;

var drag = function(selector, target) {
	var position = $(target).offset();
	var xt = position.left - $(window).scrollLeft();
	var yt = position.top - $(window).scrollTop();
	console.log(xt + " " + yt);
	$(selector).css({'position':'absolute'});
	$(selector).mousedown(function() {
		$(document).mousemove(function(evt) {
			console.log('dragging!');
			x = evt.pageX;
			y = evt.pageY;


			$(selector).css({'left': x + 'px'});
			$(selector).css({'top': y + 'px'});
		});

		$(document).mouseup(function() {
			console.log(x + " - " + y);
			$(document).unbind('mousemove');

			//$(selector).css({'left': x + 'px'});
			//$(selector).css({'top': y + 'px'});
		});
	});
}

$(document).ready(function() {
	drag(".paragraph-task", "#todoTab");
	if(fodase) {
		$('.modal').modal();
		$("#1").mousedown(function() {
			$(document).mousemove(function(evt) {
				console.log('dragging!');
				x = evt.pageX;
				y = evt.pageY;


				//$('#1').css({'margin-left': x + 'px'});
				//$('#1').css({'margin-top': y + 'px'});
			});

			$(document).mouseup(function() {
				console.log(x + " - " + y);
				$(document).unbind('mousemove');

				//$('#1').css({'margin-left': x + 'px'});
				//$('#1').css({'margin-top': y + 'px'});
			});
		});
	}
});