// import bookmark from '../images/icon-bookmark.svg'

import smallLogo from '../images/logo-mastercraft.svg'
const CardHero = () => {
  return (
    <>
      <div className='text-center'>
        <div className='flex justify-center items-center'>
          <div className=''>
            <img className='-mt-7' src={smallLogo} alt='' />
          </div>
        </div>
        <h1 className='text-2xl md:text-3xl font-bold pt-8'>
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className='text-gray2 text-sm mt-5'>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </div>

      <div className='flex justify-between mt-5'>
        <button
          className='
          bg-cyan-moderate
              hover:bg-cyan-dark
              text-white
              rounded-full px-5'
        >
          Back this project
        </button>
        <div id='bookmark' className='flex items-center'>
          <div id='icon' className='mr-neg15 z-0'>
            {/* <img src={bookmark} alt='' /> */}
            <svg
              className='group h-16 w-16 fill-current text-green-600'
              id='svg'
              viewBox='0 0 60 60'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g fill='none' fillRule='evenodd'>
                <circle
                  className='group-hover:bg-white z-10'
                  fill='#2F2F2F'
                  cx='28'
                  cy='28'
                  r='28'
                />
                <path
                  className='group-hover:bg-white'
                  d='M23 19v18l5-5.058L33 37V19z'
                  fill='#B1B1B1'
                />
              </g>
            </svg>
          </div>
          <button
            id='text'
            className='
                rounded-r-full
                bg-gray-200
                py-3
                px-6
                -ml-5
                font-bold
                hidden
                md:block
                hover:text-white
                hover:bg-cyan-dark
              '
          >
            Bookmark
          </button>
        </div>
      </div>
    </>
  )
}

export default CardHero
