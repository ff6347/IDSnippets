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

var 	myY1 = 0;
var 	myX1 = 0;
var 	myY2 = myDocument.documentPreferences.pageHeight;
var 	myX2 = myDocument.documentPreferences.pageWidth;

var 	myTextFrame = myPage.textFrames.add();
		//set the position of the text
		myTextFrame.geometricBounds = [myY1, myX1, myY2/3, myX2];
		myTextFrame.contents = TextFrameContents.placeholderText; 
		
		myTextFrame = myPage.textFrames.add();
		//set the position of the text
		myTextFrame.geometricBounds = [myY1+(myDocument.documentPreferences.pageHeight/3), myX1, myY2
		-(myDocument.documentPreferences.pageHeight/3), myX2];
		myTextFrame.contents = TextFrameContents.placeholderText;
		
		myTextFrame = myPage.textFrames.add();
		//set the position of the text
		myTextFrame.geometricBounds = [myY1+((myDocument.documentPreferences.pageHeight/3)*2), myX1, myY2, myX2];
		myTextFrame.contents = TextFrameContents.placeholderText;
		
		
var		i = 0; // could also be myInt but to use i is an programming syntax convention
var 	myString ="";

var 	myArray = new Array();
		
		while ( i <= 2 )
		{
		myArray.push(myPage.textFrames.item(i));

		i++;
		}
		
		myPage.groups.add(myArray);
		
		myTextFrame.characters.everyItem().appliedFont =  app.fonts.item("Arial Black");		
		
		alert("Operation Complete!");



