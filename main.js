const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

/* For a real world application, a private key wouldn't be viewable in plaintext in source code. */
const myKey = ec.keyFromPrivate('dummy_key_here_for_educational_purposes');

const myWalletAddress = myKey.getPublic('hex');

let jcoin = new Blockchain();
/* Add blocks */
//jcoin.addBlock(new Block(1, "10/07/2017", { amount: 10}));
//jcoin.addBlock(new Block(2, "12/07/2017", { amount: 20}));

/* View the blockchain */
//console.log(JSON.stringify(jcoin, null, 4));

/* Test blockchain validity */
//console.log("Is blockchain valid? " + jcoin.isChainValid());
//jcoin.chain[1].data = { amount: 100 };
//jcoin.chain[1].hash = jcoin.chain[1].calculateHash();
//console.log("Is blockchain valid? " + jcoin.isChainValid());

/* Mine blocks */
//console.log("Mining block 1...");
//jcoin.addBlock(new Block(1, "10/07/2017", { amount: 4}));
//console.log("Mining block 2...");
//jcoin.addBlock(new Block(2, "12/07/2017", { amount: 8}));

/* Test transactions */
const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
jcoin.addTransaction(tx1);

//jcoin.createTransaction(new Transaction("my address", "his address", 100));
//jcoin.createTransaction(new Transaction("his address", "my address", 50));
console.log('\n Starting the miner...');
jcoin.minePendingTransactions(myWalletAddress);
console.log('\nBalance of xavier is', jcoin.getBalanceOfAddress(myWalletAddress));
//console.log('\n Starting the miner again...');
//jcoin.minePendingTransactions('xavier\'s-address');
//console.log('\nBalance of xavier is', jcoin.getBalanceOfAddress(myWalletAddress));
