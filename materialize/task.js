var default_days = 10;
var lastId = getCookie("nextId"); //last id task added
var columns = Array();


$(document).ready(function() {

	$("#addTaskLink").click(function() {
		var taskDesc = $("#taskDesc").val();
		var status   = $("#selectTaskStatus").val();
		addTask(taskDesc, status, readId());

		setCookie("nextId", parseInt(readId()) + 1);
		loadTasks();
	});
	loadTasks();
});

var addTask = function(taskDesc, status, id) {
	setCookies(taskDesc, status, id);
}

var resetCookie = function(taskDesc, status,id) {

}

var clearHTML = function() {
	$('.content').empty();
}

var loadTasks = function() {
	clearHTML();
	var _id = readId();
	console.log(_id);
	for(var cid = 1; cid < _id; cid++) {

		var taskDesc = getCookie("taskDesc"   + cid);
		var status   = getCookie("taskStatus" + cid);
		//console.log(taskDesc + " " + status);
		if(taskDesc == null || status == null) continue;
		
		var html = $('<div class="task-container"><p class = "paragraph-task" id="'+
			cid+'"  draggable=true ondragstart="onDrag(event,' + cid +')" ondragover="onDragOver(event,'+cid+');" ondragend = onDragEnd();>' 
			+taskDesc+" " + cid +'</p></div>'); 
		if(status == "todo")
			$("#todoContent").append(html);
		if(status == "doing")
			$("#doingContent").append(html);
		if(status == "done")
			$("#doneContent").append(html);
		if(status == "test")
			$("#testContent").append(html);
	}
}


//mudar 
var readId = function() {

	if((id = getCookie("nextId")) != null)
		 return id;
	else
		return 1;
}

var getIDFromString = function(stringID) {
	var match = stringID.match(/\d+$/);
	return match == null ? null : parseInt(match[0]);
}


var setCookies = function(taskDesc, status, id) {
	setCookie("taskDesc"  + id, taskDesc,  default_days);
	setCookie("taskStatus"    + id, status,    default_days);
}


var setCookie = function(name, value, days) {
	var endDate = "";
	var date = new Date();
	date.setTime(date.getTime() + (days*1000*60*60*24));
	endDate = "; expires=" + date.toGMTString();

	document.cookie = encodeURIComponent(name) + "=" + 
		encodeURIComponent(value) + endDate + "; path =/";
}

var unsetCookie = function(name) {
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
