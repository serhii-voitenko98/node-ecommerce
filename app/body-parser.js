const urlEncoded = function() {
    return function(req, res, next) {
        const body = [];

        req.on('data', function(chunk) {
            body.push(chunk);
        });

        req.on('end', function() {
            req.body = Buffer.concat(body).toString();
            next();
        });
    }
}

module.exports = urlEncoded;