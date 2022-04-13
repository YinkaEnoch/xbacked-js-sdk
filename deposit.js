require("dotenv").config();

const {
  Account,
  Vault,
  vaultDiscovery,
  VAULT_IDS,
} = require("@xbacked-dao/xbacked-sdk");

(async () => {
  const acc = new Account({
    network: "TestNet",
    mnemonic: process.env.PASS_PHRASE,
  });

  // Test' vault ID
  const vaultId = VAULT_IDS.TestNet.algo;

  // create a vault
  const vault = new Vault({ id: vaultId });
})();
