function Image(image, title, tags) {
	this.image = image;
	this.title = title;
	this.tags = tags;
	this.display = function() {

		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag);
			// $(".buttons").prepend("<button>" + tag + "</button>")
		})
		container.css("background", this.color)

		var imageString = "";
		imageString += "<p>" + this.image + "</p>";
		imageString += "<cite>" + this.title + "</cite>";

		container.html(imageString)
		$(".quotes").prepend(container)
	}
}

var images = [
	new Image("<img src=imgs/catimg1.jpg>", "2020", ["revanchist", "social-media"]),
 	new Quote('"creativity is dead. let\'s get you some fruit"', " it\'s always sunny", ["meme", "mistakes"], "lightblue"),
 	new Quote("and yeah so", "ok", ["meme", "sad"], "purple")
 ]

//global taglist
 var tagList = []
quotes.forEach(function(quote){
	quote.display();
	quote.tags.forEach(function(tag){
		// check to see if tag has been added to tag list
		if(!tagList.includes(tag)) {
			// if it isn't added, add it
			tagList.push(tag);
			// and also make a button for it
			$(".buttons").prepend("<button class='filter'>" + tag + "</button>")
		}
	})
})

console.log(tagList)

$(".filter").on("click", function() {
	var tag = $(this).text();
	console.log(tag)
	$("." + tag).fadeIn(); // show all the things that are in the tag
	$("div > div").not("." + tag).fadeOut();

	$(".filter").removeClass("active") // makes it so when you click a different button it takes off the colour of the previous
	$(this).addClass("active")
})