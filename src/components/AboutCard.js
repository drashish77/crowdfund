import { useState } from 'react'
import Modal from 'react-modal'
import InputRadio from './InputRadio'
import pledges from './pledges'
import PopupContent from './PopupContent'

const AboutCard = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { name, amount, description, totalQuantity, quantitySold } = props
  let quantityLeft = totalQuantity && totalQuantity - quantitySold
  const onClickNew = (e) => {
    console.log('popupClicked')
  }
  return (
    <div className={quantityLeft ? 'opacity-100' : 'opacity-50'}>
      <div className=' bg-white border-2 rounded px-4 py-2 my-6'>
        <div className=''>
          <h1 className='text-md md:text-3xl font-bold pt-8'>{name}</h1>
          <h4 className='text-md text-cyan-moderate'>
            Pledge ${amount} or more
          </h4>
          <p className='text-gray-500 my-4'>{description}</p>
          <div className='lg:flex lg:justify-between'>
            <div
              // className='flex items-center'
              className={totalQuantity ? 'flex items-center' : 'hidden'}
            >
              <h1 className='text-3xl md:text-3xl font-bold mr-2'>
                {quantityLeft}
              </h1>
              <p className='text-sm text-gray-500'>left</p>
            </div>
            <button
              data-toggle='modal'
              data-target='#exampleModalLong'
              onClick={() => setModalIsOpen(true)}
              className={
                quantityLeft
                  ? 'cursor-pointer bg-cyan-moderate hover:bg-cyan-dark text-white rounded-full px-6 py-2 my-6'
                  : 'cursor-not-allowed bg-gray-400 text-white rounded-full px-6 py-2 my-6'
              }
            >
              {quantityLeft === 0 ? 'Out of Stock' : 'Select Reward'}
            </button>
          </div>
        </div>
      </div>
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
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <InputRadio
          quantityLeft={
            pledges.bamboo.totalQuantity - pledges.bamboo.quantitySold
          }
        >
          <PopupContent
            name={pledges.volunteer.name}
            amount={pledges.volunteer.amount}
            description={pledges.volunteer.description}
            onClick={onClickNew}
          />
        </InputRadio>
        <InputRadio
          quantityLeft={
            pledges.bamboo.totalQuantity - pledges.bamboo.quantitySold
          }
        >
          <PopupContent
            name={pledges.bamboo.name}
            amount={pledges.bamboo.amount}
            description={pledges.bamboo.description}
            totalQuantity={pledges.bamboo.totalQuantity}
            quantitySold={pledges.bamboo.quantitySold}
            onClick={onClickNew}
          />
        </InputRadio>
        <InputRadio
          quantityLeft={
            pledges.black.totalQuantity - pledges.black.quantitySold
          }
        >
          <PopupContent
            name={pledges.black.name}
            amount={pledges.black.amount}
            description={pledges.black.description}
            totalQuantity={pledges.black.totalQuantity}
            quantitySold={pledges.black.quantitySold}
            onClick={onClickNew}
          />
        </InputRadio>
        <InputRadio
          quantityLeft={
            pledges.mahogany.totalQuantity - pledges.mahogany.quantitySold
          }
        >
          <PopupContent
            name={pledges.mahogany.name}
            amount={pledges.mahogany.amount}
            description={pledges.mahogany.description}
            totalQuantity={pledges.mahogany.totalQuantity}
            quantitySold={pledges.mahogany.quantitySold}
            onClick={onClickNew}
          />
        </InputRadio>
      </Modal>
    </div>
  )
}

export default AboutCard
