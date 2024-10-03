import InnerslugPage from '@/app/destinations/[slug]/[innerslug]/components/InnerslugPage'
import React from 'react'

function page({params}) {
    let {slug}=params

   
  return (
   <>
 <InnerslugPage slug={slug}/>
   </>
  )
}

export default page