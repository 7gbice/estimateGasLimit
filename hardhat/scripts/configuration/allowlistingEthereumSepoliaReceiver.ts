import { ethers, network } from "hardhat";
import { SupportedNetworks, getCCIPConfig } from "../../ccip.config";
import deployedContracts from "../generatedTransferUSDCData.json";

async function allowlistingEthereumSepoliaReceiver(currentNetwork: SupportedNetworks) {
  // Get the Receiver contract instance
  const destinationAddress = (
    deployedContracts[currentNetwork] as { transferUSDC: string }
  ).transferUSDC;
  const transferUSDC = await ethers.getContractAt("Receiver", destinationAddress);

  // Iterate over each supported network
  for (const network in deployedContracts) {
    const supportedNetwork = network as SupportedNetworks;
    const transferUSDC = (deployedContracts[supportedNetwork] as { transferUSDC: string })
      .transferUSDC;

    if (transferUSDC) {
      // Fetch the destination chain selector
      const sourceChainSelector = getCCIPConfig(supportedNetwork).chainSelector;

      await transferUSDC.allowlistSourceChain(sourceChainSelector, true);
      await transferUSDC.allowlistSender(transferUSDC, true);

      console.log(`Allowlisted: ${supportedNetwork} , ${transferUSDC}`);
    }
  }
}

allowlistingEthereumSepoliaReceiver(network.name as SupportedNetworks).catch((error) => {
  console.error(error);
  process.exit(1);
});
