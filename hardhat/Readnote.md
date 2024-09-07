Step 1) Deploy TransferUSDC.sol to Avalanche Fuji

Open your Metamask wallet and switch to the Avalanche Fuji network.

Open the TransferUSDC.sol file.

Navigate to the "Solidity Compiler" tab and click the "Compile TransferUSDC.sol" button.

Navigate to the "Deploy & run transactions" tab and select the "Injected Provider - Metamask" option from the "Environment" dropdown menu. Make sure that chainId is switched to 43113 (if not, you may need to refresh the Remix IDE page in your browser).

Under the "Contract" dropdown menu, make sure that the "TransferUSDC - TransferUSDC.sol" is selected.

Locate the orange "Deploy" button. Provide:

    0xF694E193200268f9a4868e4Aa017A0118C9a8177 as the ccipRouter,

    0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846 as the linkToken and

    0x5425890298aed601595a70AB815c96711a31Bc65 as the usdcToken.

Click the orange "Deploy"/"Transact" button.

Metamask notification will pop up. Sign the transaction.
Step 2) On AvalancheFuji, call allowlistDestinationChain function

Under the "Deployed Contracts" section, you should find the TransferUSDC.sol contract you previously deployed to Avalanche Fuji. Find the allowlistDestinationChain function and provide:

    16015286601757825753, which is the CCIP Chain Selector for the Ethereum Sepolia test network, as the _destinationChainSelector parameter,

    true as _allowed parameter

Hit the "Transact" orange button.
Step 3) On AvalancheFuji, fund TransferUSDC.sol with 3 LINK

To cover for CCIP fees, fund TransferUSDC.sol with some amount of LINK, 3 should be enough for this demo.
Step 4) On Avalanche Fuji, call approve function on USDC.sol

Go to the Avalanche Fuji Snowtrace Explorer and search for USDC token. Locate the "Contract" tab, then click the "Write as Proxy" tab. Connect your wallet to the blockchain explorer. And finally find the "approve" function.
LogoAddress 0x5425890298aed601595a70AB815c96711a31Bc65 Details - Snowtrace TestnetSnowtrace Blockchain Explorer
Approve 1 USDC to be spent by TransferUSDC.sol

We want to approve 1 USDC to be spent by the TransferUSDC.sol on our behalf. To do so we must provide:

    The address of the TransferUSDC.sol smart contract we previously deployed, as spender parameter

    1000000, as value parameter.

Approve 1 USDC to be spent by TransferUSDC.sol

Because USDC token has 6 decimals, 1000000 means that we will approve 1 USDC to be spent on our behalf.

Click the "Write" button. Metamask popup will show up. Sign the transaction.
Approve 1 USDC to be spent by TransferUSDC.sol
Step 5) On AvalancheFuji, call transferUsdc function

Under the "Deployed Contracts" section, you should find the TransferUSDC.sol contract you previously deployed to Avalanche Fuji. Find the transferUsdc function and provide:

    16015286601757825753, which is the CCIP Chain Selector for the Ethereum Sepolia test network, as the _destinationChainSelector parameter,

    Your wallet address, as the _receiver parameter,

    1000000, as the _amount parameter

    0, as the _gasLimit parameter

0 is set as the _gasLimit parameter because we are sending tokens to an EOA so there is no cost for executing the ccipReceive function on the destination side.

Hit the "Transact" orange button.

You can now monitor the live status of your cross-chain message by copying the transaction hash into the search bar of a Chainlink CCIP Explorer.