import React, { useState } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import Wtechdoc from "../assets/documents/WTech_Recommendation_letter.pdf";
import Transcript from "../assets/documents/Transcript.pdf";
import schoolCertificate from "../assets/documents/schoolCertificate.pdf";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../style/vertical-timeline.css"
import { MdOutlineWorkOutline, MdOutlineSchool } from 'react-icons/md';
import Footer from './Footer';

const Experience = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [doc, setDoc] = useState(Wtechdoc);


    const handleOpenModal = (id) => {
        setIsOpen(true);
        switch (id) {
            case 1:
                setDoc(schoolCertificate)
                break;
            case 2:
                setDoc(Transcript)
                break;
            case 3:
                setDoc(Wtechdoc);
                break;
            default:
                console.log('Value is not exist');
        }


    };

    const handleCloseModal = () => {
        setIsOpen(false); // Set isOpen state to false to close the modal
    };


    return (
        <div>
            <Container fluid className='p-0 py-5' style={{ backgroundColor: "#392A46" }}>
                <div>
                    <VerticalTimeline lineColor="#8A34FA" style={{ backgroundColor: "#BCA1D4" }}>
                        <VerticalTimelineElement
                            className="vertical-timeline-element-subtitle"
                            onTimelineElementClick={() => handleOpenModal(1)}
                            iconOnClick={() => handleOpenModal(1)}
                            date="2015 - 2017"
                            contentArrowStyle={{ borderRight: "7px solid  #BCA1D4" }}
                            iconStyle={{ background: "#008A89", color: "#fff", cursor: 'pointer' }}
                            icon={<MdOutlineSchool />}
                            contentStyle={{ background: "#BCA1D4", boxShadow: "none", cursor: 'pointer' }}
                        >
                            <div>
                                <h3 className="vertical-timeline-element-title">
                                    Bilarab Bin Sultan School, Bahla, Oman
                                </h3>
                                <div className='d-flex flex-row pt-2'>
                                    <div className="vertical-timeline-element-subtitle col-11"> High School Diploma</div>
                                    <div className="vertical-timeline-element-subtitle justify-content-end"><i style={{ color: '#8A34FA' }}>More...</i> </div>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            onTimelineElementClick={() => handleOpenModal(2)}
                            iconOnClick={() => handleOpenModal(2)}
                            date="2018 - 2022"
                            contentArrowStyle={{ borderRight: "7px solid  #BCA1D4" }}
                            iconStyle={{ background: "#008A89", color: "#fff", cursor: 'pointer' }}
                            icon={<MdOutlineSchool />}
                            contentStyle={{ background: "#BCA1D4", boxShadow: "none", cursor: 'pointer' }}
                        >
                            <div style={{ cursor: 'pointer' }}>
                                <h3 className="vertical-timeline-element-title" >
                                    Universiti Teknologi Malaysia, Johor, Malaysia
                                </h3>
                                <h6 className="vertical-timeline-element-subtitle">
                                    Bachelor's Degree
                                </h6>
                                <div className='d-flex flex-row pt-2'>
                                    <div className="vertical-timeline-element-subtitle col-11"> Computer Science</div>
                                    <div className="vertical-timeline-element-subtitle justify-content-end"><i style={{ color: '#8A34FA' }}>More...</i> </div>
                                </div>
                            </div>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            onTimelineElementClick={() => handleOpenModal(3)}
                            iconOnClick={() => handleOpenModal(3)}
                            date="2022/3 - 2022/7"
                            contentArrowStyle={{ borderRight: "7px solid  #BCA1D4" }}
                            iconStyle={{ background: "#AA5500", color: "#fff", cursor: 'pointer' }}
                            icon={<MdOutlineWorkOutline />}
                            contentStyle={{ background: "#BCA1D4", boxShadow: "none", cursor: 'pointer' }}
                        >
                            <div style={{ cursor: 'pointer' }}>
                                <h3 className="vertical-timeline-element-title">
                                    Junior Software Engineer Internship - W Tech
                                </h3>
                                <div className='d-flex flex-row pt-2'>
                                    <div className="vertical-timeline-element-subtitle col-11"> Perak, Malaysia</div>
                                    <div className="vertical-timeline-element-subtitle justify-content-end"><i style={{ color: '#8A34FA' }}>More...</i> </div>
                                </div>


                            </div>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            date="2023 - Current"
                            contentArrowStyle={{ borderRight: "7px solid  #BCA1D4" }}
                            iconStyle={{ background: "#008A89", color: "#fff" }}
                            icon={<MdOutlineSchool />}
                            contentStyle={{ background: "#BCA1D4", boxShadow: "none" }}
                        >
                            <div>
                                <h3 className="vertical-timeline-element-title" >
                                    Universiti Malaya, Selangor, Malaysia
                                </h3>
                                <h6 className="vertical-timeline-element-subtitle">
                                    Master Degree
                                </h6>
                                <p className="vertical-timeline-element-subtitle"> Computer Science</p>
                            </div>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            date="2023 - Current"
                            contentArrowStyle={{ borderRight: "7px solid  #BCA1D4" }}
                            iconStyle={{ background: "#AA5500", color: "#fff" }}
                            icon={<MdOutlineWorkOutline />}
                            contentStyle={{ background: "#BCA1D4", boxShadow: "none" }}
                        >
                            <div>
                                <h3 className="vertical-timeline-element-title" >
                                    Research Assistant - UM
                                </h3>
                                <h6 className="vertical-timeline-element-subtitle">
                                    Selangor, Malaysia
                                </h6>
                                <p className="vertical-timeline-element-subtitle"> Artificial Intelligence (Deep Learning)</p>
                            </div>

                        </VerticalTimelineElement>

                    </VerticalTimeline>

                    <Modal
                        show={isOpen}
                        onClose={handleCloseModal}
                    >
                        <div className="modal-content" style={{ height: "500px", border: "none" }}>
                            <iframe
                                title="file"
                                style={{ width: '100%', height: '100%' }}
                                src={doc}
                            />
                            <Button className='rounded-0' style={{ backgroundColor: "red", border: "none" }} onClick={handleCloseModal}>Close</Button>
                        </div>
                    </Modal>
                </div>


            </Container>
            <Footer />
        </div>

    );
}

export default Experience;
