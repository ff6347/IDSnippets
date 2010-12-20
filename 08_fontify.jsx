// basic javascript snippets for indesign cs 4
// written by fabiantheblind

// first of all open basicDoc.idml or use script buildDocument.jsx
// to build the doc we are using

//this runs the function
main();
// this is the function
function main(){
// setup some variables
var theDoc = app.activeDocument; // active doc
var thePage = theDoc.pages.item(0); // first page
var theTextFrame = thePage.textFrames.item(0); // the one Textframe that is there

// now we can loop thru the Text
for(var i = 0;i < theTextFrame.characters.length; i++){
	var theValue = Math.floor(Math.random()*app.fonts.length-1);
	// store the character in a variable
	var theChar = theTextFrame.characters.item(i);
	// apply the font
	 theChar.appliedFont = app.fonts.item(theValue);
	
	try_char(theChar);
	}
	
}

// with some help from Martin Fischer
//based on Peter Kahrel's  http://www.kahrel.plus.com/indesign/compose_cs3.jsx
function try_char (theChar) 
    { 

    try 
        { 
		// save the character
		var storage = theChar.contents;
        // create outline 
        theChar.createOutlines(); 
        // if we got here it worked, so delete the outline 
        theChar.remove(); 
        // insert the character (again) 
        theChar.contents = storage; 
        } 
    catch(e) 
        { 
        // couldn't create outline, apply a basic font.
		// this could hold an array of working fonts. to simulate the randomness
		var theValue = Math.floor(Math.random()*app.fonts.length-1);
		
        theChar.appliedFont = app.fonts.item(theValue); 
		try_char_again(theChar);
        } 
    }

	function try_char_again (theChar) 
	    { 

	    try 
	        { 
			// save the character
			var storage = theChar.contents;
	        // create outline 
	        theChar.createOutlines(); 
	        // if we got here it worked, so delete the outline 
	        theChar.remove(); 
	        // insert the character (again) 
	        theChar.contents = storage; 
	        } 
	    catch(e) 
	        { 
	        // couldn't create outline, apply a basic font.
			// this could hold an array of working fonts. to simulate the randomness
			var theValue = Math.floor(Math.random()*app.fonts.length-1);

	        theChar.appliedFont = app.fonts.item(theValue); 
			try_char_forTheLastTime(theChar);
	        } 
	    }
		function try_char_forTheLastTime (theChar) 
		    { 

		    try 
		        { 
				// save the character
				var storage = theChar.contents;
		        // create outline 
		        theChar.createOutlines(); 
		        // if we got here it worked, so delete the outline 
		        theChar.remove(); 
		        // insert the character (again) 
		        theChar.contents = storage;
		        } 
		    catch(e) 
		        { 
		        // couldn't create outline, apply a basic font.
				// this could hold an array of working fonts. to simulate the randomness
		        theChar.appliedFont = "Times";
				// now we have about 0,12% non working characters so we can live with Times
		        } 
		    }