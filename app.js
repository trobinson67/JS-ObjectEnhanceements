function makePerson(first, last, age) {
	return {
		first,
		last,
		age,
		isLive: true,
	};
}

const mathStuff = {
	x: 200,
	add: function (a, b) {
		return a + b;
	},
};

const mathStuff2 = {
	x: 200,
	add(a, b) {
		return a + b;
	},
	square(a) {
		return a * a;
	},
};

const createInstructor = (firstname, lastname) => {
	return {
		firstname,
		lastname,
	};
};

let favNum = 42;
let instructor = {
	firstName: "Colt",
	[favNum]: "Thats my favorite!",
};

let instructor2 = {
	firstname: "Colt",
	sayHi() {
		return "Hi!";
	},
	sayBye() {
		return this.firstname + "says bye!";
	},
};

function createAnimal(species, action, noise) {
	return {
		species,
		[action]() {
			return noise;
		},
	};
}
