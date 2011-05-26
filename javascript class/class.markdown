How to get moree Objekt Orientation in my Code?  
a Testclass:  
[javascript]  
	// call main function  
	main();  
	  
	  
	// the main function  
	function main (){  
	  
	  
		// create an object  
		var aObject = new myObject(0,5);  
		  
		// show the second value  
		alert(aObject.value2);     
		  
		// change the second value  
		aObject.value2 = aObject.calc(aObject.value2);  
		  
		// show the second value  
		alert(aObject.value2);  
		  
		//  change the first value  
		aObject.value1 = 10;  
		  
		// show the first  
		alert(aObject.value1);  
		  
		// change the first  
		aObject.value1 = aObject.calc(aObject.value1);  
		  
		// show the first value  
		alert(aObject.value1);  
		  
	    	// try 2 call the first value directly 
		alert(this.value1);  
		// that doesn't work	  
		  
		// create another object  
		var newObject = new myObject(5,23);  
		  
		// call the first value of the new object  
		alert(newObject.value1);  
	  
		  
	 }  
	  
	  
	// the class   
	function myObject(x,y){  
	  
	// the values of the class  
	this.value1 = x;  
	this.value2 = y;  
	  
	// calculate something and give it back  
	this.calc = function(val){  
			  
		val = val * 5 + 12;	  
		  
		return val;  
		}  
	  
	  
	}  
	// END  
[/javascript]

Also the use of global variables can be usefull. So I don't have to pass thru vlaues to  each function 
  
[javascript]

	// create a global variable  
	this.myGlobalVariable = 20;  

	// call main function  
	main();  
  
  
	// the main function  
	function main (){  
  
  
	// create an object  
	var aObject = new myObject(0,this.myGlobalVariable);  
	  
	// show the second value  
	alert(aObject.value2);     
	  
	// change the second value  
	aObject.value2 = aObject.calc(aObject.value2);  
	  
	// show the second value  
	alert(aObject.value2);  

	// show the first value  
 	alert(aObject.value1); 
 
	//  set the first value of the object again  
	aObject.value1 = this.myGlobalVariable;  
	  
	// show the first value  
	alert(aObject.value1);  
	  
	// change the first value  
	aObject.value1 = aObject.calc(aObject.value1);  
	  
	// show the first value  
	alert(aObject.value1);  
	  
    	// try 2 call the first value directly 
	alert(this.value1);  
	// that doesn't work	  
	  
	
	// set the globale variable again
	this.myGlobalVariable = 13;  
	
	// create another object  
	var newObject = new myObject(this.myGlobalVariable,23);  
	  
	// call the first value of the new object  
	alert(newObject.value1);  
  
	  
	}  
  
  
	// the class   
	function myObject(x,y){  
  
	// some values  
	this.value1 = x;  
	this.value2 = y;  
  
	// calculate something and give something back  
	this.calc = function(val){  
		  
	val = val * 5 + 12;	  
	  
	return val;  
	}  
  
  
	}
[/javascript]