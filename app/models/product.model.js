module.exports = class Product {
	constructor(data) {
		if (!data) return;

		Object.assign(this, data);
	}
}
