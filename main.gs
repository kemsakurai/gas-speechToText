function doGet() {
  var template = HtmlService.createTemplateFromFile('index.html').evaluate();
  template.setSandboxMode(HtmlService.SandboxMode.IFRAME);
  template.setTitle('Speech to text');
  return template;
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function exportToGoogleDocument(data) {
  // ドキュメント作成、contentsを書き込む
  var document = DocumentApp.create(data.documentName);
  console.log(data);
  for(var i = 0; i< data.notes.length; i++) {
    var body = document.getBody();
    var note = data.notes[i];
    // Append a document header paragraph.
    var header = body.appendParagraph(note.heading);
    header.setHeading(DocumentApp.ParagraphHeading.HEADING3);
    // Append a regular paragraph.
    body.appendParagraph(note.content);
  }
  //作成したドキュメントURLを取得
  var documentUrl = document.getUrl();
  return documentUrl;
}
