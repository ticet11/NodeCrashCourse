class Person {
	constructor(name, dob) {
		this.name = name;
		this.dob = dob;
	}

	getAge() {
		const today = new Date();
		const age = today.getFullYear() - this.dob.getFullYear();
		const monthModifier = today.getMonth() - this.dob.getMonth();
		const dayModifier = today.getDay() - this.dob.getDay();

		if (monthModifier > 0) return age;
		if (monthModifier < 0) return age - 1;
		if (monthModifier === 0) {
			if (dayModifier < 0) {
				return age - 1;
			} else {
				return age;
			}
		}
	}

	greeting() {
		const age = this.getAge();
		console.log(`Howdy! My name is ${this.name}. I am ${age} year(s) old.`);
	}
}

module.exports = Person;
