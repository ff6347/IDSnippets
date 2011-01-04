/**
 * @author fabiantheblind http://www.the-moron.net info@the-moron.net
 * under CC licence http://creativecommons.org/licenses/by-nc/3.0/de/
 * written for FHP SS 2010 2111 Typo Std Workshop Indesign & JavaScript
 * 
 * all user generated variables & functions begin with "my"
 */
myMain();
alert("Operation Complete!");


function myMain(){
	var myDocument = app.activeDocument;
	var myCharStyle, myName;
	
	try {
		var mySelection = app.selection[0].characters;
		
		
	} 
	catch (e) {
	
		alert("You have nothing selected.\n try again!");
		
		
	}
	mySelection.everyItem().appliedCharacterStyle = myCreateCharStyle(myDocument, myCharStyle, myName);

}

function myCreateCharStyle(myDocument, myCharStyle, myName) {
	
	//var		myColor = myDocument.colors.add({name:"myOtherColor", model:ColorModel.process, colorValue:[0, 70, 100, 5]});
	
		try{
	    	myCharStyle = myDocument.characterStyles.item("text");
	    	//If the paragraph style does not exist, trying to get its name will generate an error.
	    	myName = myCharStyle.name;
	    }
	    catch (e){
	    	//The paragraph style did not exist, so create it.
	    	myCharStyle = myDocument.characterStyles.add({name:"text"});
	    }
		
			try{
	    	myColor = myDocument.colors.item("myOtherColor");
	    	//If the paragraph style does not exist, trying to get its name will generate an error.
	    	myName = myColor.name;
	    }
	    catch (e){
	    	//The paragraph style did not exist, so create it.
	    	myCharStyle = myDocument.colors.add({name:"myOtherColor", model:ColorModel.process, colorValue:[0, 0, 100, 5]});
	    }
		//At this point, the variable myCharStyle contains a reference to a Character style object
		//which you can now use to specify formatting.
		//Now make the text look good.
		myCharStyle.pointSize = "12pt";
		myCharStyle.fillColor = "myOtherColor";
		return myCharStyle;
}

