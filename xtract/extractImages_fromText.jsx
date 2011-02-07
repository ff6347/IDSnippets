// extractImages_fromText.jsx

// this script extracts image references from text
// using markdown syntaximage reference  within ## ## (this should be replaced)
// in markdown ## means <h2>

// but still right now it is like this:
// ##![I'm the image subtext, i will be placed](myFile.jpg)##

// Copyright (C) 2011 Fabian "fabiantheblind" Morón Zirfas
// http://www.the-moron.net
// info [at] the - moron . net

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/.

main();
function main(){


	var newLocation = Folder.selectDialog("Select the image folder");
	var thePath = newLocation;
	var theFileType = "*.jpg";
	var allImages = thePath.getFiles(theFileType);
	var tf = newLocation.fsName;
	var doc = app.activeDocument;


	extract(doc);
	 placefile(doc,allImages)
}


function placefile(doc,allImages){
	var findGrepPref  = app.findGrepPreferences;
	var chngGrepPref = app.changeGrepPreferences;
	var findTXTPref  = app.findTextPreferences;
	var chngTXTPref = app.changeTextPreferences;
	app.loadFindChangeQuery ("FFF_filename", SearchModes.grepSearch);
	var result = doc.findGrep(); 
	
	for (var k = result.length-1; k >= 0; k--){

		var fnText = result[k].contents;
		var ip = result[k].insertionPoints[0];
		var pp = ip.parentTextFrames[0].parent;
		
		var target = doc.pages.item(pp.name).rectangles.add()//pp.textFrames.add();//
		fnText =fnText.replace(/\(/g,"");
		fnText =fnText.replace(/\)/g,"");
		target.label = fnText;
		target.geometricBounds = [0,0,100,100];
		
		for(m = 0; m < allImages.length;m++){

			if(allImages[m].name.match(target.label)){
			target.place(allImages[m]);
			target.fit(FitOptions.CONTENT_TO_FRAME);
			break;
			}
		}

	}

	
}
function extract(doc){
 var findGrepPref  = app.findGrepPreferences;
 var chngGrepPref = app.changeGrepPreferences;
 var findTXTPref  = app.findTextPreferences;
 var chngTXTPref = app.changeTextPreferences;
 app.loadFindChangeQuery ("FFF_xtrct_img", SearchModes.grepSearch);

 var result = doc.findGrep(); 

// run thru all results
for (var k = result.length-1; k >= 0; k--){
	var fnText = result[k].contents;
	var ip = result[k].insertionPoints[0];
	var pp = ip.parentTextFrames[0].parent;
	var target = doc.pages.item(pp.name).textFrames.add()//pp.textFrames.add();//
	target.label = "img subtext fr";
	target.geometricBounds = [0,0,100,100];
	target.contents = fnText;
	result[k].remove();	

}
 doc.changeGrep(); 
// Zurücksetzen der Sucheinstellungen     
app.findGrepPreferences = null; 
// -----------------

}

// unused at the moment
function runTFs(doc){
	
	for(var i = 0 ; i< doc.pages.length; i++){
		var p = doc.pages.item(i);
		for(var j = 0; j < p.textFrames.length; j++){
			var tf =  p.textFrames.item(j);
			tf.select(SelectionOptions.REPLACE_WITH);
			var stry = app.selection[0].parentStory;
			if(tf.label.match("img subtext fr")){
				continue;
			}else{	

			}
		}
		
	}
}
