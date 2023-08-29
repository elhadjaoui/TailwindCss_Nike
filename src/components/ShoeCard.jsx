
const ShoeCard = ({ imgUrl, changeShoe, BigShoe }) => {
    const handleClick = () => {
        if (imgUrl.bigShoe !== BigShoe)
            changeShoe(imgUrl.bigShoe)
    }
    return (
        <div
            className={`border - 2 rounded-xl
              ${imgUrl.bigShoe === BigShoe ? 'border-coral-red' : 'border-transparent'}
              max-sm:flex-1  cursor-pointer`}
            onClick={handleClick}>
            <div className=" flex justify-center items-center
            bg-cover bg-center bg-card sm:h-40 sm:w-40  rounded-xl max-sm:p-4
            ">
                <img src={imgUrl.thumbnail} alt="shoe"
                    width={127}
                    height={103}
                    className='object-contain'
                />
            </div>

        </div>
    )
}

export default ShoeCard