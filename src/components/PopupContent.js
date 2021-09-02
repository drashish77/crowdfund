const PopupContent = (props) => {
  const { name, amount, description, totalQuantity, quantitySold } = props
  let quantityLeft = totalQuantity && totalQuantity - quantitySold
  return (
    <div className={quantityLeft !== 0 ? 'opacity-100' : 'opacity-50'}>
      <div className='bg-white '>
        <div className=''>
          <div className='modal' onClick={props.onClick}>
            <div className='modal-header'>
              <div className='flex justify-between items-start'>
                <div
                  className='flex flex-col text-left text-md lg:text-xl font-bold items-center lg:items-start lg:flex-row'
                  style={{ alignItems: 'start' }}
                >
                  <h1 className='lg:mr-4'>{name}</h1>
                  <h4 className='text-cyan-moderate'>
                    Pledge ${amount} or more
                  </h4>
                </div>
                <div
                  // className='flex items-center'
                  className={totalQuantity ? 'flex items-center' : 'hidden'}
                >
                  <h1 className=' text-3xl md:text-3xl font-bold mr-2'>
                    {quantityLeft}
                  </h1>
                  <p className='text-sm text-gray-500'>left</p>
                </div>
              </div>
              <p className='text-gray-500 text-md lg:text-xl my-4'>
                {description}
              </p>
              <div className='border-b'></div>
            </div>
            <div className='modal-footer flex flex-col lg:flex-row justify-between items-center mt-2'>
              <h4 className='text-md lg:text-xl text-gray-700'>
                Enter your pledge
              </h4>
              <div className='modal-footer-2 flex justify-between items-center'>
                <div className='flex justify-center items-center border-4 rounded-full text-md lg:text-2xl py-1 lg:py-2  mr-8 border-cyan-dark w-24 lg:w-40 min-w-min'>
                  <label className=''>$</label>
                  <input
                    type='number'
                    name='price-input'
                    min={amount}
                    // className='pledge-input focus:outline-none focus:border-red-500'
                    className='focus:outline-none w-1/2 lg:w-4/6'
                    aria-label='Bamboo Stand Price Input'
                  />
                </div>
                {/* <label>$</label>
                <input
                  type='number'
                  value={(e) => e.target.value}
                  className=' focus:border-none w-8 rounded-full px-6 py-2 lg:py-4 my-6'
                /> */}
                <button
                  // onClick={() => (quantityLeft === 0 ? '' : onClickHandler())}
                  className='bg-cyan-moderate hover:bg-cyan-dark text-white rounded-full px-6 py-2 lg:py-4 my-6'
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopupContent
