/**
 * @author fabiantheblind http://www.the-moron.net info@the-moron.net
 * under CC licence http://creativecommons.org/licenses/by-nc/3.0/de/
 * written for FHP SS 2010 2111 Typo Std Workshop Indesign & JavaScript
 * 
 * all user generated variables & functions begin with "my"
 */

var 	myDocument = app.documents.add();
		myDocument.documentPreferences.facingPages = false; 
		myDocument.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.centimeters;
		myDocument.viewPreferences.verticalMeasurementUnits = MeasurementUnits.centimeters;
var		myPage = myDocument.pages.item(0);
		
var 	myFont = app.fonts.item("Arial Black");		
		
var 	myString = "\"Hello World!\"";
var 	myChar = "a";
var 	myInt = 0;
var 	myFloat = 2.3;
var 	myBoolean = true;
var 	myArray = new Array();
		myArray[0] = 1;
		myArray[1] = 2;
		myArray[2] = 3;
		myArray[3] = 72;

var 	myTextFrame = myPage.textFrames.add(
		{contents:myString,geometricBounds:[2, 0, myDocument.documentPreferences.pageHeight, 23]});

var 	myObjekt = myPage.textFrames.item(0).characters.everyItem();

		myTextFrame.insertionPoints.item(0).contents = (prompt("Please Write something"," ","myDialog")+" \n");

		myObjekt.pointSize = myArray[3];
		
		myTextFrame.paragraphs.everyItem().appliedFont = myFont;
		
		myTextFrame.fit(FitOptions.FRAME_TO_CONTENT);


		alert("Operation Complete!");


