import React from 'react'
import { useConnection } from '@solana/wallet-adapter-react';
import { useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useEffect } from 'react';

function ShowSolBalance() {
    const {connection} = useConnection();
    const wallet = useWallet();


    async function getBalance() {
        if(wallet.publicKey){
            const balance = await connection.getBalance(wallet.publicKey);
            document.getElementById('balance').innerHTML = balance/LAMPORTS_PER_SOL;
        }
    }

    useEffect(() => {
        getBalance();
    }, [wallet.publicKey]);

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur px-5 py-4">
        <p className="text-sm text-gray-300">SOL Balance</p>
        <div id="balance" className="mt-1 text-2xl font-semibold tracking-tight"></div>
    </div>
  )
}

export default ShowSolBalance