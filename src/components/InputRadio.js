import { useState } from 'react'

const InputRadio = (props) => {
  return (
    <div
    // className='mx-auto max-w-full text-center flex flex-wrap justify-center'
    >
      <div className='my-12 lg:px-4 lg:py-8 lg:mx-8 lg:mt-4 lg:mb-6  cursor-pointer select-none'>
        <input
          id={props.radio}
          type='radio'
          name='radio'
          className='hidden'
          disabled={props.quantityLeft === 0 ? true : false}
        />
        <label
          htmlFor={props.radio}
          className='flex justify-around p-2 border-2 border-gray-400 rounded-lg cursor-pointer'
        >
          <span className='w-16 h-4 lg:w-12 lg:h-8  inline-block lg:mr-3 rounded-full border border-grey'></span>
          {props.children}
        </label>
      </div>
    </div>
  )
}

export default InputRadio
