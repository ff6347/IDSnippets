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
		
var 	myString ="\"Hello World\"";

var 	myTextFrame = myPage.textFrames.add();
var 	myY1 = "13cm";
var 	myX1 = 0;
var 	myY2 = myDocument.documentPreferences.pageHeight;
var 	myX2 = myDocument.documentPreferences.pageWidth;
		//set the position of the text
		myTextFrame.geometricBounds = [myY1, myX1, myY2, myX2];
	
		myTextFrame.contents = myString;
		myTextFrame.characters.everyItem().appliedFont =  app.fonts.item("Arial");
		
	for(var i = 0;i<myTextFrame.characters.length;i++){
		
			switch(i){
			case 4:
			myTextFrame.characters.item(i).appliedFont =  app.fonts.item("Arial Black");
			myTextFrame.characters.item(i).pointSize = 42;
			break;
			case 7:
			myTextFrame.characters.item(i).appliedFont =  app.fonts.item("Arial Black");
			myTextFrame.characters.item(i).pointSize = 42;
			break;
			}
		
		}
		
		// calc the position of the Textframe



		//add the Text

		alert("Operation Complete!");

