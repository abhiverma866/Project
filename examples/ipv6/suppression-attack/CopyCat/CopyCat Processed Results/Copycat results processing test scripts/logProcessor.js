/* eslint-disable no-console */
// "use strict";
var fs = require('fs')
var Excel = require('exceljs');


function process_line(line){
  var msgArray = line.split('\t');
    var msgArray2 = msgArray[2].split(' ');
    if(msgArray2[2] == "P"){
        var msgArray3 = msgArray[1].split(':');
        //console.log(msgArray2[5] + " " + msgArray2[6] + " " +  msgArray2[7] + " " + msgArray2[8] + "\n");
        if(msgArray3[1]=="1"){ 
          sheet1.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
        }
        else if(msgArray3[1]=="2"){
          sheet2.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="3"){
          sheet3.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="4"){
          sheet4.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="5"){
          sheet5.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="6"){
          sheet6.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="7"){
          sheet7.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="8"){
          sheet8.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="9"){
          sheet9.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="10"){
          sheet10.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="11"){
          sheet11.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="12"){
          sheet12.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="13"){
          sheet13.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="14"){
          sheet14.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="15"){
          sheet15.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="16"){
          sheet16.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="17"){
          sheet17.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="18"){
          sheet18.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="19"){
          sheet19.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="20"){
          sheet20.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="21"){
          sheet21.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="22"){
          sheet22.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="23"){
          sheet23.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="24"){
          sheet24.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="25"){
          sheet25.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="26"){
          sheet26.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="27"){
          sheet27.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="28"){
          sheet28.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="29"){
          sheet29.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else if(msgArray3[1]=="30"){
          sheet30.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
        else {
          sheet31.addRow({ALL_CPU: msgArray2[5], ALL_LPM: msgArray2[6], ALL_TX: msgArray2[7], ALL_RX: msgArray2[8]});
          
        }
    }
}

try{
var workbook = new Excel.Workbook();

workbook.views = [
  {
    x: 0, y: 0, width: 10000, height: 20000,
    firstSheet: 0, activeTab: 0, visibility: 'visible'
  }
]
var sheet1 = workbook.addWorksheet('BR Node 1');
var sheet2 = workbook.addWorksheet('Node 2');
var sheet3 = workbook.addWorksheet('Node 3');
var sheet4 = workbook.addWorksheet('Node 4');
var sheet5 = workbook.addWorksheet('Node 5');
var sheet6 = workbook.addWorksheet('Node 6');
var sheet7 = workbook.addWorksheet('Node 7');
var sheet8 = workbook.addWorksheet('Node 8');
var sheet9 = workbook.addWorksheet('Node 9');
var sheet10 = workbook.addWorksheet('Node 10');
var sheet11 = workbook.addWorksheet('Node 11');
var sheet12 = workbook.addWorksheet('Node 12');
var sheet13 = workbook.addWorksheet('Node 13');
var sheet14 = workbook.addWorksheet('Node 14');
var sheet15 = workbook.addWorksheet('Node 15');
var sheet16 = workbook.addWorksheet('Node 16');
var sheet17 = workbook.addWorksheet('Node 17');
var sheet18 = workbook.addWorksheet('Node 18');
var sheet19 = workbook.addWorksheet('Node 19');
var sheet20 = workbook.addWorksheet('Node 20');
var sheet21 = workbook.addWorksheet('Node 21');
var sheet22 = workbook.addWorksheet('Node 22');
var sheet23 = workbook.addWorksheet('Node 23');
var sheet24 = workbook.addWorksheet('Node 24');
var sheet25 = workbook.addWorksheet('Node 25');
var sheet26 = workbook.addWorksheet('Node 26');
var sheet27 = workbook.addWorksheet('Node 27');
var sheet28 = workbook.addWorksheet('Node 28');
var sheet29 = workbook.addWorksheet('Node 29');
var sheet30 = workbook.addWorksheet('Node 30');
var sheet31 = workbook.addWorksheet('Node 31');

sheet1.state = "visible";
sheet2.state = "visible";
sheet3.state = "visible";
sheet4.state = "visible";
sheet5.state = "visible";
sheet6.state = "visible";
sheet7.state = "visible";
sheet8.state = "visible";
sheet9.state = "visible";
sheet10.state = "visible";
sheet11.state = "visible";
sheet12.state = "visible";
sheet13.state = "visible";
sheet14.state = "visible";
sheet15.state = "visible";
sheet16.state = "visible";
sheet17.state = "visible";
sheet18.state = "visible";
sheet19.state = "visible";
sheet20.state = "visible";
sheet21.state = "visible";
sheet22.state = "visible";
sheet23.state = "visible";
sheet24.state = "visible";
sheet25.state = "visible";
sheet26.state = "visible";
sheet27.state = "visible";
sheet28.state = "visible";
sheet29.state = "visible";
sheet30.state = "visible";
sheet31.state = "visible";

// var logger = fs.createWriteStream('log.txt', {
//   flags: 'w' // 'a' means appending (old data will be preserved)
// })

sheet1.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet2.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet3.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet4.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet5.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet6.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet7.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet8.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet9.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet10.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet11.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet12.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet13.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet14.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet15.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet16.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet17.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet18.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet19.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet20.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet21.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet22.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet23.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet24.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet25.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet26.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet27.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet28.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
]; 

sheet29.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet30.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

sheet31.columns = [
  //{ header: 'Time', key: 'Time', width: 15 },
  { header: 'ALL_CPU', key: 'ALL_CPU', width: 15 },
  { header: 'ALL_LPM', key: 'ALL_LPM', width: 15 },
  { header: 'ALL_TX', key: 'ALL_TX', width: 15 },
  { header: 'ALL_RX', key: 'ALL_RX', width: 15 },
];

// var lineReader = require('readline').createInterface({
//     input: require('fs').createReadStream('./Logs/serial.log')
// });

var lineReader = require('readline');
instream = fs.createReadStream('./Logs/serial.log');
outstream = new (require('stream'))(); 
rl = lineReader.createInterface(instream, outstream);

// sheet1.addRow({ALL_CPU: 5, ALL_LPM: 6, ALL_TX: 4, ALL_RX: 3});
// sheet1.addRow({ALL_CPU: 5, ALL_LPM: 6, ALL_TX: 4, ALL_RX: 3});

// sheet2.addRow({ALL_CPU: 5, ALL_LPM: 6, ALL_TX: 4, ALL_RX: 3});
// sheet3.addRow({ALL_CPU: 5, ALL_LPM: 6, ALL_TX: 4, ALL_RX: 3});


rl.on('line', function (line) {
   // sheet1.addRow({ALL_CPU: 5, ALL_LPM: 6, ALL_TX: 4, ALL_RX: 3});
   // sheet2.addRow({ALL_CPU: 5, ALL_LPM: 6, ALL_TX: 4, ALL_RX: 3});
   // sheet3.addRow({ALL_CPU: 5, ALL_LPM: 6, ALL_TX: 4, ALL_RX: 3});
    process_line(line);
    
});

rl.on('close', function (line) {
  // console.log(line);
  console.log('done reading file.');
});

workbook.xlsx.writeFile('123.xlsx').then(function() {
    console.log("File has been written !!\n");    
});
}
catch(err){
  console.log("Error enconuntered = " + err + "\n");
}


