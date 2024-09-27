'use client'
import React, { useEffect, useState } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import { EXPORT_ALL_APIS } from '@/utils/api/apis'


function Layout({children}) {
  let api=EXPORT_ALL_APIS()
  let [data,setdata]=useState([])
  useEffect(()=>{
    let loadHeaderAndFooter=async()=>{
      let resp=await api.fetchHeaderFooterApi()
      setdata(resp)
    }

    loadHeaderAndFooter()

  },[])
  return (
    <>
    <Header data={data}/>
    {children}
    <Footer data={data}/>

    </>
  )
}

export default Layout