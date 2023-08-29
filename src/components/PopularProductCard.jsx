import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({product}) => {
    return (
        <div className='flex w-full   max-sm:items-center flex-col flex-1 gap-4'>
            <img src={product.imgURL} alt="product" width={280} height={280} />
            <div className=' mt-8 flex justify-start gap-2.5 '>
                <img src={star} alt="star" width={24} height={24} />
                <p className=' font-montserrat  text-xl leading-normal text-slate-gray'>4.5</p>
            </div>
            <p className=' font-montserrat text-lg text-slate-gray'>{product.name}</p>
            <p className=' font-palanquin text-lg text-coral-red'>{product.price}</p>
        </div>
    )
}

export default PopularProductCard