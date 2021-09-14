import check from '../images/icon-check.svg'

const Thanks = ({ setModalIsOpen }) => {
  return (
    <div className='flex flex-col justify-center items-center px-5 m-auto'>
      <img src={check} alt='' />
      <h1 className='text-3xl font-bold mt-4 m-auto'>
        Thanks for your support
      </h1>
      <p className='text-center my-6'>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button
        className='bg-cyan-moderate hover:bg-cyan-dark text-white rounded-full px-6 py-2 lg:py-4'
        onClick={() => setModalIsOpen(false)}
      >
        Got it!
      </button>
    </div>
  )
}

export default Thanks
