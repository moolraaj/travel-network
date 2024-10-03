import React from 'react'
import InnerslugPage from './components/InnerslugPage'
import TopBanner from '@/app/Components/topBanner'

function page({params}) {
  let {innerslug}=params
  return (
   <>
    
   <InnerslugPage slug={innerslug}/>
   </>
  )
}

export default page