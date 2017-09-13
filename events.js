$(document).ready(function() {
	$(document).on('click', 'td', function() {
	});
	
	$('#addTask').click(function() {
		addNewTask('todo-list-table');
		var lastId = getCookie("lastID");
		if(lastId == null)
			lastId = -1;
		else
			lastId = parseInt(lastId);

		lastId++;
		setCookie("lastID", lastId, 10);
		console.log(getCookie("lastID"));

	});
});

var setCookies = function(taskName, beginDate, endDate, status, id) {
	setCookie("taskName" + id, taskName, 10);
	setCookie("beginDate" + id, beginDate, 10);
	setCookie("endDate" + id, endDate, 10);
	setCookie("status" + id, status, 10);
}

var addNewTask = function(tableId) {
	var id = getCookie("lastID");
	var taskID   = "taskID"   + id;
	var beginID  = "beginID"  + id;
	var endID    = "endID"    + id;
	var statusID = "statusID" + id;


	var html = '<tr id="'+id+'">';
	html    += '<td><input type="textbox"/>';
	html    += '</td><td><input type="date"/></td><td><input type="date"/></td>';
	html    += '<td><select><option value="">To do</option><option value="">Doing</option><option value="">Done</option></select>';
	html    +=		"</td> <td><input type='checkbox' name=''></td><td>"+getCookie("lastID")+"</td></tr>";
	$('#' + tableId).append(html);

}

function setCookie(name, value, days) {
	var endDate = "";
	var date = new Date();
	date.setTime(date.getTime() + (days*1000*60*60*24));
	endDate = "; expires=" + date.toGMTString();

	document.cookie = encodeURIComponent(name) + "=" + 
		encodeURIComponent(value) + endDate + "; path =/";
}

function getCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}