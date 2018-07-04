'use strict';

// Import modules
const prompt = require('prompt');
const clear = require('clear');
const colors = require('colors/safe');
const createFile = require('./create-file.js');

// Clear console
clear();

// Fields Validation
var schema = {
	properties: {
		fileName:{
			description: colors.yellow('File title?'),
			type: 'string',
			require: true			
		},
		fileContent:{
			description: colors.yellow('Insert file content?'),
			type: 'string',
			require: true
		}
	}
}

// Change default colors
prompt.message = colors.green(">>");

// Start prompt
prompt.start();

// Questions Form
var myfile = function(){
	prompt.get(schema, function(err, result){
		let fileName, fileContent;

		//console.log(result);

		if(err){
			console.log(err);
		}else{
			fileName = result.fileName;
			fileContent = result.fileContent;

			createFile(fileName, fileContent);

		}
	});
};

module.exports = myfile;