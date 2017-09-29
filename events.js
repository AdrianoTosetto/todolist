var default_days = 10;
var lastId = getCookie("lastID"); //last id task added

var getIDFromString = function(stringID) {
	var match = stringID.match(/\d+$/);
	return match == null ? null : parseInt(match[0]);
}

var getAllTasks = function() {
	var currentID = getCookie("lastID");
	if(currentID == null) return;

	for(var i = 1; i < currentID; i++) {
		var taskID    = "taskID"    + i;
		var beginID   = "beginID"   + i;
		var endID     = "endID"     + i;
		var statusID  = "statusID"  + i;
		var updtBtnID = "updtBtnID" + i;

		console.log("id: " + getCookie(taskID) + " begin date: " + getCookie(beginID) + " end date: " + 
			getCookie(endID) + " status: " + getCookie(statusID));
	}
}
var loadTasks = function() {
	var id = getCookie("lastID");
	if(id == null) return;
	console.log(id);
	for(var i = 1; i < id; i++) {

		var taskID    = "taskID"    + i;
		var beginID   = "beginID"   + i;
		var endID     = "endID"     + i;
		var statusID  = "statusID"  + i;

		if(getCookie(taskID) == null) continue;

		var vtaskID    = getCookie(taskID);
		var vbeginID   = getCookie(beginID);
		var vendID     = getCookie(endID);
		var vstatusID  = getCookie(statusID);


		var data = [vtaskID, vbeginID, vendID, vstatusID, i];

		console.log(data);

		appendTask('todo-list-table', data);

	}
}
$(document).ready(function() {
	//$(document).on('click', 'td', function() {});
	if(lastId == null) lastId = 1;
	loadTasks();
	$(document).on('click', '.updateButton', function(){
		var id = getIDFromString( $(this).attr('id') );

		console.log("id atualizado: " + id);
		var taskID    = "taskID"    + id;
		var beginID   = "beginID"   + id;
		var endID     = "endID"     + id;
		var statusID  = "statusID"  + id;
		var updtBtnID = "updtBtnID" + id;


		console.log($('#' + taskID).val());
		console.log($('#' + beginID).val());
		console.log($('#' + endID).val());
		console.log($('#' + statusID).val());

		setCookie(taskID,$('#' + taskID).val(),10);
		setCookie(beginID,$('#' + beginID).val(),10);
		setCookie(endID,$('#' + endID).val(),10);
		setCookie(statusID,$('#' + statusID).val(),10);
	});
	
	$('#addTask').click(function() {
		addNewTask('todo-list-table');
		if(lastId == null)
			lastId = 1;
		else
			lastId = parseInt(lastId);

		lastId++;
		setCookie("lastID", lastId, 10);
		console.log(getCookie("lastID"));

	});
	$('#deleteButton').click(function(){
		$('.delete-task').each(function() {
			var dis = $(this);
			if(dis.is(':checked')) {
				var attr = dis.parent().parent().attr('id');
				console.log(attr);
			}
		});
	});
});

var getInputText = function(id) {
	return $('#' + id).val();
}

var updateTask = function(id) {
	var taskID    = "taskID"    + id;
	var beginID   = "beginID"   + id;
	var endID     = "endID"     + id;
	var statusID  = "statusID"  + id;
	var updtBtnID = "updtBtnID" + id;

	setCookie(taskID, $('#' + taskID).val(),10);
	setCookie(beginID, $('#' + beginID).val(),10);
	setCookie(endID, $('#' + endID).val(),10);
}

var setCookies = function(taskName, beginDate, endDate, status, id) {
	setCookie("taskName"  + id, taskName,  default_days);
	setCookie("beginDate" + id, beginDate, default_days);
	setCookie("endDate"   + id, endDate,   default_days);
	setCookie("status"    + id, status,    default_days);
}

var appendTask = function(tableID, data) {

	var id = data[4];
	var taskID    = "taskID"    + id;
	var beginID   = "beginID"   + id;
	var endID     = "endID"     + id;
	var statusID  = "statusID"  + id;
	var updtBtnID = "updtBtnID" + id;


	var html = '<tr id="'+id+'">';
	html    += '<td><input type="textbox" id = "' +taskID+ '" value = "' + data[0] + '"/>';
	html    += '</td><td><input type="date" id = "'+beginID+'" value = "'+data[1]+'"/>';
	html    += '</td><td><input type="date" id="'+endID+'" value = "' +data[2]+ '"/></td>';
	html    += '<td><select id = "'+statusID+'" value = "'+data[3]+'""><option value="todo">To do</option><option value="doing">Doing</option><option value="done">Done</option></select>';
	html    += '<td><input type="checkbox" name="" class = "delete-task"></td>';
	html    += '<td>-1</td>';
	html    += '<td><input type="button" value="atualizar" class="updateButton" id="'+data[4]+'"/></td>';
	
	$('#' + tableID).append(html);
	$('#' + statusID).val(data[3]);

}

var addNewTask = function(tableId) {
	var id = getCookie("lastID") == null ? 1 : getCookie("lastID"); 
	var taskID    = "taskID"    + id;
	var beginID   = "beginID"   + id;
	var endID     = "endID"     + id;
	var statusID  = "statusID"  + id;
	var updtBtnID = "updtBtnID" + id;


	var html = '<tr id="'+id+'">';
	html    += '<td><input type="textbox" id = "' +taskID+ '"/>';
	html    += '</td><td><input type="date" id = "'+beginID+'"/>';
	html    += '</td><td><input type="date" id="'+endID+'"/></td>';
	html    += '<td><select id = "'+statusID+'""><option value="todo">To do</option><option value="doing">Doing</option><option value="done">Done</option></select>';
	html    += '<td><input type="checkbox" name=""></td>';
	html    += '<td>-1</td>';
	html    += '<td><input type="button" value="atualizar" class="updateButton" id="'+updtBtnID+'"/></td>';
	
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

var unsetCookie(name)  = function() {
	setCookie(name, value, -1);
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
