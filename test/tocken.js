const {expect} = require("chai");
const {ethers} = require("hardhat");


describe("Tocken", () => {
   

    let contract;
    let owner;
   
    beforeEach("initialize contarct", async () => {
        let address = "0x354c86deb1A1715c4a36d8E447Af4D8fE98caDf6";

        let rawContract = await ethers.getContractFactory("Token");
        contract = await rawContract.deploy(address, "anil kumar");
        owner = contract.owner();
    })


    it("check total supply", async () => {
    
        const ownerBalnce = await contract.balances(owner);
        expect(await contract.totalSupply()).to.equal(ownerBalnce);
    })


    it("transfer balance", async  () => {
        let transfers = await contract.transfer(owner, "0x92552A83C76E6e7F5fFB3645490212700D38f7C2", 100);
        expect(await contract.getBalance(owner)).to.equal(900n);     
        let transfers1 = await contract.transfer(owner, "0x92552A83C76E6e7F5fFB3645490212700D38f7C2", 100);
        expect(await contract.getBalance(owner)).to.equal(800n);

    })

    it("transfer balance", async  () => {
        try{

            let transfers = await contract.transfer(owner, "0x92552A83C76E6e7F5fFB3645490212700D38f7C2", 1100);

        }catch(e){
            const errorMessageLines = e.message.split('\n');
            console.log(errorMessageLines[0]);
        }

      

    })
})