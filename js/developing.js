var testFolder = "developing";
var fs = require("fs");

fs.readdir(testFolder, function(error, filelist) {
	console.log(filelist);
});
