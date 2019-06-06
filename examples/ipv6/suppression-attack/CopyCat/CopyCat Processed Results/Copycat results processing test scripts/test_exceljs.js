var Excel = require('exceljs');
//const workbook = new Excel.Workbook();


var workbook = new Excel.Workbook();

var sheet1 = workbook.addWorksheet('My Sheet 1');

var sheet2 = workbook.addWorksheet('My Sheet 2');

sheet1.columns = [
    { header: 'Id', key: 'id', width: 10 },
    { header: 'Name', key: 'name', width: 10 },
    { header: 'D.O.B.', key: 'DOB', width: 10, outlineLevel: 1 }
  ];

sheet2.columns = [
   { header: 'Id', key: 'id', width: 10 },
   { header: 'Name', key: 'name', width: 10 },
   { header: 'D.O.B.', key: 'dob', width: 10, outlineLevel: 1 }
  ];

// Add a couple of Rows by key-value, after the last current row, using the column keys
sheet1.addRow({id: 1, name: 1, DOB: new Date()});
sheet1.addRow({id: 2, name: 'Jane Doe', DOB: new Date()});

sheet2.addRow({id: 1, name: 'John Doe', dob: new Date()});
sheet2.addRow({id: 2, name: 'Jane Doe', dob: new Date()});

// Add a row by contiguous Array (assign to columns A, B & C)
sheet1.addRow([3, 'Sam', new Date()]);

// Add a row by sparse Array (assign to columns A, E & I)
// var rowValues = [];
// rowValues[1] = 4;
// rowValues[5] = 'Kyle';
// rowValues[9] = new Date();
// sheet2.addRow(rowValues);

// Add an array of rows
// var rows = [
//   [5,'Bob',new Date()], // row by array
//   {id:6, name: 'Barbara', dob: new Date()}
// ];
// sheet1.addRows(rows);


workbook.xlsx.writeFile('123.xlsx')
    .then(function() {
        // done
    });
 