import { useContext, useState } from 'react'
import Modal from 'react-modal'
import { PledgeContext } from '../context/DataContext'
// import check from '../images/icon-check.svg'
import { customStyles } from './PopupStyle'
import Thanks from './Thanks'

const PopupContent = (props) => {
  const [isActive, setActive] = useState(false)
  const toggleCard = () => {
    setActive(true)
  }

  const {
    fundRequired,
    fundCollected,
    setFundCollected,
    totalBackers,
    settotalBackers,
    daysLeft,
  } = useContext(PledgeContext)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { name, amount, description, totalQuantity, quantitySold } = props
  let quantityLeft = totalQuantity && totalQuantity - quantitySold
  const [pledgeAmount, setPledgeAmount] = useState(amount)
  const onClickThanks = () => {
    console.log('thanks clicked')
  }
  const inputChangeHandler = (e) => {
    setPledgeAmount(e.target.value)

    // e.target.value >= pledgeAmount && setPledgeAmount(e.target.value)
  }
  const donationHandler = (e) => {
    setModalIsOpen(true)
    setFundCollected(fundCollected + +pledgeAmount)
    settotalBackers(totalBackers + 1)
  }
  const buttonOnClickHandler = () => {}
  return (
    <div className={quantityLeft !== 0 ? 'opacity-100' : 'opacity-50'}>
      <div className='bg-white'>
        <div className=''>
          <div className='modal' onClick={toggleCard}>
            <div className='modal-header'>
              <div className='flex justify-between items-start'>
                <div
                  className='flex flex-col text-left text-md lg:text-xl font-bold items-center lg:items-start lg:flex-row'
                  style={{ alignItems: 'start' }}
                >
                  <h1 className='m-0 lg:mr-4'>{name}</h1>
                  <h4 className='text-cyan-moderate'>
                    Pledge ${amount} or more
                  </h4>
                </div>
                <div
                  // className='flex items-center'
                  className={
                    totalQuantity ? 'hidden lg:flex items-center' : 'hidden'
                  }
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
              <div
                // className='flex items-center'
                className={
                  totalQuantity ? 'flex lg:hidden items-center' : 'hidden'
                }
              >
                <h1 className=' text-3xl md:text-3xl font-bold mr-2'>
                  {quantityLeft}
                </h1>
                <p className='text-sm text-gray-500'>left</p>
              </div>
              <div className='border-b'></div>
            </div>
            <div
              className={
                isActive
                  ? 'modal-footer flex flex-col lg:flex-row justify-between items-center mt-2 '
                  : 'hidden '
              }
            >
              <h4 className='text-md lg:text-xl text-gray-700'>
                Enter your pledge
              </h4>
              <div className='modal-footer-2 flex justify-between items-center items-center'>
                <div className='flex justify-center items-center border-4 rounded-full text-md lg:text-2xl py-1 lg:py-2  mr-8 border-cyan-dark w-24 lg:w-40 min-w-min'>
                  <label className=''>$</label>
                  <input
                    type='number'
                    name='price-input'
                    // min={amount}
                    value={pledgeAmount}
                    onChange={inputChangeHandler}
                    // className='pledge-input focus:outline-none focus:border-red-500'
                    className='focus:outline-none w-1/2 lg:w-4/6'
                    aria-label='Bamboo Stand Price Input'
                  />
                </div>

                <button
                  data-toggle='modal'
                  data-target='#exampleModalLong'
                  onClick={donationHandler}
                  disabled={quantityLeft === 0}
                  className={
                    quantityLeft
                      ? 'cursor-pointer bg-cyan-moderate hover:bg-cyan-dark text-white rounded-full p-2 my-2 lg:px-6 lg:py-4 lg:my-6 text -sm lg:text-xl'
                      : 'cursor-not-allowed bg-gray-400 text-white rounded-full p-2 my-2 lg:px-6 lg:py-4 lg:my-6 text -sm lg:text-xl'
                  }
                >
                  {quantityLeft === 0 ? 'Out of Stock' : 'Continue'}
                </button>
                <Modal
                  isOpen={modalIsOpen}
                  ariaHideApp={false}
                  onRequestClose={() => setModalIsOpen(false)}
                  style={customStyles}
                >
                  {/* <div className='flex justify-end items-start sticky top-10 right-0'>
                   
                  </div> */}
                  {/* <div className='flex flex-col justify-center items-center pt-5 m-auto'> */}
                  <Thanks setModalIsOpen={setModalIsOpen} />
                  {/* </div> */}
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopupContent
