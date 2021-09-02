import ButtonContent from './ButtonContent'

const Modal = () => {
  return (
    <div>
      <div
        className='modal fade'
        id='exampleModalLong'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalLongTitle'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5
                className='modal-title text-4xl font-bold '
                id='exampleModalLongTitle'
              >
                Back this project
              </h5>

              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <ButtonContent />
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
              <button type='button' className='btn btn-primary'>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
