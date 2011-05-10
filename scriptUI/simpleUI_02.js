#targetengine "mysession"
#target indesign

main();

function main(){
	var w = buildUI();
	w.show();
	
	
}


function buildUI(){

//var script_dir = find_script_dir();
// var myicon=script_dir+"/"+"folder-edit.png";
var w = new Window ("palette", "Test", undefined, {closeButton: true});
w.alignChildren = "left";
// var advanced = w.add("tabbedpanel");
var tpanel = w.add ("tabbedpanel");
tpanel.alignChildren = ["fill", "fill"];
tpanel.preferredSize = [350,300];
// var f = File (myicon);
var opt = tpanel.add ("tab", undefined, "Basic");
var adv = tpanel.add ("tab", undefined, "Advanced");

opt.alignChildren = "fill";
var opzioni = opt.add ("panel", undefined, "Option");
opzioni.alignment=["fill","top"];
var group1 = opzioni.add ("group");
group1.alignment=["fill","center"];
var myicon= group1.add ("button", undefined, "Save", {name: "toolbutton"});
 myicon.alignment=["right","center"];


// var btnsRes = "{btn_ok: Button { text:'Export',bounds:[10,10,20,20],name:'Ok!' }, "+
// "btn_cnc: Button { text:'Import',bounds:[10,10,20,20],name:''Cancel!}}";

// w.btns = w.add(btnsRes);


var buttons = w.add ("group");
 btn_ok=buttons.add ("button", undefined, "Nothing", {name: "ok"});
 btn_cnc=buttons.add ("button", undefined, "Exit!",{name: "cancel"});

myicon.onClick = function () {
   
var myfilecsv=File.saveDialog("Scegli nome del file csv");
myText.text=myfilecsv.fsName;
myTextFilePath=myfilecsv.fsName;
myTextFile=File(myTextFilePath);
return false
}

btn_cnc.onClick=function() {
    w.close();   
    }

return w;
}