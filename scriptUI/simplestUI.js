#targetengine "someting"
var x_data = new Object();	// Store globals in an object
 x_data.scriptName = "simplestUI";

function basic_panel(){

	
	var pal = new Window("palette", {resizeable:true});
	var b = pal.add("button", [10,10,180,30], "Do it!");
	var c = pal.add("button", [10,10,180,30], "Close!");
	
	 b.onClick = function (){

		var doc = app.activeDocument;
		doc.pages.add();
			}

	
	c.onClick = function () {  
		pal.close();  
	}
	
	pal.show();
	
	
}
basic_panel();

