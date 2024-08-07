const hasDuplicateIds = require("./hasduplicateids");

describe("DOM Tree has Duplicate IDs", () => {
  // A hook is a function that is called before each test
  // Using hooks to test functions
  let root;
	beforeEach(() => {
		console.log("before each test runs...");
    // Create mock Elements
    root = document.createElement("div");
    const child1 = document.createElement("div");
    const child2 = document.createElement("div");

    root.appendChild(child1);
    root.appendChild(child2);
  });
	afterEach(() => {
		console.log("after each test runs...");
		// resets the root after each test
    root = null;
  });
  it("should be a function", () => {
    expect(typeof hasDuplicateIds).toEqual("function");
  });
  it("should return a boolean", () => {
    expect(typeof hasDuplicateIds()).toEqual("boolean");
  });
  it("should return false if no root", () => {
    expect(hasDuplicateIds()).toBeFalsy();
  });
  it("should return true if there are duplicate IDs", () => {
    // Add duplicate ids
    root.id = "root";
    root.children[0].id = "child";
    root.children[1].id = "child";

    expect(hasDuplicateIds(root)).toBeTruthy();
  });

  it("should return false if there are no duplicate IDs", () => {
    // Add ids
    root.id = "root";
    root.children[0].id = "child1";
    root.children[1].id = "child2";

    const result = hasDuplicateIds(root);

    expect(result).toEqual(false);
  });
});
