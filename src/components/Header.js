import { Link } from 'react-router-dom'
import logo from '../images/image-hero-mobile.jpg'
import crowdfund from '../images/logo.svg'
const Header = () => {
  return (
    <div>
      <div id='hero' className='w-full h-80'>
        <nav className='flex justify-between items-center py-8 md:py-14 px-5'>
          <div className='logo'>
            <Link to='/'>
              <img src={crowdfund} alt='' />
            </Link>
          </div>
          <div className='text-white text-2xl md:hidden text-right'>☰</div>

          <ul
            id='navTouch'
            className='text-sm w-56 justify-evenly hidden md:flex'
          >
            <li className='text-white hover:text-gray-300'>
              <Link to='/about'>About</Link>
            </li>
            <li className='text-white hover:text-gray-300'>
              <Link to='/discover'>Discover</Link>
            </li>
            <li className='text-white hover:text-gray-300'>
              <Link to='/started'>Get Started</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
