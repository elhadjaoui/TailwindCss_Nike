import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
    return (
        <section id='about-us' className=' flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
            <div className=' flex flex-col flex-1'>
                <h2 className=' mt-10 font-palanquin  capitalize
                                font-bold text-4xl lg:max-w-lg
                                '>
                    We Provide You
                    <span className=' text-coral-red inline-block mt-3'>Super Quality</span> Shoes
                </h2>
                <p className=' info-text mt-6 lg:max-w-lg   max-w-sm'>Discover Stylish Nike Arrival, Quality Comfort and innovation of your active life.</p>
                <p className=' info-text mt-6 lg:max-w-lg   max-w-sm'>Discover Stylish Nike Arrival, Quality Comfort and innovation of.</p>
                <div className=' mt-12'>
                    <Button label='View Details'  />
                </div>
            </div>
            <div className=' flex flex-1 justify-center items-center'>
                <img src={shoe8} alt="shoe" width={570} height={522}
                    className="object-contain" />
            </div>

        </section>
    )
}

export default SuperQuality