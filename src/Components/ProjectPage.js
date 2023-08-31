import React, { useState } from 'react';
import { Container, Button, Row, Card, Modal } from 'react-bootstrap';
import { useParams } from "react-router-dom"
import '../style/video.css';
import projectItems from './projectItems';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaKaggle } from 'react-icons/fa';
import { MdOndemandVideo } from 'react-icons/md';
import Carousel from 'react-bootstrap/Carousel';



const ProjectPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    let params = useParams()
    return (
        <Container fluid style={{ backgroundColor: "" }}>  {/* color to be used #BCA1D4 */}
            <Row className='d-flex justify-content-center '>
                <div className='d-flex flex-column justify-content-center align-items-center mt-4'>
                    <h2 className='row-12 pb-3' style={{ color: "#392A46" }}>{projectItems[params.id].title}</h2>
                    <p className='col-6' style={{ color: "#1F1926" }}>
                        <span style={{ textAlign: "justify" }}>{projectItems[params.id].disc}</span>
                        <br /><br />
                        <span>The project development steps:</span>
                        <ul style={{}}>
                            {projectItems[params.id].steps.map((step) =>
                                <li style={{ textAlign: "justify" }}>{step}</li>
                            )}
                        </ul>
                    </p>
                </div>
                {projectItems[params.id].img ?
                    <div className='col-6 m-1' href='#' style={{ color: "black", textDecorationLine: "none", padding: "0px" }}>
                        <Carousel variant='light' >
                            {projectItems[params.id].img.map((img, index) => (
                                <Carousel.Item key={index}>
                                    <img className="d-block w-100" style={{ minHeight: "40vh", maxHeight: "40vh" }} src={img[0]} alt="slide 1" />
                                    <Carousel.Caption >
                                        <p className='' style={{ color: "#E0FFFF", fontSize: "13px", fontWeight: "900", fontFamily: "sans-serif", textShadow: "2px 2px 10px black" }}>{img[1]}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div> : ""
                }

                {/* #FFFAFA  E0FFFF*/}

                <div className='d-flex justify-content-center'>
                    <p className='d-flex align-items-baseline'>
                        <div style={{ color: "#392A46" }} className='pe-1 fs-2'>Skills:</div>
                        <div style={{ color: "#1F1926" }} >{projectItems[params.id].skills}</div>
                    </p>
                </div>
                <div className='d-flex justify-content-center mt-0 mb-4'>
                    {projectItems[params.id].embedId ?
                        <a className='p-2' style={{ color: "#8A34FA" }} onClick={handleOpenModal} href='#'><MdOndemandVideo size={35} /></a>
                        : ""
                    }
                    {projectItems[params.id].githubLink ?
                        <a className='p-2' style={{ color: "#8A34FA" }} href={projectItems[params.id].githubLink}><BsGithub size={30} /></a>
                        : ""
                    }
                    {projectItems[params.id].kaggleLink ?
                        <a className='p-2' style={{ color: "#8A34FA" }} href={projectItems[params.id].kaggleLink}><FaKaggle size={30} /></a>
                        : ""
                    }

                </div>
            </Row>
            <Modal
                show={isOpen}
                onClose={handleCloseModal}
            >
                <div className="modal-content" style={{ border: "none" }}>
                    <div className="video-responsive">
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${projectItems[params.id].embedId}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </div>
                    <Button className='rounded-0 m-0' style={{ backgroundColor: "red", border: "none" }} onClick={handleCloseModal}>Close</Button>
                </div>
            </Modal>
        </Container>
    );
}

export default ProjectPage;