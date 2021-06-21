const fs = require('fs');
const path = require('path');
const rootDir = require('../helpers/path');
const { getReadStreamData } = require('../helpers/read-stream');

const pathToFile = path.join(rootDir, 'data', 'products.json');

module.exports = class Product {
    constructor(title, price, description) {
        this.title = title;
        this.price = price;
        this.description = description;
    }

    save() {
        Product.#readFile((error, data) => {
            const products = [...data, this].map((product, i) => (product.id = i+1) && product);

            Product.#writeFile(error, products);
        });
    }

    static fetchAll(cb) {
        Product.#readFile(cb);
    }

    static remove(id, cb) {
        Product.#readFile((error, data) => {
            const filtered = data.filter(product => product.id != id);

            Product.#writeFile(error, filtered, cb);
        });
    }

    static getById(id, cb) {
        Product.#readFile((error, data) => {
            const founded = data.find(product => product.id == id);
            cb(error, founded);
        });
    }

    static #writeFile(error, data, cb = null) {
        const writeStream = fs.createWriteStream(pathToFile);
        writeStream.write(JSON.stringify(data));
        writeStream.end();

        error && console.log(error);
        cb && cb(error, error ? [] : data);
    }

    static #readFile(cb) {
        const readStream = fs.createReadStream(pathToFile);

        getReadStreamData(readStream, (error, data) => {
            cb(error, error ? [] : data);
        }, 'json');
    }
}
