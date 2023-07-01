const chai = require("chai");
const { add } = require("../src/myClass");
const expect = chai.expect;

describe("Test Suit", () => {
  it("Test add method", () => {
    expect(add(1, 2)).to.be.equal(3);
  });
});
