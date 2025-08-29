import React from 'react'
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";

function SendTokens() {
    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendToken() {
        if(wallet.publicKey) {
            let to = document.getElementById('to').value;
            let amount = document.getElementById('amount').value;
            const transaction = new Transaction();
            transaction.add(SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: new PublicKey(to),
                lamports: amount * LAMPORTS_PER_SOL,

            }));

            await wallet.sendTransaction(transaction, connection);
            alert("Sent " + amount + " SOL to " + to);


        }

    }
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur px-5 py-4">
    <p className="mb-2 text-sm text-gray-300">Send SOL</p>
    <div className="flex flex-col gap-3 sm:flex-row">
      <input id="to" type="text" placeholder="Recipient address" className="w-full rounded-lg bg-gray-900/70 border border-white/10 px-3 py-2 text-sm outline-none ring-0 focus:border-violet-400 focus:bg-gray-900/80" />
      <input id="amount" type="text" placeholder="Amount (SOL)" className="w-full sm:w-40 rounded-lg bg-gray-900/70 border border-white/10 px-3 py-2 text-sm outline-none ring-0 focus:border-violet-400 focus:bg-gray-900/80" />
      <button onClick={sendToken} className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-600 active:bg-emerald-700 disabled:opacity-50">
        Send
      </button>
    </div>
</div>
  )
}

export default SendTokens