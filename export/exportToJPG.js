// as discussed on http://indisnip.wordpress.com/2010/08/09/export-selection-to-jpeg/
if(app.selection.length > 1){
var myFile = File("~/Desktop/myTest.pdf");
var myDoc = app.documents.item(0);
var myPage = myDoc.pages.item(0);
var myGroup = myPage.groups.add(app.selection);
myDoc.exportFile(ExportFormat.PDF_TYPE, myFile, false);
app.activeDocument.undo();
}else{
app.selection[0].exportFile(ExportFormat.JPG, myFile, false);
}
