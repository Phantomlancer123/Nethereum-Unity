async function main() {
    const SatoshiViral = await ethers.getContractFactory("SatoshiViral");

    // Start deployment, returning a promise that resolves to a contract object
    const hello_world = await SatoshiViral.deploy("Hello World!");
    console.log("Contract deployed to address:", hello_world.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });