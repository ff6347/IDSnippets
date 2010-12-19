// written by fabianthelbind
// http://www.the-moron.net
// remove charstyle in parstyle from paragraphs
var doc = app.activeDocument;

for(var i = 0; i<doc.pages.length; i++){
    
    var p = doc.pages.item(i);
    for(var j =0;j < p.textFrames.length; j++){
        
        var t = p.textFrames.item(j);
        for(var k = 0; k < t.paragraphs.length; k++){
            var par = t.paragraphs.item(k);
            //alert(par.appliedParagraphStyle.name);
                if(par.appliedParagraphStyle.name == "h5"){
			
			for(var l =0; l < par.characters.length; l ++ ){
				c = par.characters.item(l);
				if(c.appliedCharacterStyle.name == "endnote_inText"){
					c.appliedCharacterStyle = doc.characterStyles.item(0);
	
				}
				
			}


                    }
            
            }
        }
    }

alert("done");