
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";



const Navbar = () => {
  return <nav className=' mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center font-bold text-2xl'>
        <h1>PORTFOLIO</h1>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/rajveer-choubisa-65b982249/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Rajveerchoubisa">
        <FaGithub />
        </a>
        <a href="https://www.instagram.com/rv_ranveer__?igsh=ZnYzMDdkcHR6a2pu&utm_source=qr">
        <FaInstagram />
        </a>
        <a href="https://x.com/RajveerChoubisa">
        <BsTwitterX />
        </a>
    </div>
  </nav>
};

export default Navbar;

