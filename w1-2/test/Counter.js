const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Counter", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployCounterFixture() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();

    return { counter, owner, otherAccount };
  }

  describe("Deployment", function () {
    
    it("Should set the right owner", async function () {
      const { counter, owner } = await loadFixture(deployCounterFixture);

      expect(await counter.owner()).to.equal(owner.address);
    });

  });

  describe("count", function () {
    
    it("owner can call count", async function () {
      const { counter, owner, otherAccount } = await loadFixture(deployCounterFixture);

      expect(await counter.count()).to.equal(0);

      await counter.add(2);

      expect(await counter.count()).to.equal(2);

    });

    it("only owner can call count function", async function () {
      const { counter, owner, otherAccount } = await loadFixture(deployCounterFixture);

      // expect(await counter.count()).to.equal(0);

      await expect(counter.connect(otherAccount).count()).to.be.revertedWith(
        "only owner can call count function"
      );

    });

  });




});
