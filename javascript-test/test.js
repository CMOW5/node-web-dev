
//var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');

var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();
var hour = currentDate.getHours();
var min = currentDate.getMinutes();
var sec = currentDate.getSeconds();
console.log("\n" + day + "/" + month + "/" + year  
				 + " " + hour + ":" + min + ":" + sec + "\n");
