require('@nomiclabs/hardhat-waffle');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: '0.8.9',
	networks: {
		rinkeby: {
			url: 'https://eth-rinkeby.alchemyapi.io/v2/tr63X1t693arg1RF6N40coRJvt8CdYnm',
			accounts: ['f43fb8198a00c2bb15163142849eaa480b2143215e88d7fc589a5822951971d1'],
		},
	},
};
