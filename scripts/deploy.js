const { ethers } = require("hardhat");
const {expect} = require("chai");
async function main() {
    let address = "0x354c86deb1A1715c4a36d8E447Af4D8fE98caDf6";

    try {
        let rawContract = await ethers.getContractFactory("Token");
        let contract = await rawContract.deploy(address, "anil kumar");

        // Check if contract deployment was successful
        if (contract) {
            console.log("Contract address:", contract.runner.address);
        } else {
            throw new Error("Contract deployment failed.");
        }
    } catch (error) {
        console.error("Deployment failed:", error);
    }
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error("Error during script execution:", error);
        process.exit(1);
    });
