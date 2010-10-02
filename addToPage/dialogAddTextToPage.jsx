// dialogAddTextToPage.jsx
// written by fabiantheblind

var a_dialog = app.dialogs.add({name:"InputText"});

with (a_dialog) {

		with (dialogColumns.add() ) {
			staticTexts.add( {staticLabel: "Input:"} );
			}
		with (dialogColumns.add() ){
				var text_edit_box = textEditboxes.add({editContents: "Add some text in here", minWidth : 300});
	
}
}
if (a_dialog.show() == false) {
	a_dialog.destroy();
} else {
	// erzeugt eine neue Seite
	var myPage = app.activeDocument.pages.add();
	var myTextFrame = myPage.textFrames.add();
	with(myTextFrame){
		geometricBounds=[100,100,200,200];
		contents =text_edit_box.editContents;

	}
	

}