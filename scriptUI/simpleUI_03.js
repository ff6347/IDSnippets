#targetengine "bruhaha"  
var ad = app.activeDocument;  
var tex =ad.textFrames[0].contents;  

function haupt(){  
	var b = new Window("palette");  
	b.texd = b.add('edittext');  
	b.texd.text = tex; 
	b.texd.size = [200,20]; 
	b.btns = b.add("group"); 
	b.btns.orientation = "row"; 
	b.ok2 = b.btns.add("button", undefined, "aktualisieren");  
	b.ok = b.btns.add("button", undefined, "fertig");  
	b.ok.onClick = function () {  
		b.close();  
	}  
	b.ok2.onClick = function () {   
			ad.textFrames[0].contents =b.texd.text;   
	}  
	b.show();  
}  
haupt();