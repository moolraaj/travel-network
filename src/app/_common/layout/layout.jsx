import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import Image from 'next/image'

function Layout({children}) {
  return (
    <>
    <Header/>
    {children}
    <Footer/>

    </>
  )
}

export default Layout