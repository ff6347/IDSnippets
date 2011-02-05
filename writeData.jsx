
function main(){
	var d = new Date();
	var str  = "";
	str = str  +"Starting Log file at "+d.toString() +"\n"
	var newLocation = Folder.selectDialog("Select a output folder...");

var fileNameDate = d.getHours() +"-"+d.getMinutes()+"-"+d.getSeconds()+" "+d.getFullYear()+"."+d.getMonth()+"."+d.getDay();
var projName = app.project.file.displayName;
	var fn =   "LOGFILE_"+projName.slice(0, -4) +"_"+ fileNameDate.toString();//+prompt("Enter target file name","compitems");
	var tf = newLocation.fsName;
	var ext = ".txt";
	var txtFile =  new File( tf+"/" + fn + ext );  
	
	
	
	
	
	writeData (txtFile , str  );
}



	function writeData (txtFile , aData )  
	{  
		var out;
	   if( txtFile!='' )  
	   {   
	      //Open the file for writing.   
	      out = txtFile.open( 'e', undefined, undefined );   
	   }  
	   if( out != false )  
	   {     
		   txtFile.seek(0);
	      txtFile.writeln( aData );         
	      txtFile.close();   
	    // txtFile.execute();  
	   }
	}