// addPageName2Page.js
// written by fabiantheblind

// actives Document definieren
var myDoc = app.activeDocument;

// Seiten von document in einer Schleife durchlaufen
for(var i = 0;i < myDoc.pages.length; i = i++){

// zu jeder Seite einen Textframe hinzufügen
	myTextFrame = myDoc.pages.item(i).textFrames.add();
	with(myTextFrame){
	// die geometric bounds werden mit [y1,x1,y2,x2] angegeben
	// y1 x1 sind die linke obere Koordinate
	// y2 x2 sind rechts unten 
		geometricBounds=[100,100,200,200];
	// wir sind immernoch im textFrame und fügen jetzt die
	// seitenzahl der entsprechenden seite als string ein
	var stevensVariable = "füge hier an was du willst als string";

		contents = myDoc.pages.item(i).name.toString() + stevensVariable;
			
			
		
	}

}