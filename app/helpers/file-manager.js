const fs = require('fs');
const { getReadStreamData } = require('../helpers/read-stream');

module.exports = class FileManager {
	static writeFile(path, data, cb = null) {
		const writeStream = fs.createWriteStream(path);
		writeStream.write(JSON.stringify(data));
		writeStream.end();

		cb && cb(null, data);
	}

	static readFile(path, cb) {
		const readStream = fs.createReadStream(path);

		getReadStreamData(readStream, (error, data) => {
			cb(error, error ? [] : data);
		}, 'json');
	}
}
