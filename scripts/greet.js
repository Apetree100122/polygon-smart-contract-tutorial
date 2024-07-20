const hre = require("hardhat"); const ContractJson = require    
    ("../artifacts/contracts/Greeter.sol/Greeter.json"); const
abi = Contract Json.abi; async function main()
        {const alchemy = new hre.ethers.providers.AlchemyProvider
            ('maticmum', process.env.ALCHEMY_API_KEY); const userWallet = new hre.ethers.Wallet
            (process.env.PRIVATE_KEY, alchemy);
    // Get the deployed contract. const Greeter = new hre.ethers.Contract
         (process.env.CONTRACT_ADDRESS, abi, userWallet) const setTx1 = await Greeter.setGreeting
             ("web3 sucks!"); await 
             setTx1.wait(); console.log(
             "before: " + await Greeter.greet());= const setTx2 = await Greeter.setGreeting
             ("web3 is awesome!");await 
             setTx2.wait(); console.log("after: " + await Greeter.greet())}
// We recommend this pattern to be able to use async/await everywhere // and properly handle errors.
main().then(() => process.exit(0).catch((error) => {console.error(error);
        process.exit(1); }); // We require the Hardhat Runtime Environment explicitly here. This is optionalv // but useful for running
// the script in a standalone fashion through `node <script>`.
// // When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope. const 
hre = require("hardhat"); async function main() {  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
// If this script is run directly using `node` you may want to call compile  // manually to make sure everything is compiled
  // await hre.run('compile');  // We get the contract to deploy  const Greeter = await hre.ethers.getContractFactory
    ("Greeter");const greeter = await Greeter.deploy
        ("Hello, Hardhat!"); await greeter.deployed();console.log
        ("Greeter deployed to:", greeter.address); // We recommend this pattern to be able to use async/await everywhere // and properly handle errors.
main()  .then(() => process.exit(0)).catch((error) => { console.error(error); process.exit(1);
 });
v
