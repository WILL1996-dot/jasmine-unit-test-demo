describe("Math Functions", function() {
  it("should add numbers correctly", function() {
    expect(add(2, 3)).toBe(5);
  });

  it("should subtract numbers correctly", function() {
    expect(subtract(5, 3)).toBe(2);
  });

  it("should multiply numbers correctly", function() {
    expect(multiply(4, 5)).toBe(20);
  });

  it("should divide numbers correctly", function() {
    expect(divide(10, 2)).toBe(5);
  });

  it("should return null when dividing by zero", function() {
    expect(divide(10, 0)).toBeNull();
  });

  it("should check if a number is even", function() {
    expect(isEven(4)).toBeTrue();
  });

  it("should greet a user correctly", function() {
    expect(greet("Alice")).toBe("Hello, Alice!");
  });
});
