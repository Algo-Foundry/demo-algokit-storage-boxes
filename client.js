const algosdk = require("algosdk");

const getNetworkCredentials = (network) => {
    // localhost
    let algod_token = process.env.ALGOD_TOKEN;
    let algod_address = process.env.ALGOD_SERVER;
    let algod_port = process.env.ALGOD_PORT;

    let kmd_token = process.env.KMD_TOKEN;
    let kmd_address = process.env.KMD_SERVER;
    let kmd_port = process.env.KMD_PORT;

    let indexer_token = process.env.INDEXER_TOKEN;
    let indexer_address = process.env.INDEXER_SERVER;
    let indexer_port = process.env.INDEXER_PORT;

    switch (network) {
        case "TestNet":
            algod_token = process.env.ALGOD_TOKEN_TESTNET;
            algod_address = process.env.ALGOD_ADDR_TESTNET;
            algod_port = process.env.ALGOD_PORT_TESTNET;

            //no access to kmd for testnet
            break;
        default:
            break;
    }

    return {
        algod: {
            token: algod_token,
            address: algod_address,
            port: algod_port,
        },
        kmd: {
            token: kmd_token,
            address: kmd_address,
            port: kmd_port,
        },
        indexer: {
            token: indexer_token,
            address: indexer_address,
            port: indexer_port,
        }
    };
};

const getAlgodClient = (network) => {
    const { algod } = getNetworkCredentials(network);
    const algodClient = new algosdk.Algodv2(
        algod.token,
        algod.address,
        algod.port
    );

    return algodClient;
};

const getKmdClient = (network) => {
    const { kmd } = getNetworkCredentials(network);
    const kmdClient = new algosdk.Kmd(
        kmd.token,
        kmd.address,
        kmd.port
    );

    return kmdClient;
};

const getIndexerClient = (network) => {
    const { indexer } = getNetworkCredentials(network);
    const indexerClient = new algosdk.Indexer(
        indexer.token,
        indexer.address,
        indexer.port
    );

    return indexerClient;
};

module.exports = {
    getAlgodClient,
    getKmdClient,
    getIndexerClient
};
