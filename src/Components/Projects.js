import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import '../style/card.css';
import { NavLink } from 'react-router-dom';
import projectItems from './projectItems';
import Footer from './Footer';

const Projects = () => {
    return (

        <div style={{ backgroundColor: '#392A46', height: "100vh" }}>
            <Container fluid className='p-0 m-0' style={{ backgroundColor: '#392A46' }}>
                <Row className='d-flex justify-content-center  mx-0'>
                    {Object.entries(projectItems).map(([key, project]) => (
                        <NavLink key={key} to={"/projects/" + key} className='col-3 m-4 bgImage' style={{ color: "black", textDecorationLine: "none", padding: "0px" }}>
                            <Card className='acard shadow' style={{ width: "21vw", border: "none", backgroundColor: "#1F1926" }}>
                                <Card.Img src={project.mainImg} alt='project' style={{ minHeight: "15vw", maxHeight: "15vw" }} />
                                <Card.Body>
                                    <Card.Title style={{ height: "4.5vw", color: "#BCA1D4", fontSize: "1.7vw" }}>{project.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </NavLink>
                    ))}

                </Row>
            </Container>
            <Footer />
        </div>

    );
}

export default Projects;
