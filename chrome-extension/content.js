
$(document).ready(function() {
	var answers = $('#answers').html()
	//console.log(answers)
	$('a').each(function(){
		try {
			var answer_id = $('a').attr('name');
			var xhr = new XMLHttpRequest();
			var params = JSON.stringify({"answer_id": answer_id})
			xhr.open("POST", "http://4b4084d9.ngrok.io/links/find_post", true)
			xhr.send(params)
		} except(err) {
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