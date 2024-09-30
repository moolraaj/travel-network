import React from 'react'

function page({params}) {
    let {slug}=params

    console.log(slug)
  return (
   <>
   <h1> this is nexted tour pages slug</h1>
   </>
  )
}

export default page