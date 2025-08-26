import React from 'react'
import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';

function SignMessage() {
    const { publicKey, signMessage } = useWallet();

    async function SignMessage() {
      if (!publicKey) throw new Error('Wallet not connected!');
      if (!signMessage) throw new Error('Wallet does not support message signing!');
      
      const message = document.getElementById("message").value;
      const encodedMessage = new TextEncoder().encode(message);
      const signature = await signMessage(encodedMessage);

      if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid!');
      alert('Message signature: ' + bs58.encode(signature));
  };
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur px-5 py-4">
    <p className="mb-2 text-sm text-gray-300">Sign Message</p>
    <div className="flex items-center gap-3">
      <input id="message" type="text" placeholder="Message" className="w-full rounded-lg bg-gray-900/70 border border-white/10 px-3 py-2 text-sm outline-none ring-0 focus:border-violet-400 focus:bg-gray-900/80" />
      <button onClick={SignMessage} className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-3 py-2 text-sm font-medium text-white hover:bg-cyan-600 active:bg-cyan-700 disabled:opacity-50">
          Sign
      </button>
    </div>
    </div>
  )
}

export default SignMessage