// import bookmark from '../images/icon-bookmark.svg'

import { useState } from 'react'
import smallLogo from '../images/logo-mastercraft.svg'
import Modal from 'react-modal'
import InputRadio from './InputRadio'
import PopupContent from './PopupContent'
import { PledgeContext } from '../context/DataContext'
import { useContext } from 'react'

const CardHero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [bookmark, setBookmark] = useState('Bookmark')
  const [isActive, setActive] = useState(false)

  const bookmarkHandler = () => {
    if (bookmark === 'Bookmark') {
      setBookmark('Bookmarked')
      setActive(!isActive)
    } else {
      setBookmark('Bookmark')
      setActive(!isActive)
    }
  }

  const {
    pledge: { volunteer, bamboo, black, mahogany },
  } = useContext(PledgeContext)
  const onClickNew = (e) => {
    console.log('popupClicked')
  }
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

      <div className='flex justify-between items-center mt-5'>
        <button
          className='
          bg-cyan-moderate
              hover:bg-cyan-dark
              text-white
              rounded-full px-10 font-bold text-sm lg:text-md py-4 lg:py-4 lg:px-5'
          onClick={() => setModalIsOpen(true)}
        >
          Back this project
        </button>
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: 'rgba(0,0,0,0.7)',
            },
            content: { color: 'gray', width: '80vw', margin: 'auto' },
          }}
        >
          <div className='flex justify-end items-start sticky top-10 right-0'>
            <button
              className='p-1 rounded-full border-2'
              onClick={() => setModalIsOpen(false)}
            >
              ❌
            </button>
          </div>

          <h1 className='text-xl lg:text-4xl font-bold m-1 lg:mx-8 lg:mt-8 lg:mb-6'>
            Back this project
          </h1>
          <p className='m-1 text-sm lg:text-xl lg:mx-8'>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <InputRadio
            radio='radio1'
            quantityLeft={bamboo.totalQuantity - bamboo.quantitySold}
          >
            <PopupContent
              name={volunteer.name}
              amount={volunteer.amount}
              description={volunteer.description}
              onClick={onClickNew}
            />
          </InputRadio>
          <InputRadio
            radio='radio2'
            quantityLeft={bamboo.totalQuantity - bamboo.quantitySold}
          >
            <PopupContent
              name={bamboo.name}
              amount={bamboo.amount}
              description={bamboo.description}
              totalQuantity={bamboo.totalQuantity}
              quantitySold={bamboo.quantitySold}
              onClick={onClickNew}
            />
          </InputRadio>
          <InputRadio
            radio='radio3'
            quantityLeft={black.totalQuantity - black.quantitySold}
          >
            <PopupContent
              name={black.name}
              amount={black.amount}
              description={black.description}
              totalQuantity={black.totalQuantity}
              quantitySold={black.quantitySold}
              onClick={onClickNew}
            />
          </InputRadio>
          <InputRadio
            radio='radio4'
            quantityLeft={mahogany.totalQuantity - mahogany.quantitySold}
          >
            <PopupContent
              name={mahogany.name}
              amount={mahogany.amount}
              description={mahogany.description}
              totalQuantity={mahogany.totalQuantity}
              quantitySold={mahogany.quantitySold}
              onClick={onClickNew}
            />
          </InputRadio>
        </Modal>
        <div id='bookmark' className='flex items-center'>
          <div id='icon' className='mr-neg15 z-0'>
            <svg
              width='56'
              height='56'
              xmlns='http://www.w3.org/2000/svg'
              onClick={bookmarkHandler}
            >
              <g fill='none' fillRule='evenodd'>
                <circle
                  fill={isActive ? 'hsl(176, 72%, 28%)' : '#2F2F2F'}
                  cx='28'
                  cy='28'
                  r='28'
                />
                <path
                  fill={isActive ? '#fff' : '#B1B1B1'}
                  d='M23 19v18l5-5.058L33 37V19z'
                />
              </g>
            </svg>
          </div>
          <button
            id='text'
            className={
              isActive
                ? 'rounded-r-full py-3 px-6 -ml-5 font-bold hidden md:block text-cyan-dark bg-gray-200'
                : 'rounded-r-full py-3 px-6 -ml-5 font-bold hidden md:block bg-gray-300'
            }
            onClick={bookmarkHandler}
          >
            {bookmark}
          </button>
        </div>
      </div>
    </>
  )
}

export default CardHero
