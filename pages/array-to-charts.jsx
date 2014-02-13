var data = {
  "ph": 210, // page height for better handling
  "pw": 297, // page width for better handling
  "contents": [
    'Non Linear Narrative', 'What is it?',
    'Viele Jahre später sollte der Oberst Aureliano Buendia sich vor dem Erschießungskommando an jenen fernen Nachmittag erinnern, an dem sein Vater ihn mitnahm, um das Eis kennenzulernen.\rGabriel García Márquez, Hundert Jahre Einsamkeit', 'Film und Literatur',
    'src="assets/images/about/twelve_monkeys.jpg"', 'src="assets/images/about/donnie_darko.jpg"',
    'src="assets/images/about/kill_bill.jpg"', 'Art',
    'src="assets/images/about/actually.png" ', 'Learning',
    'Choose Your Own Adventure', 'Game',
    'Models', 'Rome',
    'src="assets/images/about/rome.png"', 'Tree',
    'src="assets/images/about/tree.png"', 'Node',
    'src="assets/images/about/node.png"', 'Branch',
    'src="assets/images/about/branch.png", alt="branch"', 'src="assets/images/slides/slides-01.png"',
    'src="assets/images/slides/slides-02.png"', 'src="assets/images/slides/slides-05.png"',
    'src="assets/images/slides/slides-03.png"', 'src="assets/images/slides/slides-04.png"',
    'src="assets/images/slides/slides-05.png"', 'src="assets/images/slides/slides-06.png"',
    'src="assets/images/slides/slides-07.png"', 'src="assets/images/slides/slides-08.png"',
    'src="assets/images/slides/slides-09.png"', 'src="assets/images/slides/slides-10.png"',
    'Storyline', 'Software',
    'Modul Input', 'Author',
    'Modul Output', 'Nodejs Express\r(MongoDB / SQL)\rJade Stylus || Bootstrap D3 || Bower || Grunt',
    'Danke.'
  ]
};


var run = function (d) {
  var doc = app.documents.add({
    documentPreferences: {
      facingPages: false,
      pageHeight: d.ph,
      pageWidth: d.pw
    }
  });

  if (doc === null) {
    return;
  } else {
    var p1 = doc.paragraphStyles.add({
      justification: Justification.CENTER_ALIGN
    });

    for (var i = 0; i < d.contents.length; i++) {
      var pg = doc.pages.add();
      var tf = pg.textFrames.add({
        contents: d.contents[i],
        geometricBounds: [23, 23, d.ph - 23, d.pw - 23],
        textFramePreferences: {
          verticalJustification: VerticalJustification.CENTER_ALIGN
        }
      });
      tf.paragraphs.everyItem()
        .appliedParagraphStyle = p1;
    }

  }
};

run(data);