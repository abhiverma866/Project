var fs = require('fs')
var Excel = require('exceljs');

var workbook = new Excel.Workbook();

workbook.views = [
  {
    x: 0, y: 0, width: 10000, height: 20000,
    firstSheet: 0, activeTab: 0, visibility: 'visible'
  }
]


var sheet1 = workbook.addWorksheet('BR Node 1');
var sheet2 = workbook.addWorksheet('Node 2');

sheet1.state = "visible";
sheet2.state = "visible";


// construct a streaming XLSX workbook writer with styles and shared strings
var options = {
    filename: './streamed-workbook.xlsx',
    useStyles: true,
    useSharedStrings: true
};
var WorkbookWriter = new Excel.stream.xlsx.WorkbookWriter(options);

// create a new sheet writer with pageSetup settings for fit-to-page
var worksheetWriter1 = workbookWriter.addSheet('BR Node 1', {
    pageSetup:{fitToPage: true, fitToHeight: 5, fitToWidth: 7}
  });
var worksheetWriter2 = workbookWriter.addSheet('Node 2', {
    pageSetup:{fitToPage: true, fitToHeight: 5, fitToWidth: 7}
  });





