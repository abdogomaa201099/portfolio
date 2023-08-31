import { MdOutlineMailOutline } from 'react-icons/md';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { Container } from 'react-bootstrap';
import { FaKaggle } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container fluid style={{ backgroundColor: "#392A46" }}>
            <div className='d-flex flex-column align-items-center pt-3'>
                <div className='flex-row'>
                    <a className='p-2' style={{ color: '#BCA1D4' }} href='https://www.linkedin.com/in/abdelrahman-gomaa-3379b1209/'><BsLinkedin size={50} /></a>
                    <a className='p-2' style={{ color: '#BCA1D4' }} href='https://wa.me/601137741835'><BsWhatsapp size={55} /></a>
                    <a className='p-2' style={{ color: '#BCA1D4' }} href='mailto:abdogomaa201099@gmail.com'><MdOutlineMailOutline size={65} /></a>

                </div>
                <div className='flex-row mt-4'>
                    <p style={{ color: '#BCA1D4' }}>@ 2023 Abd0AI</p>
                </div>
            </div>
        </Container>
    );
}

export default Footer;
