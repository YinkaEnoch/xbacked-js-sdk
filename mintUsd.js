/**
 * Mint more xUSD - provided the collateral ratio will not fall below 110%
 * */

require("dotenv").config();

const { Account, Vault, VAULT_IDS } = require("@xbacked-dao/xbacked-sdk");

(async () => {
  const acc = new Account({
    network: "TestNet",
    mnemonic: process.env.PASS_PHRASE,
  });

  // Test' vault ID
  const vaultId = VAULT_IDS.TestNet.algo;

  // create a vault
  const vault = new Vault({ id: vaultId });

  // Mint more xUSD
  const amount = 5;
  const mintStatus = await acc.mintToken({ amount, vault });
  console.log({ mintStatus });
})();
