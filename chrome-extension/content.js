
$(document).ready(function() {
	var answers = $('#answers').html()
	//console.log(answers)
	// gets all links on the page
	$('a').each(function(){
		try { // anything in the following block generates an error, ignore it and console log the error instead of killing the program
			var answer_id = $(this).attr('name'); // gets the id from the link
			//console.log(answer_id)
			if(answer_id == undefined)
				return true
			var string = "#answer-" + answer_id
			for(var i=0;i<$(string).find(".post-text").find("a").length;i++){
				//var xhr = new XMLHttpRequest(); // makes new api request to my server on my laptop
				var params = {answer_id: answer_id, number: i} // parameters to send to my server
				console.log(params)
				/*xhr.open("POST", "http://4b4084d9.ngrok.io/links/find_post", true) // starts post to server
				xhr.setRequestHeader("Accept", "application/json");
				xhr.onreadystatechange = function () { // checks if async task is completed and returns data
			        if (xhr.readyState == 4) {
			           if (xhr.status == 200) {
			                var data = xhr.responseText;
			                console.log(data)
			            }
			        }
			    };
				xhr.send(params) // sends parameters to server*/
				$.ajax({
				    url: 'http://4b4084d9.ngrok.io/links/find_post',
				    headers: {
				    	"Accept": "application/json"
				    },
				    type: 'POST',
				    data: JSON.stringify(params),
				    contentType: 'application/json; charset=utf-8',

				    dataType: 'json',
				    async: true,
				    success: function(msg) {
				        console.log(msg);
				    }
				});
			}
		} catch(err) {
			console.log("this a tag has no name attribute");
		}
	})
	
});
