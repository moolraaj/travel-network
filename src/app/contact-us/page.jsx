import React from 'react'
import ContactForm from './components/contactForm'
import Breadcrumb from '../_common/breadcrumb/breadcrumb'

const Page = () => {
  const title = 'Contact Us'
  const image = '/bread.jfif'
  return (
    <div>
        <Breadcrumb
          title={title}
          image={image}
        />
        <ContactForm/>
    </div>
  )
}

export default Page