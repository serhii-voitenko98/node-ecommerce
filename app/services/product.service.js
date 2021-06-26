const { db } = require('../helpers/database');

module.exports = class ProductService {
	static async fetchAll() {
		return await db['Product'].findAll();
	}

	static async getById(id) {
		return await db['Product'].findByPk(id);
	}

	static async save(data) {
		return await db['Product'].create(data);
	}

	static async remove(id) {
		return await ProductService.getById(id).then(product => product.destroy());
	}

	static async update(id, data) {
		return await ProductService.getById(id).then(product => Object.assign(product, data) && product.save())
	}
}
