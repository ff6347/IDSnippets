// basic javascript snippets for indesign cs 4
// written by fabiantheblind

// this builds a basic doc with a page. A paragraphstyle a characterstyle
// and some lorem ipsum text in a textframe with 3 columns in the bounds

main();
function main (){
	var theDoc = buildDoc();
	theStyles(theDoc);
	var thePage = theDoc.pages.item(0);
	var theTextFrame = thePage.textFrames.add({
		geometricBounds:getBounds(theDoc,thePage)
		
	});
	theTextFrame.textFramePreferences.textColumnCount = thePage.marginPreferences.columnCount;
	theTextFrame.textFramePreferences.textColumnGutter = thePage.marginPreferences.columnGutter;
	
	theTextFrame.contents = TextFrameContents.placeholderText;
	

}
function theStyles(theDoc){
	parStyle = theDoc.paragraphStyles.add({name:"parStyle"});
	with(parStyle){		

			
		leading = 23;
		pointSize = 13;

	}
	
	charStyle = theDoc.characterStyles.add({name:"charStyle"});
		with(charStyle){		
			leading = 23;
			pointSize = 13;

		}
	
	
}

function buildDoc(){
	var theDoc = app.documents.add()
	with (theDoc.documentPreferences) {
		pageWidth = "210mm";
		pageHeight = "210mm";
		//BleedBox settings
		documentBleedBottomOffset = "3mm";
		documentBleedTopOffset = "3mm";
		documentBleedInsideOrLeftOffset = "3mm";
		documentBleedOutsideOrRightOffset = "3mm";
	}
	// have to look up why the size is declared in 2 ways
		with (theDoc.viewPreferences) {
		pageWidth = "210mm";
		pageHeight = "210mm";
		// to make shure we have the right positions and units
		horizontalMeasurementUnits = MeasurementUnits.MILLIMETERS;
		verticalMeasurementUnits = MeasurementUnits.MILLIMETERS;
		rulerOrigin = RulerOrigin.pageOrigin;
		
	}
	
	with(theDoc.masterSpreads.item(0).pages.item(0).marginPreferences){
		left = "13mm";
		top = "23mm";
		right = "13mm";
		bottom = "23mm";
		columnCount = 3;
		columnGutter = "4mm";
	}
	with(theDoc.masterSpreads.item(0).pages.item(1).marginPreferences){
		left = "13mm";
		top = "23mm";
		right = "13mm";
		bottom = "23mm";
		columnCount = 3;
		columnGutter = "4mm";
	}
	
	
	return theDoc;
}

function getBounds(myDocument, myPage){
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