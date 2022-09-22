const hre = require('hardhat');

async function main() {
	const Transactions = await hre.ethers.getContractFactory('Transactions');
	const transactionContract = await Transactions.deploy();

	await transactionContract.deployed();

	console.log('Transactions with 1 ETH deployed to:', transactionContract.address);
}

;(async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
})();
