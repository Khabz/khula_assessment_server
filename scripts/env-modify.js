// Check variable name

/**
 * Modify .env file
 *
 * Takes two arguments
 * * Variable name
 * * Variable value
 *
 * Can also add the following options
 * @property [string] _log
 */

const logger = (data, type = 'log') => {
	const log = console;

	if (typeof process.argv[4] === 'undefined') {
		return;
	}

	if (process.argv[4] !== '_log') {
		return;
	}

	switch (type) {
		case 'error':
			log.error(data);
			break;
		case 'info':
			log.info(data);
			break;
		default:
			log.log(data);
			break;
	}
};

if (process.argv.length < 4) {
	let missingVar = 'Both variable name and value are required.';

	if (typeof process.argv[3] === 'undefined') {
		missingVar = 'Variable value is required';
	}

	logger(missingVar);
	return;
}

const name = process.argv[2];
const value = process.argv[3];

// Set .env file path
const envFilePath = `${process.cwd()}/.env`;

const fs = require('fs');
const readline = require('readline');

// Check file exists
if (!fs.existsSync(envFilePath)) {
	logger('.env file not found!', 'error');
	return;
}

// Read file line by line
const readInterface = readline.createInterface({
	input: fs.createReadStream(envFilePath),
	output: process.stdout,
	console: false,
});

const lineStore = [];

const editFile = (line) => {
	// Search for `name` in .env file
	const lineSplit = line.split('=');

	let newLine = line;

	if (lineSplit[0].toLowerCase() === name.toLowerCase()) {
		newLine = `${name}=${value}`;
	}

	lineStore.push(newLine);
};

let currentIndex = 0;

const appendLines = () => {
	if (lineStore.length === 0) {
		logger('There are no lines');
		return;
	}

	const line = lineStore[currentIndex];

	// add a line to a .env file, using appendFile
	fs.appendFile(envFilePath, `\n${line}`, (err) => {
		if (err) throw err;

		const takeName = line.split('=')[0];
		logger(`Value updated for ${takeName}!`);

		if (currentIndex + 1 !== lineStore.length) {
			currentIndex += 1;
			appendLines();
		}
	});
};

const pushToFile = () => {
	fs.writeFile(envFilePath, '', (err) => {
		// throws an error, you could also catch it here
		if (err) throw err;

		// success case, the file was saved
		logger('\n\nFile is empty!\n');

		appendLines();
	});
};

readInterface.on('line', (line) => {
	editFile(line);
});

readInterface.on('close', () => {
	pushToFile();
});
