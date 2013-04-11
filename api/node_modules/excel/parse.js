var parseXlsx = require('./excelParser.js');

parseXlsx('/Users/tdixon/Desktop/Test.xlsx', function(data) {
	console.log(data);
});