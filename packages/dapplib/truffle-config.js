require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn pull grace farm furnace sport'; 
let testAccounts = [
"0x26b25ba53b9ec7e9ca8903ab592873a09920cb66037e0f4b76dfd5e2d2680170",
"0x5ad82c6ced3cd7b65460e68400e25deae5a757dc0f473297a921ff1b78525759",
"0x83e3c5fe860806035b7ca46755a04fad7761e602ece0bf9a902bce562749791f",
"0x5f23bf52ffd655d1e990723af6ad4a23c06762b42b4a2630a897f6ce6024174b",
"0xb7137c1bc204f1062a9bddf9495bb0ad3fb49760db2a737ea2212074c0b44993",
"0xf485dbc4b23b54c963cf317e92dc0e36edf638726b23a1b7f553cd30236e52da",
"0x5d58c652c0038ef373753acdb72ca5fa203db7945a3968800ce0f3d04e3ccd26",
"0x6ddaccc4386e88911df18889536eb68e972df2e9f6da9f1ae1e56c57188b3d90",
"0xbab342d1963672c85f3c49b2c5b4050d02ae69a141c44f737abb4bd7b58deb89",
"0x460c3f51b04505dbff8b23b3a500abdb8e35c60d73de884aa2e0ee202f4c9ce0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


