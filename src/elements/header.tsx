'use-client'

import { useEffect, useState } from "react";

export default function Header(){
    const [userInfo, setUserInfo] = useState({
        address: '',
        balance: 0,
    })
    
    async function getTronweb(){
        let address
        let balance
        if(window.tronWeb){
            let tronWeb = window.tronWeb;

            if(tronWeb && tronWeb.defaultAddress.base58){
                address = window.tronWeb.defaultAddress.base58
                const balanceResp =  await tronWeb.trx.getBalance(address)
                balance = balanceResp / 1000000
                setUserInfo({
                    address: address,
                    balance: balance,
                })
            }
        }
    }

    useEffect(()=>{
        getTronweb()
    },[])
    return(
        <div className=''> 
            <div className="">
                UserAddress: <text>{userInfo.address}</text>
            </div>
            <div className="">
                Balance: {userInfo.balance}
            </div>
        </div>
    )
}