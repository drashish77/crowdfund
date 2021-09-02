const InputRadio = (props) => {
  return (
    <div className='flex justify-between border-2 rounded focus:border-red-500 p-2 my-4 lg:px-4 lg:py-8 lg:mx-8 lg:mt-4 lg:mb-6  cursor-pointer select-none'>
      <div>
        <div className='mt-1'>
          <label className='inline-flex items-start'>
            <input
              type='radio'
              className='form-radio h-20 w-20 lg:h-10 lg:w-10'
              name='radio-sizes'
              disabled={props.quantityLeft === 0 ? true : false}
            />
            <span className='ml-4'>{props.children}</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default InputRadio

/*  <div>
          <div className='mt-1'>
            <label className='inline-flex items-start'>
              <input
                type='radio'
                className='form-radio h-20 w-20'
                name='radio-sizes'
              />
              <span className='ml-4 text-xl bg-red-700'>{props.children}</span>
            </label>
          </div>
        </div> 
        
        
          /* <label className='flex justify-between border-2 rounded focus:border-red-500 p-2 my-4 lg:px-4 lg:py-8 lg:mx-8 lg:mt-4 lg:mb-6  cursor-pointer select-none'>
          <input
            className='m-2'
            type='radio'
            name='radio'
            disabled={props.quantityLeft === 0 ? true : false}
          />
          {props.children}
        </label> */
