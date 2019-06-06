var fs = require ('fs');
var NodeXls = require('node-xls');
var data = [{
    foo: "aaa",
    stux: new Date(),
    boom: "boom"
},{
    foo: "bbb",
    stux: new Date(),
    boom: "boom again"
}]
var tool = new NodeXls();
// columns will be ordered by ["stux", "foo", "boom"]; column "boom" will be named "hello"
var xls = tool.json2xls(data, {order:["stux", "foo", "boom"], fieldMap: {boom: "hello"}}); 
fs.writeFileSync('output.xlsx',xls, 'binary');