import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <>
      <h1>Oops, the page you are looking for does not exist. <Link href={`/`}>Go to the home page</Link>.</h1>
    </>
  )
}

export default NotFound