// basic javascript snippets for indesign cs 4
// written by fabiantheblind

// first of all open basicDoc.idml or use script buildDocument.jsx
// to build the doc we are using
// select some text


main();
function main(){
var theDoc = app.activeDocument;
// Create a list of fonts
var list_of_font = app.fonts.everyItem().name;

// Make dialog box for selecting the font
var font_dialog = app.dialogs.add({name:"Select a font"});
with(font_dialog.dialogColumns.add()) {
	with(borderPanels.add()) {
		with(dialogColumns.add()) {
			staticTexts.add({staticLabel:"fonts:"});
		}
		with(dialogColumns.add()) {
			var selected_font = dropdowns.add({stringList:list_of_font, selectedIndex:0});
		}
	}
}
font_dialog.show();


for (var i = 0; i<app.selection.length; i++) {
	 	

			var myChars = app.selection[i].characters.everyItem();


			myChars.appliedFont =  app.fonts.item(selected_font.selectedIndex);


}
}

 
 