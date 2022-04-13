/**
 * Deposit more ALGO or ASA to the vault - so as to increase the collateral
 * ratio
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

  // Deposit more collateral
  const amount = 10;
  const depositStatus = await acc.depositCollateral({ amount, vault });
  console.log({ depositStatus });
})();
