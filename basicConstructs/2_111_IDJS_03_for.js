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
		
		
var 	myString ="";
var 	myArray = new Array();
		myArray[0] = "Hello";
		myArray[1] = " ";
		myArray[2] = "World!";
		
		// calc the position of the Textframe
var 	myTextFrame = myPage.textFrames.add();
var 	myY1 = 0;
var 	myX1 = 0;
var 	myY2 = myDocument.documentPreferences.pageHeight;
var 	myX2 = myDocument.documentPreferences.pageWidth;

		//set the position of the text
		myTextFrame.geometricBounds = [myY1+10, myX1, myY2+10, myX2];
		//add the Text
		
		// also for (var i=0; i< myArray.length; i++)
		for (var i=0; i<= myArray.length-1; i++) {
	
			myString= myString + myArray[i];
			myTextFrame.contents = myString;
			
			var x = 42;
			
			if(i==0){
			myTextFrame.characters.item(i).pointSize = 42;	
			}else{
			myTextFrame.characters.item(i).pointSize = x*i*2;	
			}
			
		}
		
		myTextFrame.characters.everyItem().appliedFont =  app.fonts.item("Arial Black");
		myTextFrame.characters.everyItem().fillTint = 0;	
var		myBackground = myPage.rectangles.add(
		{geometricBounds:[myY1+3, myX1,myY2-3, myX2]});
		
		myBackground.fillColor = myDocument.colors.item(0);
		myBackground.fillTint = 23;
		myBackground.sendToBack();
		myBackground.locked = true;


		
	

		alert("Operation Complete!");


