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

  // Get vault global start
  const vaultState = await acc.getVaultState({ vault });

  const mintAmount = 100;
  const collateral = calcCollateral({
    mintAmount,
    currPrice: vaultState.collateralPrice / 1000000,
  });

  const createdVault = await acc.createVault({
    collateral,
    mintAmount,
    vault,
  });

  console.log(createdVault);
})();

const calcCollateral = ({ mintAmount, currPrice }) => {
  // Calculate 25% (125%) increase for the mintAmount
  const collateralAmount = (mintAmount * 25) / 100 + mintAmount;

  // Calculate the number of tokens require to match the amount calculated above
  const collateralToken = Number((collateralAmount / currPrice).toFixed(4));

  return collateralToken;
};
