main();
function main(){


createParStyles(app.documents.add());

};


function createParStyles (theDoc) {

	var parStyles = {
  		"styles":[ 
      			{"name":"h1" ,"appliedFont":app.fonts.item(0)/* bold */ ,  "pointSize":23},
      			{"name":"h2" , "pointSize":17},
      			{"name":"h3" , "pointSize":16},
      			{"name":"h4" , "pointSize":15},
      			{"name":"h5" , "pointSize":15},
      			{"name":"h6" , "pointSize":15},
      			{"name":"body" ,"appliedFont":app.fonts.item(0) , "pointSize":13,"alignToBaseline":true},
      			{"name":"ul"   , "pointSize":13, "basedOn":theDoc.paragraphStyles.item("body")},
      			{"name":"ol"   ,"pointSize":13, "basedOn":theDoc.paragraphStyles.item("body")},
      			{"name":"blockquote" ,"pointSize":12 ,"leftIndent":5}
      		],
     };



	for(var i in parStyles.styles){
	try{
		theDoc.paragraphStyles.add(parStyles.styles[i]);
		}catch(e){
		alert(e + "\n" + i);
		};
	};
};