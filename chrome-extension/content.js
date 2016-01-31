
$(document).ready(function() {
	var answers = $('#answers').html()
	//console.log(answers)
	// gets all links on the page
	$('a').each(function(){
		try { // anything in the following block generates an error, ignore it and console log the error instead of killing the program
			var answer_id = $('a').attr('name'); // gets the id from the link
			var xhr = new XMLHttpRequest(); // makes new api request to my server on my laptop
			var params = JSON.stringify({"answer_id": answer_id}) // parameters to send to my server
			xhr.open("POST", "http://4b4084d9.ngrok.io/links/find_post", true) // starts post to server
			xhr.setRequestHeader("Accept", "application/json");
			xhr.onreadystatechange = function () { // checks if async task is completed and returns data
		        if (xhr.readyState == 4) {
		            if (xhr.status == 200) {
		                var data = xhr.responseText;
		                console.log(data)
		            }
		        }
		    };
			xhr.send(params) // sends parameters to server
		} catch(err) {
			console.log("this a tag has no name attribute");
		}
	})
	
});

//for (i = 0, i < 10, i++) {
	//var xhr = new XMLHttpRequest();
	//xhr.open("POST", "http://4b4084d9.ngrok.io/links/find_post", true);
	//xhr.send();
//};
console.log(xhr.status);
console.log(xhr.statusText);