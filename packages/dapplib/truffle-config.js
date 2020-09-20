require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note peace purse install beach sunset ghost'; 
let testAccounts = [
"0x3e78bc499e4adb0d1f7217edef98cd39fcf09c56e228cd1d146b32d8f2d1ee4a",
"0xaa1adc8b3cf5cc85f8e8c01a91867411df44dd0a84a45bd47dec29837a711705",
"0x4b08c0f50c6680c4c90e9b795f5dadc1b48856795c3c224d2157e855b50a646a",
"0x8e9adf4f93c0a123764151faf2601c81cf1d3c80b054cbf93379895123b43d6e",
"0xe1175ed7dacf1450d138499872d4746764a19bb2a1151d6ec5a21cd0fa5afa02",
"0x1101a636f284eb9ffa4537d4dc5d33338049f80ad754afd6df5eda3d0b26a604",
"0xc258cbe968118067899f4c9374fe03cfb4c8ef86160bc85911ccf116aebdcc0c",
"0x6fc8a014653898992061901486430e8944fa4073ad71e5b3c458dea6b3bb2c8d",
"0x37b9fdb84506bf31e39d0fa22187a3efd00128ea98fdd0cdcffa50b3be18b9a2",
"0xbbaaff1c411bc63e6cf66b11149dfc4d738faf3f4e3bcaa22371c522c9a547ad"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
