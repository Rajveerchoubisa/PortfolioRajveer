
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';



const Navbar = () => {
  return <nav className=' mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center font-bold text-2xl'>
        <h1>PORTFOLIO</h1>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
    </div>
  </nav>
};

export default Navbar;

