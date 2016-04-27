saved = [];
$(document).on('click', '#save', function(){
	var title = $("#title").val();
	var date = $("#date").val();
	var description = $("#describ").val();
	
	console.log(title); 
	console.log(date);
	console.log(description);
	
	
	saved.push({events: title, date, description});
	var JSONSaved = JSON.stringify(saved);
	localStorage.setItem("saved", JSONSaved);
		
	alert("Eventet är nu sparat")
	console.log(saved);
});

$('.se-saved').click(function (){
    //hämtar från localstorage
    var events = JSON.parse(localStorage.getItem("saved"));
	//printar ut listan för de sparade mat och dryckes kombinationerna
	for (i = 0; i < 10; i++){
		console.log(i);
		var Title = events[i].events;
		var Dates = events[i].date;
        var Description = events[i].description;
		console.log(Title);
		console.log(Dates);
		console.log(Description);
		$("#test").append("<div class='panel panel-default'> <h1>" + Title + "</h1> <article> <p> Dates : " + Dates + " Beskrivning :" + Description + "</p> </article></div>");
		
	}
	});