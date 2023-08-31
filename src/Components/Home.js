import React, { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { HiDocument } from 'react-icons/hi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaKaggle } from 'react-icons/fa';
import resume from "../assets/documents/Abdelrahman_Gomaa_Mohamed_Resume.pdf";
import Footer from './Footer';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleCloseModal = () => {
        setIsOpen(false); // Set isOpen state to false to close the modal
    };


    return (
        <div>

            <Container fluid style={{ backgroundColor: "#392A46" }}>
                <div id="particles-js"></div>

                <script src="particles.js"></script>
                <Container fluid variant="primary" style={{ height: "calc(100vh - 56px)" }} className='d-flex align-items-center justify-content-center'>
                    <div className='d-flex justify-content-center'>
                        <div className='flex-col'>
                            <div className='flex-row text-center' style={{ color: "#BCA1D4" }}>
                                <h1 className='display-1 fst-normal'>Hi, I'am Abdelrahman</h1>
                            </div>
                            <div className='flex-row text-center fst-italic' style={{ color: "#BCA1D4" }}>
                                <h4>A Machine Learning Engineer with a passion<br /> for learning and developing</h4>
                            </div>
                            <div className='flex-row text-center mt-4'>
                                <a className='p-2' style={{ color: "#BCA1D4" }} href='https://github.com/abdogomaa201099'><BsGithub size={30} /></a>
                                <a className='p-2' style={{ color: "#BCA1D4" }} href='https://www.kaggle.com/abdelrahmangomaa'><FaKaggle size={30} /></a>
                                <a className='p-2' style={{ color: "#BCA1D4", cursor: 'pointer' }} onClick={() => { setIsOpen(true); }}><HiDocument size={35} /></a>
                            </div>
                        </div>
                    </div>
                </Container>
            </Container>
            <Container fluid className='pt-3' style={{ height: "calc(100vh)", fontFamily: "math", backgroundColor: "#BCA1D4" }}>
                <div className='d-flex justify-content-center'>
                    <p style={{ fontSize: "50px", color: "#392A46" }}>Skills</p>
                </div>
                <div className='d-flex' style={{ paddingLeft: "20%", color: "#1F1926" }}>
                    <div className='flex-col'>
                        <p className='fs-1'>Machine Learning</p>
                        <p className='fs-4' style={{ color: '#1F1926' }}>Sikit Learn, Pandas, Matplotlib, Numpy</p>
                        <p className='fs-1 pt-3'>Deep Learning</p>
                        <p className='fs-4' style={{ color: '#1F1926' }}>Tensorflow, Keras, CNN, Object Detection</p>
                        <p className='fs-1 pt-3'>Front End</p>
                        <p className='fs-4' style={{ color: '#1F1926' }}>HTML, CSS, Bootstrap, React</p>
                        <p className='fs-1 pt-3'>Languages</p>
                        <p className='fs-4' style={{ color: '#1F1926' }}>C/C++, Java, Python, PHP</p>
                    </div>
                </div>
            </Container>

            <Modal
                show={isOpen}
                onClose={handleCloseModal}
            >
                <div className="modal-content" style={{ height: "500px", border: "none" }}>
                    <iframe
                        title="file"
                        style={{ width: '100%', height: '100%' }}
                        src={resume}
                    />
                    <Button className='rounded-0' style={{ backgroundColor: "red", border: "none" }} onClick={handleCloseModal}>Close</Button>
                </div>
            </Modal>

            <Footer />

        </div>

    );
}

export default Home;
