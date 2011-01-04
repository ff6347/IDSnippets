/**
 * @author fabiantheblind http://www.the-moron.net info@the-moron.net
 * under CC licence http://creativecommons.org/licenses/by-nc/3.0/de/
 * written for FHP SS 2010 2111 Typo Std Workshop Indesign & JavaScript
 * 
 * all user generated variables & functions begin with "my"
 */
myMain();
alert("Operation Complete!");


function myMain() {
	//var 	myDocument = app.documents.add();
var 	myDocument = app.activeDocument;
var 	myPage = myDocument.pages.add();
		myDocPreferences(myDocument);
		
		// calculate the position of the textFrame
var 	myTextFrame = myPage.textFrames.add();
var 	myY1 = 0;
var 	myX1 = 0;
var 	myY2 = myDocument.documentPreferences.pageHeight;
var 	myX2 = myDocument.documentPreferences.pageWidth;

		//set the position of the text
		myTextFrame.geometricBounds = myGetBounds(myDocument, myDocument.pages.item(1));
			
		myTextFrame.contents =  TextFrameContents.placeholderText;

		
}

function myGetBounds(myDocument, myPage){
	var myPageWidth = myDocument.documentPreferences.pageWidth;
	var myPageHeight = myDocument.documentPreferences.pageHeight
	if(myPage.side == PageSideOptions.leftHand){
		var myX2 = myPage.marginPreferences.left;
		var myX1 = myPage.marginPreferences.right;
	}
	else{
		var myX1 = myPage.marginPreferences.left;
		var myX2 = myPage.marginPreferences.right;
	}
	var myY1 = myPage.marginPreferences.top;
	var myX2 = myPageWidth - myX2;
	var myY2 = myPageHeight - myPage.marginPreferences.bottom;
	return [myY1, myX1, myY2, myX2];
}

function myColumns(myDocument, myPage){
	var myPageWidth = myDocument.documentPreferences.pageWidth;
	var myPageHeight = myDocument.documentPreferences.pageHeight
	var myPageColumnCount= myPage.marginPreferences.columnCount;
	var myPageColumnGutterWidth= myPage.marginPreferences.columnGutter;

	var myX1 = myPage.marginPreferences.left;
	var myY1 = myPage.marginPreferences.top;
	var myX2 = myX1
		+((myPageWidth-myPage.marginPreferences.left
		-myPage.marginPreferences.right
		-(myPageColumnGutterWidth* (myPageColumnCount-1))) /myPageColumnCount);
	var myY2 = myPageHeight - myPage.marginPreferences.bottom;
	return [myY1, myX1, myY2, myX2];
}

function myDocPreferences(myDocument) {
	with (myDocument.documentPreferences) {
	myDocument.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.centimeters;
	myDocument.viewPreferences.verticalMeasurementUnits = MeasurementUnits.centimeters;
	myDocument.viewPreferences.rulerOrigin = RulerOrigin.pageOrigin;
	
	//BleedBox settings
	documentBleedBottomOffset = "3mm";
	documentBleedTopOffset = "3mm";
	documentBleedInsideOrLeftOffset = "3mm";
	documentBleedOutsideOrRightOffset = "3mm";
	
	//setup the masterGrid
	var myGridPreferences = myDocument.gridPreferences;
	myGridPreferences.baselineDivision = "5mm";
	myGridPreferences.baselineStart = "10mm";
	myGridPreferences.baselineGridShown = true;
	//setup margins and columns for the masterpage
	//lots of these values could be stored in variables. To keep it understandable
	//here are still the direct expression.
	//also could lots of this be solved faster with a for or while iteration
	var myMasterSpread = myDocument.masterSpreads.item(0);
	var myMarginPreferencesLeft = myMasterSpread.pages.item(0).marginPreferences;
	myMarginPreferencesLeft.left = "13mm";
	myMarginPreferencesLeft.top = "10mm";
	myMarginPreferencesLeft.right = "13mm";
	myMarginPreferencesLeft.bottom = "23mm";
	myMarginPreferencesLeft.columnCount = 3;
	myMarginPreferencesLeft.columnGutter = "4mm";
	var myMarginPreferencesRight = myMasterSpread.pages.item(1).marginPreferences;
	myMarginPreferencesRight.left = "13mm";
	myMarginPreferencesRight.top = "10mm";
	myMarginPreferencesRight.right = "13mm";
	myMarginPreferencesRight.bottom = "23mm";
	myMarginPreferencesRight.columnCount = 3;
	myMarginPreferencesRight.columnGutter = "4mm";
	
}
}

