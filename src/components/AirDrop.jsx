import React from 'react'
import { useWallet } from '@solana/wallet-adapter-react';
import { useConnection } from '@solana/wallet-adapter-react';

function AirDrop() {
    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendAirDrop(){
        const amount = document.getElementById('publicKey').value;
        await connection.requestAirdrop(wallet.publicKey, amount*10)
        alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
    }
  return (
    <>
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur px-5 py-4">
      
        <label htmlFor="publicKey" className="block text-sm text-gray-300 mb-2">Devnet Airdrop (SOL)</label>
        <div className="flex items-center gap-3">
          <input id="publicKey" type="text" placeholder='Enter Amount' className="w-full rounded-lg bg-gray-900/70 border border-white/10 px-3 py-2 text-sm outline-none ring-0 focus:border-violet-400 focus:bg-gray-900/80" />
          <button onClick={sendAirDrop} className="inline-flex items-center justify-center rounded-lg bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600 active:bg-violet-700 disabled:opacity-50">
            Send AirDrop
          </button>
        </div>

    </div>
    </>
  )
}

export default AirDrop