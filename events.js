$(document).ready(function() {
	$(document).on('click', 'td', function() {
	});
	$('#addTask').click(function() {
		addNewTask('todo-list-table');

	});
});

var addNewTask = function(tableId) {
	var html = " <tr><td>task1</td><td>begin</td><td>end</td><td><select><option value=''>To do</option><option value=''>Doing</option><option value=''>Done</option></select>";
	html+=		"</td> <td><input type='checkbox' name=''></td></tr>";
	$('#' + tableId).append(html);

}