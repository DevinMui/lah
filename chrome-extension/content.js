url = "http://4b4084d9.ngrok.io/"
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
			post = $(string).find(".post-text").find("a")
			console.log(post[0])
			for(var i=0;i<post.length;i++){
				index = i
				var params = {answer_id: answer_id, number: i} // parameters to send to my server
				console.log(params)
				$.ajax({
				    url: url + 'links/find_post',
				    headers: {
				    	"Accept": "application/json"
				    },
				    type: 'POST',
				    data: JSON.stringify(params),
				    contentType: 'application/json; charset=utf-8',

				    dataType: 'json',
				    async: true,
				    success: function(data) {
				        $(string).find(".post-text").find("a")[index].href = url + "archive/" + data[0].archive // change link
				    }
				});
			}
		} catch(err) {
			console.log("this a tag has no name attribute");
		}
	})

});
