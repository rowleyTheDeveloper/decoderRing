const { expect } = require("chai");
const { substitution } = require("../src/substitution.js");

describe("Substitution Tests Written By Evan", function () {
  describe("Should return false if substitution alphabet isn't 26 characters or has duplicate characters", function () {
    it("Returns false if substitution alphabet isn't 26 characters", function () {
      const input = "message";
      const alphabet = "asdfgjkl";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
    it("Returns false if there are duplicate characters", function () {
      const input = "message";
      const alphabet = "asdfghjklzxcvbnmqwertyuioo";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
  });
  describe("Should correctly encode/decode given phrase, ignore capital letters, and maintain spaces", function () {
    it("Correctly encodes message", function () {
      const input = "message";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const expected = "dtllqut";
      const actual = substitution(input, alphabet);
      expect(actual).to.equal(expected);
    });
    it("Correctly decodes message", function () {
      const input = "dtllqut";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const expected = "message";
      const actual = substitution(input, alphabet, false);
      expect(actual).to.equal(expected);
    });
    it("Should ignore capital letters", function () {
      const input = "message";
      const inputTwo = "MESSAGE";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const expected = "dtllqut";
      const actual = substitution(input, alphabet);
      const actualTwo = substitution(inputTwo, alphabet);
      expect(actual).to.equal(expected);
      expect(actualTwo).to.equal(expected);
    });
    it("Should correctly maintain spaces", function () {
      const input = "a message";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const expected = "q dtllqut";
      const actual = substitution(input, alphabet);
      expect(actual).to.equal(expected);
    });
  });
});// Write your tests here!
