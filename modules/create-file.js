'use strict';

const fs = require('fs');

var createFile = function(name,content){

	fs.writeFile(name+'.txt',content, function(err){
		if(err){
			throw err;
		}else{
			console.log('File created =)!');
			/*fs.readFile('file.txt', 'utf8', function(err,data){
				if(err){
					throw err;
				}else{
					console.log(data);
				}
			});*/
		}
	});	

};

module.exports = createFile;