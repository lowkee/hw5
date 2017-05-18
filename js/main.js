var people []

$(document).ready(function(){
  $("#newPerson").click(function(){
  $("td").append("<li>Add New Person</li>");
  });
});

function myFunction() {
   var x = document.getElementById("fname").form.id;
              document.getElementById("lname")
          document.getElementById("age").innerHTML = x;
}

function form() {
	var fname = $('#fname').val();
	var lname = $('#lname').val();
    var age = $('#age').val();
	if(description && quantity) {
		items.push({
			'fname': fname,
			'lname': lname,
            'age'  : age
		});
		
	}
	event.preventDefault();
}