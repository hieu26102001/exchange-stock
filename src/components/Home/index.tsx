'use client'
 
import Header from '@/elements/header'
import Layout from '@/elements/layout'
import getAbiContract from '@/utils'
import { useEffect, useState } from 'react'

export default function HomeComponent() {
    const [stockList, setStockList] = useState()
    async function LoadStock(){
        if(window.tronWeb){
            let exchange = await getAbiContract()
            console.log(exchange)
            let list = await exchange.getCompanyListDetailed().call()
            console.log(list)
            let stockArray = []
            for(let i = 0; i<list[0].length; i++){
                stockArray.push({
                    id: list[0][i],
                    name: list[1][i],
                    total: parseInt(list[2][i]._hex, 16),
                    rate: parseInt(list[3][i]._hex, 16),
                })
            }
            setStockList(stockArray)
        }
    }

    useEffect(()=>{
        LoadStock()
    },[])

    return(   
        <Layout>
            <Header/>
            <table>
                {stockList?.map((item)=>{
                    return(
                        <ul>
                            <li>{item.id}</li>
                            <li>{item.name}</li>
                            <li>{item.total}</li>
                            <li>{item.rate}</li>
                            <li>
                                <button>
                                    To exchange
                                </button>
                            </li>
                        </ul>
                    )
                })}
            </table>
        </Layout>
    )
}