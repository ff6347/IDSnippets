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

var 	myString = prompt("Write Something or not...","","myDialog");

		// calculate the position of the textFrame
var 	myTextFrame = myPage.textFrames.add();
var 	myY1 = 10;
var 	myX1 = 0;
var 	myY2 = myDocument.documentPreferences.pageHeight;
var 	myX2 = myDocument.documentPreferences.pageWidth;

		//set the position of the text
		myTextFrame.geometricBounds = [myY1, myX1, myY2, myX2];
		
		if(myString.length>=14){
			
		myTextFrame.contents = myString;
		myTextFrame.characters.everyItem().appliedFont = app.fonts.item("Arial");
		myTextFrame.characters.itemByRange(1, -2).appliedFont = app.fonts.item("Arial Black");
		myTextFrame.characters.everyItem().pointSize = Math.random()*42;
		
		if((myTextFrame.characters.everyItem().pointSize)<23){	
				myTextFrame.characters.everyItem().pointSize = 23;
		}
		
		myTextFrame.paragraphs.everyItem().leading = myString.length*5;
		myTextFrame.characters.everyItem().fillColor = myDocument.colors.item(4);
	
		myTextFrame.paragraphs.everyItem().kerningValue =myString.length*100;
		
var		myBackground = myPage.rectangles.add(
		{geometricBounds:[myY1, myX1,(myDocument.documentPreferences.pageHeight/2), myX2]});
		
		myBackground.fillColor = myDocument.colors.item(0);
		myBackground.fillTint = 23;
		myBackground.sendToBack();
		myBackground.locked = true;

		}else{
			
		myTextFrame.contents="\"Hello World!\"";
		myTextFrame.characters.everyItem().appliedFont = app.fonts.item("Arial Black");
		myTextFrame.characters.middleItem().pointSize = 300;
		myTextFrame.characters.everyItem().fillColor = myDocument.colors.item(3);	
		
var		myBackground = myPage.rectangles.add(
		{geometricBounds:[(myDocument.documentPreferences.pageHeight/2), myX1, myY2, myX2]});
		
		myBackground.fillColor = myDocument.colors.item(0);
		myBackground.fillTint = 77;
		myBackground.sendToBack();
		myBackground.locked = true;
		}

		alert("Operation Complete!");


