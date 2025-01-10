import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { LOGO_URL } from '../utils/constants';

const Header = () => {

  const [btnName, setBtnName] = useState('login');

  useEffect(() => {
    console.log('use Effect is been called');
  }, [btnName])

  return (
    <div className="flex justify-between shadow-lg bg-blue-300 m-2">
      <div className="">
        <img className="w-56" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className='flex p-4 m-4'>
          <li className='px-4'><Link to="/">Home</Link></li>
          <li className='px-4' ><Link to="/about">About Us</Link></li>
          <li className='px-4' ><Link to="/contact">Contact Us</Link></li>
          <li className='px-4' ><Link to="/restaurants/food">Food</Link></li>
          <li className='px-4' >Cart</li>
          <li>
            <button className='' onClick={() => setBtnName('Logout')}>{btnName}</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

  export default Header;