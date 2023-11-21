import react from 'react'   
import './navbar.css'

   const Navbar = () => {
        return (
            <div className='home-page'>
                <div className='hero flex flex-col'>
                    <div className='header'>
                        <img src='./logo-no-background.png' className='logoimg'></img>
                        <nav>
                            <a href='./about'>About Us</a>
                        </nav>
                    </div>
                </div>
            </div>
        );
  };

export default Navbar