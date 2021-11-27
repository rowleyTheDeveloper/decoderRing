const { expect } = require("chai");
const { caesar } = require("../src/caesar.js");

describe("Caesar Tests Written By Evan", function () {
  describe("Should return false if the shift value is equal to 0, less than -25, greater than 25, or not present", function () {
    it("Returns false if shift is equal to 0", function () {
      const input = "a simple message";
      const shift = 0;
      const expected = false;
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
    });
    it("Returns false if shift is less than -25", function () {
      const input = "a simple message";
      const shift = -26;
      const expected = false;
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
    });
    it("Return false if shift is greater than 25", function () {
      const input = "a simple message";
      const shift = 26;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
    });
    it("Returns false if shift is not present", function () {
      const input = "a simple message";
      const shift = undefined;
      const expected = false;
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
    });
  });
  describe("Should ignore capital letters", function () {
    it("Ignores Capital Letters", function () {
      const input = "ENCODED MESSAGE";
      const inputTwo = "encoded message";
      const shift = 4;
      const expected = "irgshih qiwweki";
      const actual = caesar(input, shift);
      const actualTwo = caesar(inputTwo, shift);
      expect(actual).to.equal(expected);
      expect(actualTwo).to.equal(expected);
    });
  });
  describe("Should handle shifts that go past the end of the alphabet", function () {
    it("Should shift 'z' to 'c' if shifted by 3", function () {
      const input = "z";
      const shift = 3;
      const expected = "c";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
    });
    it("Should also shift 'a' to 'z' if shifted by -1", function () {
      const input = "a";
      const shift = -1;
      const expected = "z";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
    });
  });
  describe("Should maintain spaces when decoding and encoding messages", function () {
    it("Should maintain spaces and other non-alphabetic symbols when encoding", function () {
      const input = "A More Complex Message!";
      const shift = 4;
      const expected = "e qsvi gsqtpib qiwweki!";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
    });
    it("Should also maintain spaces and other non-alphabetic symbols when decoding", function () {
      const input = "e qsvi gsqtpib qiwweki!";
      const shift = 4;
      const actual = caesar(input, shift, false);
      const expected = "a more complex message!";
      expect(actual).to.equal(expected);
    });
  });
});
// Write your tests here!
