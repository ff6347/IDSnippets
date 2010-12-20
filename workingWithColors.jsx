// basic javascript snippets for indesign cs 4
// written by fabiantheblind

// first of all open basicDoc.idml or use script buildDocument.jsx
// to build the doc we are using

//this runs the function
main();
// this is the function
function main(){
// setup some variables
var theDoc = app.activeDocument; // active doc
var thePage = theDoc.pages.item(0); // first page
var theTextFrame = thePage.textFrames.item(0); // the one textframe that is there


// now we can loop thru the text
for(var i = 0;i < theTextFrame.words.length; i++){

	// InDesign Scripting can't build colors without making a swatch
	// so we use the function myColorAdd to add swatches that we can assign.
	// this makes a color for each word
	
	var cVal = new Array();
	cVal[0] = Math.random()*100;
	cVal[1] = Math.random()*100;
	cVal[2] = Math.random()*100;
	cVal[3] = Math.random()*100;
	
	var theColor = myColorAdd(theDoc, "Color"+i, ColorModel.PROCESS, [cVal[0],cVal[1],cVal[2],cVal[3]]);
	// the next line loops thru all characters in the text
	theTextFrame.words.item(i).fillColor = theColor;
	}
}


// found on http://bit.ly/h5EobK indisnip.wordpress.com ->
// how to apply:

// add CMYK color
//myColorAdd(app.activeDocument, "My Custom Color", ColorModel.PROCESS, [80,50,30,10]);

// add RGB color
//myColorAdd(app.activeDocument, "My Custom Color", ColorModel.PROCESS, [33,66,99]);

// add HEX color
//myColorAdd(app.activeDocument, "My Custom Color", ColorModel.PROCESS, "ABCDEF");

// add color directly
// add CMYK color to document
// and asign it to selected object
//app.selection[0].fillColor = myColorAdd(app.activeDocument, "My Custom Color", ColorModel.PROCESS, [80,50,30,10]);

function myColorAdd(myDocument, myColorName, myColorModel, myColorValue){
    if(myColorValue instanceof Array == false){
        myColorValue = [(parseInt(myColorValue, 16) >> 16 ) & 0xff, (parseInt(myColorValue, 16) >> 8 ) & 0xff, parseInt(myColorValue, 16 ) & 0xff ];
        myColorSpace = ColorSpace.RGB;
    }else{
        if(myColorValue.length == 3)
          myColorSpace = ColorSpace.RGB;
        else
          myColorSpace = ColorSpace.CMYK;
    }
    try{
        myColor = myDocument.colors.item(myColorName);
        myName = myColor.name;
    }
    catch (myError){
        myColor = myDocument.colors.add();
        myColor.properties = {name:myColorName, model:myColorModel, space:myColorSpace ,colorValue:myColorValue};
    }
    return myColor;
}