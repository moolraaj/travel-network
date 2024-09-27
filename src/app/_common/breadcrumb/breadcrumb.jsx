import React from 'react'

const Breadcrumb = ({title='Page Title', image=''}) => {
  return (
    <div className=''>
        <img src={image} alt={title} />
        <h2>{title}</h2>
  
    </div>
  )
}

export default Breadcrumb