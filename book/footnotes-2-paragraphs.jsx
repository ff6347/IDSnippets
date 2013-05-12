// footnotes-2-paragraphs.jsx
// Copyright (c)  2012
// Fabian "fabiantheblind" Morón Zirfas
// Permission is hereby granted, free of charge, to any
// person obtaining a copy of this software and associated
// documentation files (the "Software"), to deal in the Software
// without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense,
// and/or sell copies of the Software, and to  permit persons to
// whom the Software is furnished to do so, subject to
// the following conditions:
// The above copyright notice and this permission notice
// shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF  CONTRACT,
// TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTIO
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// see also http://www.opensource.org/licenses/mit-license.php
//
// footnote_to_paragprahs();

#include 'Debugger.jsx';
var deeBug = new Debugger(true,"DEbug endnote_to_paragraph","This is a debug version","Debug endnote_to_paragraph");

endnote_to_paragraph();
deeBug.write_infos();

function endnote_to_paragraph () {
    // this is a check if there is a book
    // in our case useless but usefull if this part gets extracted
    if(app.books.length < 1) {
        alert("you need at least one book");
        return;
    }
    if(app.books.length > 1) {
        alert("Please open only one book");
        return;
    }
    var aBook = app.books.item(0);
    if(aBook.bookContents.length < 1) {
        alert("Your book has no documents");
        return;
    }
    var notes = [];
    for(var i = 0; i < aBook.bookContents.length; i++) {
        var aDoc = app.open(aBook.bookContents[i].fullName);
        for (var j = 0;j < aDoc.hyperlinks.length;j++) {
          var oneLink = aDoc.hyperlinks[j];
          var note = oneLink.toString();
          var page = oneLink.destination.destinationText.parentTextFrames[0].parentPage.name;
          var name = oneLink.name.toString();
          var source = oneLink.source.sourceText.contents;
          notes.push({
            note:note,
            page:page,
            name:name,
            source:source,
            delim:"----------"
          });
        deeBug.addLineToInfo(
          note + "\n" +
          "The destination "+ page + "\n" +
          "The name "+ name + "\n" +
          "The number "+ source + "\n" + 
          "---------------"
          );
        }// end j loop
        aDoc.close();
      } // end i loop
      // alert("res\n" + notes.toSource().split(",").join("\n"));

}

function footnote_to_paragprahs() {

    // this is a check if there is a book
    // in our case useless but usefull if this part gets extracted
    if(app.books.length < 1) {
        alert("you need at least one book");
        return;
    }
    if(app.books.length > 1) {
        alert("Please open only one book");
        return;
    }
    var aBook = app.books.item(0);
    if(aBook.bookContents.length < 1) {
        alert("Your book has no documents");
        return;
    }
    var notes = [];
    for(var i = 0; i < aBook.bookContents.length; i++) {
        var aDoc = app.open(aBook.bookContents[i].fullName);
        var stories = find_stories(aDoc);
        for(var j = 0; j < stories.length; j++) {
            if(stories[j].footnotes.length > 0) {
                var footn = stories[j].footnotes;
                for(var k = 0; k < footn.length; k++) {
                    notes.push({
                        note:footn[k].contents,
                        page:findPage(footn[k].insertionPoints[0]).name
                    });
                }// end K loop
            }// endif stories footnote length
        }// end J loop
        aDoc.close();
    }//end I loop
    // alert(notes.join("\n"));
    add_new_doc_to_book(aBook, notes);
}


function add_new_doc_to_book(theBook, theNotes) {
    var resDoc = app.documents.add();
    // alert((theBook.filePath) + "/result.indd");
    // return;
    // resDoc.save((theBook.filePath) + "/");
    var resframe = resDoc.pages.item(0).textFrames.add({geometricBounds:[0,0,100,100]});
    // alert(theNotes[0].paragraphs[0].contents);
    for(var i = 0; i < theNotes.length;i++){
    resframe.insertionPoints[-1].contents = (i+1).toString()+ " Page: " + theNotes[i].page + " Note: "+ theNotes[i].note +"\r";

    }
}


function find_stories(doc) {
    var array = [];
    // no selection: return all stories
    if(app.selection.length === 0) {
        return doc.stories.everyItem().getElements();
    } else {
        try {

            app.selection[0].parentStory;
            return [app.selection[0].parentStory];
        } catch(e) {
            alert("Invalid selection", "Convert footnotes", true);
            exit();
        }
    }
}

// http://forums.adobe.com/thread/615381
function findPage(theObj) {
     if (theObj.hasOwnProperty("baseline")) {
          theObj = theObj.parentTextFrames[0];
     }
     while (theObj !== null) {
          if (theObj.hasOwnProperty ("parentPage")) return theObj.parentPage;
          var whatIsIt = theObj.constructor;
          switch (whatIsIt) {
               case Page : return theObj;
               case Character : theObj = theObj.parentTextFrames[0]; break;
               // case Footnote :;
               // drop through
               case Cell : theObj = theObj.insertionPoints[0].parentTextFrames[0]; break;
               case Note : theObj = theObj.storyOffset; break;
               case Application : return null;
          }
          if (theObj === null) return null;
          theObj = theObj.parent;
     }
     return theObj;
} // end findPage