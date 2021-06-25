const db = require('../helpers/database');

module.exports = class UserService {
	static async fetchAll() {
		return await db['User'].findAll();
	}

	static async getById(id) {
		return await db['User'].findByPk(id);
	}

	static async create(data) {
		return await db['User'].create(data);
	}
}
