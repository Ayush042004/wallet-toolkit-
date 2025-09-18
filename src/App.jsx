import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';
import AirDrop from './components/AirDrop';
import ShowSolBalance from './components/ShowSolBalance';
import SendTokens from './components/SendTokens';
import SignMessage from './components/SignMessage';
import TokenLaunchpad from './components/tokenLaunchPad';

function App() {
  return (
    <>
    <ConnectionProvider endpoint={"https://responsive-smart-orb.solana-devnet.quiknode.pro/b11cef9743e1bca2b18ed9a4cbb89f415376e7e5"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen bg-gray-950 text-gray-100">
            <div className="max-w-3xl mx-auto px-4 py-8">
              <header className="mb-8">
                <h1 className="text-2xl font-semibold tracking-tight">Solana Wallet Toolkit</h1>
                <p className="text-gray-400 mt-1">Connect, airdrop dev SOL, check balance, send tokens, and sign messages.</p>
              </header>

              <div className="flex items-center gap-3 mb-6">
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>

              <div className="grid gap-6">
                <AirDrop />
                <ShowSolBalance />
                <SendTokens />
                <SignMessage />
                
              </div>
              <TokenLaunchpad />

            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
       
    </>
  )
}

export default App