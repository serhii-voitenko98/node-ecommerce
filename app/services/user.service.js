const db = require('../helpers/database');

module.exports = class UserService {
	static async fetchAll() {
		return await db['User'].findAll();
	}
}
