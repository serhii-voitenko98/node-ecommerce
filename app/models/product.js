const path = require('path');
const rootDir = require('../helpers/path');
const FileManager = require('../helpers/file-manager');

const pathToFile = path.join(rootDir, 'data', 'products.json');

module.exports = class Product {
    constructor(title, price, description) {
        this.title = title;
        this.price = price;
        this.description = description;
    }

    save() {
        FileManager.readFile(pathToFile, (error, data) => {
            const products = [...data, this].map((product, i) => (product.id = i+1) && product);

            FileManager.writeFile(pathToFile, products);
        });
    }

    static fetchAll(cb) {
        FileManager.readFile(pathToFile, cb);
    }

    static remove(id, cb) {
        FileManager.readFile(pathToFile, (error, data) => {
            const filtered = data.filter(product => product.id != id);

            FileManager.writeFile(pathToFile, filtered, cb);
        });
    }

    static getById(id, cb) {
        FileManager.readFile(pathToFile, (error, data) => {
            const founded = data.find(product => product.id == id);
            cb(error, founded);
        });
    }
}
