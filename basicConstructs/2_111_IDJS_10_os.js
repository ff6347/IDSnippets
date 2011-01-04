/**
 * @author fabiantheblind http://www.the-moron.net info@the-moron.net
 * under CC licence http://creativecommons.org/licenses/by-nc/3.0/de/
 * written for FHP SS 2010 2111 Typo Std Workshop Indesign & JavaScript
 * 
 * all user generated variables & functions begin with "my"
 */
var 	myDocument = app.documents.add();
 		myDocument.pages.add();
var		myString ="";
var		myOS = $.os;
var		myOSSubString = myOS.charAt(0);
    if (myOSSubString == "w" || myOSSubString == "W") {
        myString = "Your Operating System is Windows \n needs to strip of the first 8 character of this string:\n\"files:///files/101/209536_00_N_747ca29.jpg\"\n use the method \"substring(int)\"";
    }
    else {
        myString = "Your Operating System  OS X \n eats this string for lunch:\n\"files:///files/101/209536_00_N_747ca29.jpg\"";
		    }
		
		// calculate the position of the textFrame
var 	myTextFrame = myDocument.pages.item(1).textFrames.add();
var 	myY1 = 0;
var 	myX1 = 0;
var 	myY2 = myDocument.documentPreferences.pageHeight;
var 	myX2 = myDocument.documentPreferences.pageWidth;

		//set the position of the text
		myTextFrame.geometricBounds = [myY1, myX1, myY2, myX2];
		
		if(myString.length>=1){
			
		myTextFrame.contents = myString;

		}

		alert("Operation Complete!");

