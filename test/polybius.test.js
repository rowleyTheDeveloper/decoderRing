const { expect } = require("chai");
const { polybius } = require("../src/polybius.js");

describe("Polybius Tests Written By Evan", function () {
  describe("Should properly encode messages that translate 'i' or 'j' to '42', and vice versa", function () {
    it("Properly encodes 'i' to '42'", function () {
      const input = "i";
      const expected = "42";
      const actual = polybius("i");
      expect(actual).to.equal(expected);
    });
    it("Properly encodes 'j' to '42'", function () {
      const input = "j";
      const expected = "42";
      const actual = polybius("j");
      expect(actual).to.equal(expected);
    });
    it("Properly decodes '42' to 'i/j'(as well as properly decode the message)", function () {
      const input = "443251 135144445124 42";
      const expected = "the letter i/j";
      const actual = polybius(input, false);
      expect(actual).to.equal(expected);
    });
  });
  it("Should ignore capital letters", function () {
    const input = "A CAPITAL MESSAGE";
    const inputTwo = "a capital message";
    const expected = "11 31115342441113 23513434112251";
    const actual = polybius(input);
    const actualTwo = polybius(inputTwo);
    expect(actual).to.equal(expected);
    expect(actualTwo).to.equal(expected);
  });
  describe("Should maintain spaces decoding and encoding", function () {
    it("Should maintain spaces encoding", function () {
      const input = "a space";
      const expected = "11 3453113151";
      const actual = polybius(input);
      expect(actual).to.equal(expected);
    });
    it("Should maintain spaces decoding", function () {
      const input = "11 3453113151";
      const expected = "a space";
      const actual = polybius(input, false);
      expect(actual).to.equal(expected);
    });
  });
});// Write your tests here!
