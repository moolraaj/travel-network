'use client'
import React, { useEffect, useState } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import { EXPORT_ALL_APIS } from '@/utils/api/apis'


function Layout({children}) {
  let api=EXPORT_ALL_APIS()
  let [result,setResult]=useState([])
  useEffect(()=>{
    let loadHeaderAndFooter=async()=>{
      let resp=await api.fetchHeaderFooterApi()
      setResult(resp.data)
    }

    loadHeaderAndFooter()

  },[])
  return (
    <>
    <Header result={result}/>
    {children}
    <Footer result={result}/>

    </>
  )
}

export default Layout