/**
 * @author fabiantheblind http://www.the-moron.net info@the-moron.net
 * under CC licence http://creativecommons.org/licenses/by-nc/3.0/de/
 * written for FHP SS 2010 2111 Typo Std Workshop Indesign & JavaScript
 * 
 * all user generated variables & functions begin with "my"
 */

myMainFunction();
alert("Operation Complete!");

function myMainFunction() {
	
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

var		myPublicParagraphStyle,myPublicCharacterStyle, myPublicName, myPublicColor;

		;

var		myParagraphs = myTextFrame.paragraphs;
		
		myParagraphs.everyItem().appliedParagraphStyle = myCreateStyles(myDocument,
															myPublicParagraphStyle,myPublicCharacterStyle,
															myPublicName, myPublicColor);
}

function myCreateStyles(myPrivateDocument, myPrivateParagraphStyle,myPrivateCharacterStyle, myPrivateName, myPrivateColor) {
	
		try{
	    	myPrivateColor = myPrivateDocument.colors.item("color");
	    	//If the paragraph style does not exist, trying to get its name will generate an error.
	    	myPrivateName = myPrivateColor.name;
	    }
	    catch (e){
	    	//The paragraph style did not exist, so create it.
	    	myPrivateColor = myPrivateDocument.colors.add({name:"color", model:ColorModel.process, colorValue:[0, 100, 0, 23]});
	    }
		
		
		try{
	    	myPrivateParagraphStyle = myPrivateDocument.paragraphStyles.item("text");
	    	//If the paragraph style does not exist, trying to get its name will generate an error.
	    	myPrivateName = myPrivateParagraphStyle.name;
	    }
	    catch (e){
	    	//The paragraph style did not exist, so create it.
	    	myPrivateParagraphStyle = myPrivateDocument.paragraphStyles.add({name:"text"});
			myPrivateParagraphStyle.pointSize = 23;


	    }
		
		
			try{
	    	myPrivateCharacterStyle = myPrivateDocument.characterStyles.item("text");
	    	//If the paragraph style does not exist, trying to get its name will generate an error.
	    	myPrivateName = myPrivateCharacterStyle.name;
	    }
	    catch (e){
	    	//The paragraph style did not exist, so create it.
	    	myPrivateCharacterStyle = myPrivateDocument.characterStyles.add({name:"text"});
			myPrivateCharacterStyle.pointSize = 23;
			myPrivateCharacterStyle.fillColor = "color";

	    }
		
		
	var	myGrepStyle = myPrivateParagraphStyle.nestedGrepStyles.add();
		myGrepStyle.appliedCharacterStyle = myPrivateCharacterStyle;
		myGrepStyle.grepExpression = "o";
		
		//At this point, the variable myParagraphStyle contains a reference to a Paragraph style object
		//with a nested Grep Style
		//which you can now use to specify formatting.
		//Now make the text look good.
		return myPrivateParagraphStyle;
}

		
		

