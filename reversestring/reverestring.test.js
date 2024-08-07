const reverseString = require('./reversestring');

describe('Reverse String', () => {
	it("should be a Function", () => {
    expect(typeof reverseString).toEqual('function');
	});
	
	it("should return a String", () => {
    expect(typeof reverseString("Hello")).toEqual("string");
  });

	it('should return the reversed string', () => {
		expect(reverseString('hello')).toEqual('olleh');
		expect(reverseString('bye')).toEqual('eyb');
		expect(reverseString('wow')).toEqual('wow');
		expect(reverseString('hello world')).toEqual('dlrow olleh');
	});
})