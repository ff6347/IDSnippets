// load the conent of a textfile into indesign
// written by fabiantheblind
// http://www.the-moron.net

load_txt();
function load_txt(){
var textFile = File.openDialog("Select a text file to import.", "*.csv",false);
		if (textFile != null) {
         //l.source.name = "Z-Tags "+ textFile.name;
			var textLines = new Array();
			textFile.open("r", "TEXT", "????");

			while (!textFile.eof){
            textLines[textLines.length] = textFile.readln();  
            }
	textFile.close();
        }

        if(!textLines){
            return;
            }else{
	
	alert(textLines);
	}

}