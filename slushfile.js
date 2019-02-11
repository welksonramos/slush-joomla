/*
 * slush-joomla
 * https://github.com/welksonramos/slush-joomla
 *
 * Copyright (c) 2015-present, Welkson Ramos
 * Licensed under the MIT license.
 */

'use strict';

const gulp = require('gulp');
const install = require('gulp-install');
const conflict = require('gulp-conflict');
const template = require('gulp-template');
const inquirer = require('inquirer');

const format = (string) => {
	let username = string ? string.toLowerCase() : '';
	return username.replace(/\s/g, '');
}

const defaults = (() => {
	let homeDir = process.env.Home || process.env.HOMEPATH || process.env.USERPROFILE;
	let workingDirName = process.cwd().split('/').pop().split('\\').pop();
	let osUserName = homeDir && homeDir.split('/').pop() || 'root';
	let configFile = homeDir + '/.gitconfig';
	let user = {};

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

	let prompts = [
		{ type: 'input', name: 'projectName', message: 'Project name', default: defaults.templateName },
		{ type: 'input', name: 'projectDescription', message: 'Description' },
		{ type: 'input', name: 'projectVersion', message: 'Version', default: '1.0.0' },
		{ type: 'input', name: 'creationDate', message: 'Creation Date' },
		{ type: 'input', name: 'authorName', message: 'Author Name', default: defaults.username },
		{ type: 'input', name: 'authorEmail', message: 'Author E-mail', default: defaults.authorEmail },
		{ type: 'confirm', name: 'moveon', message: 'Continue?' }
	];

	inquirer.prompt(prompts).then(answers => {
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
