var isDragging = false;

var x = 0, y = 0;

var fodase = false;

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
	$('.modal').modal();
});