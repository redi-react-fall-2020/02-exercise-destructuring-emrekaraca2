const core = require("./index");

describe("0) returnTheString()", function () {
  it("Given a string, return the string", function () {
    var string = "Hello World!";
    var expected = "Hello World!";
    var actual = core.returnTheString(string);

    expect(actual).toEqual(expected);
  });
});

describe("1) returnFirstElement()", function () {
  it("Given an array with two elements, return the first element of the array. Use destructuring to only receive the first element in the function arguments", function () {
    var array = [1, 2, 3];
    var expected = 1
    var actual = core.returnFirstElement(array);

    expect(actual).toEqual(expected);
  });
});

describe("2) returnAgeProperty()", function () {
  it("Given an object with the properties 'name', 'age', 'city', return the age. Use destructuring to only receive the age property in the function arguments", function () {
    var object = {name: "Max", age: 30, city: "Berlin"};
    var expected = 30;
    var actual = core.returnAgeProperty(object);

    expect(actual).toEqual(expected);
  });
});