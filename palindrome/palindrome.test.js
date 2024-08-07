const palindrome = require('./palindrome');

describe('Palindrome', () => { 
	it('should be a function', () => { 
		expect(typeof palindrome).toBe('function');
	});
	it("should return a boolean", () => {
    expect(typeof palindrome('hello')).toBe("boolean");
	});
	it("should return true if its a Palindrome", () => {
    expect(palindrome('kayak')).toBeTruthy();
    expect(palindrome('rotator')).toBeTruthy();
    expect(palindrome('wow')).toBeTruthy();	
	});
	it("should return false if its not a Palindrome", () => {
    expect(palindrome("hello")).toBeFalsy();
    expect(palindrome("world")).toBeFalsy();
    expect(palindrome("bye")).toBeFalsy();
	});
	it("should return false if it includes spaces", () => {
    expect(palindrome(" wow")).toBeFalsy();
  });
});