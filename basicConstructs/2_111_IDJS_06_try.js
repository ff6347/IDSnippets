/**
 * @author fabiantheblind http://www.the-moron.net info@the-moron.net
 * under CC licence http://creativecommons.org/licenses/by-nc/3.0/de/
 * written for FHP SS 2010 2111 Typo Std Workshop Indesign & JavaScript
 * 
 * all user generated variables & functions begin with "my"
 */

//var 	myDocument = app.documents.add();
var 	myDocument = app.activeDocument;
var 	myPage = myDocument.pages.add();



		// calculate the position of the textFrame
var 	myTextFrame = myPage.textFrames.add();
var 	myY1 = 0;
var 	myX1 = 0;
var 	myY2 = myDocument.documentPreferences.pageHeight;
var 	myX2 = myDocument.documentPreferences.pageWidth;

		//set the position of the text
		myTextFrame.geometricBounds = [myY1, myX1, myY2, myX2];

		myTextFrame.contents = TextFrameContents.placeholderText;
		myTextFrame.characters.everyItem().appliedFont =  app.fonts.item("Arial");

var		myParagraphStyle,myCharacterStyle, myName, myColor;


		try{
	    	myColor = myDocument.colors.item("color");
	    	//If the paragraph style does not exist, trying to get its name will generate an error.
	    	myName = myColor.name;
	    }
	    catch (e){
	    	//The paragraph style did not exist, so create it.
	    	myColor = myDocument.colors.add({name:"color", model:ColorModel.process, colorValue:[0, 100, 0, 23]});
	    }
		
		
		try{
	    	myParagraphStyle = myDocument.paragraphStyles.item("text");
	    	//If the paragraph style does not exist, trying to get its name will generate an error.
	    	myName = myParagraphStyle.name;
	    }
	    catch (e){
	    	//The paragraph style did not exist, so create it.
	    	myParagraphStyle = myDocument.paragraphStyles.add({name:"text"});
			myParagraphStyle.pointSize = 23;


	    }
		
		
			try{
	    	myCharacterStyle = myDocument.characterStyles.item("text");
	    	//If the paragraph style does not exist, trying to get its name will generate an error.
	    	myName = myCharacterStyle.name;
	    }
	    catch (e){
	    	//The paragraph style did not exist, so create it.
	    	myCharacterStyle = myDocument.characterStyles.add({name:"text"});
			myCharacterStyle.pointSize = 23;
			myCharacterStyle.fillColor = "color";

	    }
		
		
	var	myGrepStyle = myParagraphStyle.nestedGrepStyles.add();
		myGrepStyle.appliedCharacterStyle = myCharacterStyle;
		myGrepStyle.grepExpression = "o";
		
		//At this point, the variable myParagraphStyle contains a reference to a Paragraph style object
		//with a nested Grep Style
		//which you can now use to specify formatting.
		//Now make the text look good.

		var	myParagraphs = myTextFrame.paragraphs;
		
		myParagraphs.everyItem().appliedParagraphStyle = myParagraphStyle;
		
		alert("Operation Complete!");
		

