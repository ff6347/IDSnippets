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

var 	myString = "\"Hello World!\"";
		// calculate the bounds of the page 
var 	myY1 = 0;
var 	myX1 = 0;
var 	myY2 = myDocument.documentPreferences.pageHeight;
var 	myX2 = myDocument.documentPreferences.pageWidth;
	

var		myBackground = myPage.rectangles.add(
		{geometricBounds:[myY1, myX1, myY2, myX2]});
		myBackground.fillColor = myDocument.colors.item(0);		
var 	myTextFrame = myPage.textFrames.add();


		//set the position of the text
		myTextFrame.geometricBounds = [myY1, myX1, myY2, myX2];
		
		if(myString.length>=1){
		myTextFrame.contents = myString+ "\n"+"\t"+"\n";
		myTextFrame.characters.everyItem().appliedFont = app.fonts.item("Arial");
		myTextFrame.characters.everyItem().fillColor = myDocument.colors.item(1);		
		myTextFrame.characters.item(0).pointSize = Math.random()*500;
		myTextFrame.characters.itemByRange(1, -3).pointSize = Math.random()*42;
		myTextFrame.characters.lastItem(0).pointSize = Math.random()*500;
		myTextFrame.characters.lastItem(0).pointSize = Math.random()*1000;	
		myTextFrame.characters.middleItem().appliedFont = app.fonts.item("Arial Black");
		myTextFrame.characters.middleItem().pointSize = 300;

		}
		
		myTextFrame.paragraphs.everyItem().justification = Justification.CENTER_ALIGN;
		
		
		
		alert("Operation Complete!");


