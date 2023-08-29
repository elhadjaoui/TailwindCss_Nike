import React from 'react'

const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
        <div className=' w-full rounded-2xl shadow-3xl flex-col px-10 py-16'>
            <div className=' w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
                <img src={imgURL} alt="service" width={24} height={24} />
            </div>
            <h3 className=' font-palanquin text-3xl font-bold text-slate-gray leading-normal mt-5'>{label}</h3>
            <p className=' font-montserrat text-lg break-words  text-slate-gray mt-3'>{subtext}</p>

        </div>
    )
}

export default ServiceCard