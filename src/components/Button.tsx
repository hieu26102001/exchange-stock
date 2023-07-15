'use client'
 
import { useEffect, useState } from 'react'
import Web3 from 'web3'

export default function Counter() {
    const [userInfo, setUserInfo] = useState({
        address: '',
        balance: 0,
        usdtBalance: 0,
    })
    const TRONGRID_API = 'https://api.shasta.trongrid.io';

    async function getTronweb(){
        let address
        let balance
        let usdtBalance

        if(window.tronWeb){
            let tronWeb = window.tronWeb;
            if(tronWeb && tronWeb.defaultAddress.base58){
                console.log(tronWeb.defaultAddress.base58)
                address = window.tronWeb.defaultAddress.base58
                const balanceResp =  await tronWeb.trx.getBalance(address)
                balance = balanceResp / 1000000
                let contract = await tronWeb.contract().at('TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs');
                const result = await contract.balanceOf(address).call();
                usdtBalance = result / 1000000
                setUserInfo({
                    address: address,
                    balance: balance,
                    usdtBalance: usdtBalance
                })
            }
        }
    }

    useEffect(()=>{
        getTronweb();
    },[])
    
    const openTronLinkPopup = () => {
        if (window.tronWeb && !window.tronWeb.ready) {
            alert('Log in to your TronLink extension first!')
        } else {
            getTronweb()
            alert('TronLink is set.');
        }
      };

    return(   
        <div className='flex flex-col'>
            <div>
                UserAddress: 
                {window.tron && window.tron.tronWeb.ready
                    ? <text>{userInfo.address}</text>
                    : <button onClick={openTronLinkPopup}>Login</button>
                }
            </div>
            <div>
                Balance: {userInfo.balance}
            </div>
            <div>
                Usdt Balance: {userInfo.usdtBalance}
            </div>
        </div>
    )
}