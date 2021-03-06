require("dotenv").config();

const { Account, VAULT_IDS } = require("@xbacked-dao/xbacked-sdk");
const acc = new Account({
  mnemonic: process.env.PASS_PHRASE,
  network: "TestNet",
});

// Get account balance
acc
  .getBalance({ tokenId: 0 })
  .then((res) =>
    res > 0
      ? console.log(`ALGO: ${res / 1000000}`)
      : console.log(`ALGO: ${res}`)
  );

// Get xUSD balance
acc
  .getBalance({ tokenId: process.env.xUSD_ID })
  .then((res) =>
    res > 0
      ? console.log(`xUSD: ${res / 1000000}`)
      : console.log(`xUSD: ${res}`)
  );
