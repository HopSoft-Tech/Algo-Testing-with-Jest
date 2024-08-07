const sum = require('./sum');

// First with the Test Method, Put a Description of what you want to
// test. Then the callback function. with the expect() and attach the expected value.	
test("Adds 1 + 2 to equal 3", () => {
	expect(sum(1, 2)).toEqual(3);
});