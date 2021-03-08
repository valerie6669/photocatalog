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
		imageString += "<img src=>" + this.image + "</img>";
		//imageString += "<cite>" + this.title + "</cite>";

		container.html(imageString)
		$(".Image").prepend(container)
	}
}

var images = [
	new Image("<img src=imgs/catimg1.jpg>", "Two bodies one braincell", ["sleepy", "molly", "meemoo", "cuddles"]),
 	new Image("<img src=imgs/catimg2.jpg>", "Lost in thought", ["sit", "meemoo"]),
 	new Image("<img src=imgs/catimg3.jpg>", "Epitome of Dreaming", ["sleepy", "meemoo"]),
 	new Image("<img src=imgs/catimg4.jpg>", "Someone by my side", ["sleepy", "molly", "meemoo", "cuddles"]),
 	new Image("<img src=imgs/catimg5.jpg>", "Awareness", ["sit", "meemoo"]),
 	new Image("<img src=imgs/catimg6.jpg>", "Before sunrise", ["dark", "trix"]),
 	new Image("<img src=imgs/catimg7.jpg>", "Awareness", ["cuddles", "meemoo", "molly", "chillin"]),
 	new Image("<img src=imgs/catimg8.jpg>", "The poise", ["chillin", "molly"]),
 	new Image("<img src=imgs/catimg9.jpg>", "Awareness", ["sleepy", "meemoo", "molly", "trix", "cuddles"]),
 	new Image("<img src=imgs/catimg10.jpg>", "Communal naptime", ["sleepy", "meemoo", "molly", "cuddles"]),
 	new Image("<img src=imgs/catimg11.jpg>", "Diva", ["chillin", "molly"]),
 	new Image("<img src=imgs/catimg12.jpg>", "Peace and Loves", ["sleepy", "trix"]),
 	new Image("<img src=imgs/catimg13.jpg>", "Shy", ["sit", "meemoo"]),
 	new Image("<img src=imgs/catimg14.jpg>", "Something in the closet", ["cuddles", "meemoo", "molly"]),
 	new Image("<img src=imgs/catimg15.jpg>", "Frazzled, tired", ["sit", "molly"]),
 	new Image("<img src=imgs/catimg16.jpg>", "Cleanest lady around", ["sit", "molly"]),
 	new Image("<img src=imgs/catimg17.jpg>", "Out cold", ["sleepy", "trix"]),
 	new Image("<img src=imgs/catimg18.jpg>", "It\'s been bedtime", ["sleepy", "meemoo", "trix", "dark"]),
 	new Image("<img src=imgs/catimg19.jpg>", "Moments before disaster", ["cuddles", "meemoo", "molly", "chillin"]),
 	new Image("<img src=imgs/catimg20.jpg>", "A floor? A bed", ["sleepy", "trix"]),
 	new Image("<img src=imgs/catimg21.jpg>", "Comfy", ["sleepy", "trix"]),
 	new Image("<img src=imgs/catimg22.jpg>", "Distracted nap", ["chillin", "meemoo"]),
 	new Image("<img src=imgs/catimg23.jpg>", "Model", ["sit", "molly"]),
 	new Image("<img src=imgs/catimg24.jpg>", "Large for the winter", ["sit", "trix"]),
 	new Image("<img src=imgs/catimg25.jpg>", "Sweetest Sleep", ["sleepy", "molly"]),
 	new Image("<img src=imgs/catimg26.jpg>", "Fruit", ["sit", "meemoo", "molly"]),
 	new Image("<img src=imgs/catimg27.jpg>", "Who's that?", ["sit", "meemoo", "dark"]),
 	new Image("<img src=imgs/catimg28.jpg>", "Giving me those eyes", ["sit", "meemoo"]),
 ]

//global taglist
 var tagList = []
images.forEach(function(image){
	image.display();
	image.tags.forEach(function(tag){
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