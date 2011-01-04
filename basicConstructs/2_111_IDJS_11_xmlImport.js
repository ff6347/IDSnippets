/**
 * @author fabiantheblind http://www.the-moron.net info@the-moron.net
 * under CC licence http://creativecommons.org/licenses/by-nc/3.0/de/
 * written for FHP SS 2010 2111 Typo Std Workshop Indesign & JavaScript
 * 
 * all user generated variables & functions begin with "my"
 */
myMain();

function myMain(){
	//var 	myDocument = app.documents.add();
	var myDocument = app.activeDocument;
	
	var myPage = myDocument.pages.add();
	
	myDocument.documentPreferences.facingPages = false;
	myDocument.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.centimeters;
	myDocument.viewPreferences.verticalMeasurementUnits = MeasurementUnits.centimeters;
	
	var myFont = app.fonts.item("Arial");
	


		 myXMLImport(myDocument, myPage);
	var myTextFrame = myPage.textFrames.add({geometricBounds: [2, 3,
							myDocument.documentPreferences.pageHeight,
							myDocument.documentPreferences.pageWidth]});

	for (var i=0; i<myDocument.xmlElements.length; i++) {
		
		
		for (var j=0; j<myDocument.xmlElements.item(i).xmlElements.length; j++) {
			
			myDocument.xmlElements.item(i).xmlElements.item(j).xmlAttributes.everyItem().convertToElement();
	
		};
	
		 myTextFrame.placeXML(myDocument.xmlElements.item(i));
	};
						
	myTextFrame.paragraphs.everyItem().appliedFont = myFont;
	 myTextFrame.lines.everyItem().leading = 32;
	myTextFrame.lines.everyItem().pointSize = 8; 
	 myTextFrame.fit(FitOptions.FRAME_TO_CONTENT);



	

	
	
	alert("Operation Complete!");
}

function myXMLImport(myDocument, myPage){
	var myXMLImportPreferences = myDocument.xmlImportPreferences;
	myXMLImportPreferences.allowTransform = false;
	myXMLImportPreferences.createLinkToXML = false;
	myXMLImportPreferences.ignoreUnmatchedIncoming = false;
	myXMLImportPreferences.ignoreWhitespace = false;
	myXMLImportPreferences.importCALSTables = false;
	myXMLImportPreferences.importStyle = XMLImportStyles.mergeImport;
	myXMLImportPreferences.importTextIntoTables = false;
	myXMLImportPreferences.importToSelected = false;
	myXMLImportPreferences.removeUnmatchedExisting = false;
	myXMLImportPreferences.repeatTextElements = false;
	var myRoot;

		myRoot = myDocument.importXML(File.openDialog("Choose the linklist.xml file"));
		
}