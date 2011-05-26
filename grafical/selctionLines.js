var sel = app.selection;

//alert(sel[0]);



try{
for(var i = 0; i < sel[0].lines.length;i++){
	
	var val =  Math.sin((i/10))*12 ;
	
	val = 12 - i;
	if(val < 1){
		val = 1;
		
	}

	var c = sel[0].lines[i].pointSize =val + 13;
	
	
	
	}

}catch(error){
	
	
	alert("You need to select some text.");
}