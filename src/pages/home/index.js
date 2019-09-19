import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import logo from '../../assets/logo.png'

import './styles.css'

function Home() {

    const [key, setKey] = useState('bandeja');

    const [bandeja, setBandeja] = useState()
    const [massa, setMassa] = useState()
    const [sabor1, setSabor1] = useState()
    const [sabor2, setSabor2] = useState()
    const [cobertura, setCobertura] = useState()
    const [confeito, setConfeito] = useState()

    const [modal1, setModal1] = useState(false);

    const handleCloseModal1 = () => setModal1(false);
    const handleShowModal1 = () => setModal1(true);

    const [modal2, setModal2] = useState(true);

    const handleCloseModal2 = () => setModal2(false);
    const handleShowModal2 = () => setModal2(true);

    return (
        <div>

            <Container className='main-container' fluid={true}>

                <Modal show={modal1} onHide={handleCloseModal1}>

                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal1}>
                            Close
                    </Button>
                    </Modal.Footer>

                </Modal>

                <Modal show={modal2} onHide={handleCloseModal2}>

                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal2}>
                            Close
                    </Button>
                    </Modal.Footer>

                </Modal>

                <Row className='header'>
                    <Col className='logo' sm={true}>
                        <img src={logo} alt='logo' />
                    </Col>
                    <Col>
                        <div className='menu'>
                            <button onClick={handleShowModal1}>Quem Somos</button>
                            <button onClick={handleShowModal2}>Como Funciona</button>
                        </div>
                    </Col>
                </Row>

                <Row className='content'>
                    <Card className='card-content'>

                        <Card.Header className='card-header'>
                            <p>Monte Seu Bolo</p>
                        </Card.Header>

                        <Card.Body className='card-body'>
                            <Form>
                                <Tabs id="controlled-tab" activeKey={key} onSelect={k => setKey(k)}>

                                    <Tab className='tab' eventKey="bandeja" title="Bandeja">

                                        <Form.Group controlId="mainForm.ControlSelect1">

                                            <Form.Label>Bandeja</Form.Label>

                                            <select className='select form-control' value={bandeja} onChange={(e) => setBandeja(e.target.value)}>
                                                <option value='redonda-pequena'>Redonda Pequena</option>
                                                <option value='redonda-grande'>Redonda Grande</option>
                                                <option value='retangular-pequena'>Retangular Pequena</option>
                                                <option value='retangular-grande'>Retangular Grande</option>
                                            </select>

                                        </Form.Group>

                                    </Tab>

                                    <Tab className='tab' eventKey="massa" title="Massa">

                                        <Form.Group controlId="mainForm.ControlSelect2">

                                            <Form.Label>Massa</Form.Label>

                                            <select className='select form-control' value={massa} onChange={(e) => setMassa(e.target.value)}>
                                                <option value='redonda-pequena'>Redonda Pequena</option>
                                                <option value='redonda-grande'>Redonda Grande</option>
                                                <option value='retangular-pequena'>Retangular Pequena</option>
                                                <option value='retangular-grande'>Retangular Grande</option>
                                            </select>

                                        </Form.Group>

                                    </Tab>

                                    <Tab className='tab' eventKey="sabor1" title="Sabor Primario">

                                        <Form.Group controlId="mainForm.ControlSelect3">

                                            <Form.Label>Sabor Primario</Form.Label>

                                            <select className='select form-control' value={sabor1} onChange={(e) => setSabor1(e.target.value)}>
                                                <option value='redonda-pequena'>Redonda Pequena</option>
                                                <option value='redonda-grande'>Redonda Grande</option>
                                                <option value='retangular-pequena'>Retangular Pequena</option>
                                                <option value='retangular-grande'>Retangular Grande</option>
                                            </select>

                                        </Form.Group>

                                    </Tab>

                                    <Tab className='tab' eventKey="sabor2" title="Sabor Secundario">

                                        <Form.Group controlId="mainForm.ControlSelect4">

                                            <Form.Label>Sabor Secundario</Form.Label>

                                            <select className='select form-control' value={sabor2} onChange={(e) => setSabor2(e.target.value)}>
                                                <option value='redonda-pequena'>Redonda Pequena</option>
                                                <option value='redonda-grande'>Redonda Grande</option>
                                                <option value='retangular-pequena'>Retangular Pequena</option>
                                                <option value='retangular-grande'>Retangular Grande</option>
                                            </select>

                                        </Form.Group>

                                    </Tab>

                                    <Tab className='tab' eventKey="cobertura" title="Cobertura">

                                        <Form.Group controlId="mainForm.ControlSelect5">

                                            <Form.Label>Cobertura</Form.Label>

                                            <select className='select form-control' value={cobertura} onChange={(e) => setCobertura(e.target.value)}>
                                                <option value='redonda-pequena'>Redonda Pequena</option>
                                                <option value='redonda-grande'>Redonda Grande</option>
                                                <option value='retangular-pequena'>Retangular Pequena</option>
                                                <option value='retangular-grande'>Retangular Grande</option>
                                            </select>

                                        </Form.Group>

                                    </Tab>

                                    <Tab className='tab' eventKey="confeito" title="Confeitos">

                                        <Form.Group controlId="mainForm.ControlSelect6">

                                            <Form.Label>Confeito</Form.Label>

                                            <select className='select form-control' value={confeito} onChange={(e) => setConfeito(e.target.value)}>
                                                <option value='redonda-pequena'>Redonda Pequena</option>
                                                <option value='redonda-grande'>Redonda Grande</option>
                                                <option value='retangular-pequena'>Retangular Pequena</option>
                                                <option value='retangular-grande'>Retangular Grande</option>
                                            </select>

                                        </Form.Group>

                                    </Tab>

                                </Tabs>

                            </Form>

                        </Card.Body>

                        <Card.Footer className='card-footer'>
                            <div className='order-resume'>
                                <div className='resume-cell'><p>Bandeja: <em>{bandeja}</em></p></div>
                                <div className='resume-cell'><p>Massa: <em>{massa}</em></p></div>
                                <div className='resume-cell'><p>Sabor Primario: <em>{sabor1}</em></p></div>
                                <div className='resume-cell'><p>Sabor Secundario: <em>{sabor2}</em></p></div>
                                <div className='resume-cell'><p>Cobertura: <em>{cobertura}</em></p></div>
                                <div className='resume-cell'><p>Confeitos: <em>{confeito}</em></p></div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Row>

            </Container>

            <Container>
                <h1>asdubasoidbasd</h1>
            </Container>
        </div>

    )
}

export default Home