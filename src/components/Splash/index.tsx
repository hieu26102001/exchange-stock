'use client'
 
import Router from 'next/router'
import { useEffect, useState } from 'react'


export default function Counter() {
    
    const openTronLinkPopup = () => {
        if (window.tronWeb && !window.tronWeb.ready) {
            alert('Log in to your TronLink extension first!')
        } else {
            Router.push('/Home')
            alert('TronLink is set.');
        }
      };
    
    useEffect(()=>{
        openTronLinkPopup()
    },[])

    return(   
        <div className='flex flex-col'> 
            <div>
                <button onClick={openTronLinkPopup}>Login</button>
            </div>
        </div>
    )
}