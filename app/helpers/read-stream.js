exports.getReadStreamData = (readStream, cb, type = 'string') => {
    const chunks = [];

    readStream.on('data', chunk => {
        chunks.push(chunk);
    });

    readStream.on('end', () => {
        if (chunks.length) {
            let buffer;

            if (type.toLowerCase() === 'json') {
                buffer = JSON.parse(Buffer.concat(chunks).toString());
            } else {
                buffer = Buffer.concat(chunks).toString();
            }

            return cb(null, buffer);
        }

        cb(new Error('File is empty'), null);
    });
};
