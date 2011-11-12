for(var i = 0; i < app.documents.length;i++){
// if(app.selection.length > 1){
var myFile = File("~/Desktop/export/myTest" + i +".pdf");
var myDoc = app.documents.item(i);
var myPage = myDoc.pages.item(0);
// var myGroup = myPage.groups.add(app.selection);
myDoc.exportFile(ExportFormat.PDF_TYPE, myFile, false);
// app.activeDocument.undo();
// }else{
// app.selection[0].exportFile(ExportFormat.JPG, myFile, false);
// }
}