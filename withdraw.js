/**
 * Withdraw collateral from a vault - provided the collateral ratio does not
 * fall below 110%
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
  const amount = 80;
  const withdrawalStatus = await acc.withdrawCollateral({
    amount,
    vault,
  });
  console.log({ withdrawalStatus });
})();
