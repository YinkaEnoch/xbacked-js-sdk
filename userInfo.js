require("dotenv").config();

const { Account, Vault, VAULT_IDS } = require("@xbacked-dao/xbacked-sdk");

(async () => {
  const acc = new Account({
    network: "TestNet",
    mnemonic: process.env.PASS_PHRASE,
  });

  // Test vault ID
  const vaultId = VAULT_IDS.TestNet.algo;

  // create a vault
  const vault = new Vault({ id: vaultId });

  // Get user info
  const userInfo = await acc.getUserInfo({
    vault,
    address: await acc.getAddress(),
  });

  console.log({ userInfo });
})();
