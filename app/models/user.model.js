module.exports = class User {
	constructor(data) {
		if (!data) return;

		Object.assign(this, data);
	}
}
