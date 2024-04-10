const {expect} = require("chai");
const {ethers} = require("hardhat");


describe("Counter",() => {
    let counter
    beforeEach("getContract", async () => {
        const Counter = await ethers.getContractFactory("Counter");
        counter = await Counter.deploy("subbu", 0);
    })

    describe("counting", async () => {
        it("initial count", async () => {
            const count = await counter.count();   
            expect(count).to.equal(0n)
        })

        it("increment count", async () => {
            let transaction = await counter.increment();   
            await transaction.wait();
            expect(await counter.count()).to.equal(1n)
            transaction = await counter.increment();  
            await transaction.wait();
            expect(await counter.count()).to.equal(2n)
        })

        it("decrement count", async () => {
            let transaction = await counter.decrement();   
            await transaction.wait();
            expect(await counter.count()).to.equal(-1n)
            transaction = await counter.decrement();  
            await transaction.wait();
            expect(await counter.count()).to.equal(-2n)
        })
    })

    
        

    
})