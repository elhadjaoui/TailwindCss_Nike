import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section id='services' className=' max-container gap-6 grid grid-cols-1 justify-center lg:grid-cols-3 sm:grid-cols-2'>
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </section>
  )
}

export default Services