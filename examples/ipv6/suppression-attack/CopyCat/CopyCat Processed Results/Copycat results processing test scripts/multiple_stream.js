const Excel = require('exceljs');
const workbook = new Excel.stream.xlsx.WorkbookWriter( { filename: './streamed-workbook.xlsx' } );
const fs = require('fs');
// const filename = "test.xlsx";
const sheetNames = ["sheet1", "sheet2"];

sheetNames.forEach(sheetName => {
    let worksheet = workbook.addWorksheet(sheetName);
    // I believe this needs to be set to show in LibreOffice.
    worksheet.state = 'visible';
    worksheet.columns = [{ header: 'Time', key: 'Time', width: 15 },
        { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
        { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
        { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
        { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
      ];
    worksheet.commit();
});



var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./Logs/serial.log')
});

// sheet1.addRow({ALL_CPU: 5, ALL_LPM: 6, ALL_TX: 4, ALL_RX: 3});
// sheet2.addRow({ALL_CPU: 5, ALL_LPM: 6, ALL_TX: 4, ALL_RX: 3});
// sheet3.addRow({ALL_CPU: 5, ALL_LPM: 6, ALL_TX: 4, ALL_RX: 3});


  lineReader.on('line', function (line) {
    // sheet1.addRow({ALL_CPU: 5, ALL_LPM: 6, ALL_TX: 4, ALL_RX: 3});
    // sheet2.addRow({ALL_CPU: 5, ALL_LPM: 6, ALL_TX: 4, ALL_RX: 3});
    // sheet3.addRow({ALL_CPU: 5, ALL_LPM: 6, ALL_TX: 4, ALL_RX: 3});
  
    var msgArray = line.split('\t');
    var msgArray2 = msgArray[2].split(' ');
    if(msgArray2[2] == "P"){
        var msgArray3 = msgArray[1].split(':');
        //console.log(msgArray2[5] + " " + msgArray2[6] + " " +  msgArray2[7] + " " + msgArray2[8] + "\n");
        if(msgArray3[1]=="1"){
          sheetNames[0].addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]}).commit();
        }
        else if(msgArray3[1]=="2"){
          sheetNames[1].addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]}).commit();
          
        }
    }
});

// sheetNames.forEach(sheetName => {
//     let worksheet = workbook.addWorksheet(sheetName);
//     // I believe this needs to be set to show in LibreOffice.
//     worksheet.state = 'visible';
//     worksheet.columns = [{ header: 'Time', key: 'Time', width: 15 },
//         { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
//         { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
//         { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
//         { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
//       ];
//     worksheet.commit();
// });

workbook.commit()
.then(function() {
    console.log(`Worksheet committed!`);
});