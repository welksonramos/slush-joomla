/*
 * slush-joomla
 * https://github.com/welksonramos/slush-joomla
 *
 * Copyright (c) 2015, Welkson Ramos
 * Licensed under the MIT license.
 */

 'use strict';
 var gulp = require('gulp'),
 install = require('gulp-install'),
 conflict = require('gulp-conflict'),
 template = require('gulp-template'),
 inquirer = require('inquirer');

 function format(string){
 	var username = string.toLowerCase();
 	return username.replace(/\s/g, '');
 }

var defaults = (function () {
var homeDir = process.env.Home || process.env.HOMEPATH || process.env.USERPROFILE,
		workingDirName = process.cwd().split('/').pop().split('\\').pop(),
		osUserName = homeDir && homeDir.split('/').pop() || 'root',
		configFile = homeDir + '/.gitconfig',
		user = {};
		if (require('fs').existsSync(configFile)) {
			user = require('iniparser').parseSync(configFile).user;
}
return {
	templateName: workingDirName,
	username: format(user.name) || osUserName,
	authorEmail: user.email || ''
};
})();

 gulp.task('default', function (done) {

 	var prompts = [
 	{ type:'input', name: 'projectName', message: 'Project name', default: defaults.templateName },
 	{ type:'input', name:'projectDescription', message:'Description' },
 	{	type:'input',	name:'projectVersion', message:'Version', default:'1.0.0' },
 	{	type:'input',	name:'creationDate', message:'Creation Date' },
 	{	type:'input', name:'authorName', message:'Author Name', default: defaults.username },
 	{	type:'input',	name:'authorEmail', message:'Author E-mail', default: defaults.authorEmail },
 	{	type:'confirm', name:'moveon', message:'Continue?' }
 	];

 	inquirer.prompt(prompts, function (answers) {
 		if (!answers.moveon) {
 			return done();
 		}

 		gulp.src(__dirname + '/templates/**')
 		.pipe(template(answers))
 		.pipe(conflict('./'))
 		.pipe(gulp.dest('./'))
 		.pipe(install())
 		.on('finish', function () {
 			done();
 		})
 		.resume();
 	});
 });
