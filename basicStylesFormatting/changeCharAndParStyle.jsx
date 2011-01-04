var myDocument = app.activeDocument;

myChStyles = myDocument.characterStyles;
for (i = 1; i < myChStyles.length; i++)
 {
    myChStyle = myChStyles[i];
    myChStyle.appliedFont = "Arial";
}

myParStyles = myDocument.paragraphStyles;
for (j = 2; j < myDocument.paragraphStyles.length; j++)
 {
    myParStyles = myDocument.paragraphStyles[j];
    myParStyles.appliedFont = "Arial";
}

alert("Operation complete!");