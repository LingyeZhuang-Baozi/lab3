'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(buttonClick);
	$("a.thumbnail").click(projectClick);
}

/* Click jumbotron button → change text. */
function buttonClick(e) {
	// debugging statement
	console.log("Big blue button clicked");
	// change header text to "Javascript is connected"
	$('.jumbotron h1').text("Javascript is connected");
	// change text on the button
	if (Math.random() <= 0.2) {
		$('.jumbotron button').text("(ﾉ)`ω´(ヾ) Itchy!");
	} else if (Math.random() <= 0.4) {
		$('.jumbotron button').text("Ouch! ´ω`ﾟ)ﾟ｡");
	} else if (Math.random() <= 0.6) {
		$('.jumbotron button').text("Click more!! ⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄");
	} else if (Math.random() <= 0.8) {
		$('.jumbotron button').text("→ clicked ←");
	} else {
		$('.jumbotron button').text("Test Javascript");
	}
	// change subline style
	// $(".jumbotron p").addClass("active");
	$(".jumbotron p").toggleClass("active");
}

/* Click project → output description. */
function projectClick(e) { 
	// debugging statement
	console.log("Project clicked");
    // prevent the page from reloading      
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    // $(this).css("background-color", "#7fff00");
    var containingProject = $(this).closest(".project");
    // containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
    	$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
    	// description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    	$(description).fadeOut();
    }
}