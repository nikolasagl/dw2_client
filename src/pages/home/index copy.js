import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Tab from 'react-bootstrap/Tab'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'

import logo from '../../assets/logo.png'

import './styles.css'

function Home() {

    const [bandeja, setBandeja] = useState({ value: '' })
    const [massa, setMassa] = useState({ value: '' })
    const [saborPrimario, setSaborPrimario] = useState({ value: '' })
    const [saborSecundario, setSaborSecundario] = useState({ value: '' })
    const [cobertura, setCobertura] = useState({ value: '' })
    const [confeito, setConfeito] = useState({ value: '' })

    return (
        <Container className='main-container' fluid={true}>

            <Row className='header'>
                <Col className='logo' sm={true}>
                    <img src={logo} alt='logo' />
                </Col>
                <Col>
                    <div className='menu'>
                        <button>Quem Somos</button>
                        <button>Como Funciona</button>
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
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col sm={3}>
                                        <Nav className='navigation' variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link className='nav-btn' eventKey="primeiro">Bandeja</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='nav-btn' eventKey="segundo">Massa</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='nav-btn' eventKey="terceiro">Sabor 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='nav-btn' eventKey="quarto">Sabor 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='nav-btn' eventKey="quinto">Cobertura</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className='nav-btn' eventKey="sexto">Confeitos</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col sm={9}>
                                        <Tab.Content>

                                            <Tab.Pane eventKey="primeiro">
                                                <Form.Group controlId="mainForm.ControlSelect1">
                                                    <Form.Label>Bandeja</Form.Label>
                                                    <select className='form-control' value={bandeja} onChange={(e) => setBandeja({ value: e.target.value })}>
                                                        <option value='redonda-pequena'>Redonda Pequena</option>
                                                        <option value='redonda-grande'>Redonda Grande</option>
                                                        <option value='retangular-pequena'>Retangular Pequena</option>
                                                        <option value='retangular-grande'>Retangular Grande</option>
                                                    </select>
                                                </Form.Group>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="segundo">
                                                <Form.Group controlId="mainForm.ControlSelect1">
                                                    <Form.Label>Massa</Form.Label>
                                                    <select className='form-control' value={massa} onChange={(e) => setMassa({ value: e.target.value })}>
                                                        <option value='redonda-pequena'>Redonda Pequena</option>
                                                        <option value='redonda-grande'>Redonda Grande</option>
                                                        <option value='retangular-pequena'>Retangular Pequena</option>
                                                        <option value='retangular-grande'>Retangular Grande</option>
                                                    </select>
                                                </Form.Group>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="terceiro">
                                                <Form.Group controlId="mainForm.ControlSelect1">
                                                    <Form.Label>Sabor Primario</Form.Label>
                                                    <select className='form-control' value={saborPrimario} onChange={(e) => setSaborPrimario({ value: e.target.value })}>
                                                        <option value='redonda-pequena'>Redonda Pequena</option>
                                                        <option value='redonda-grande'>Redonda Grande</option>
                                                        <option value='retangular-pequena'>Retangular Pequena</option>
                                                        <option value='retangular-grande'>Retangular Grande</option>
                                                    </select>
                                                </Form.Group>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="quarto">
                                                <Form.Group controlId="mainForm.ControlSelect1">
                                                    <Form.Label>Sabor Secundario</Form.Label>
                                                    <select className='form-control' value={saborSecundario} onChange={(e) => setSaborSecundario({ value: e.target.value })}>
                                                        <option value='redonda-pequena'>Redonda Pequena</option>
                                                        <option value='redonda-grande'>Redonda Grande</option>
                                                        <option value='retangular-pequena'>Retangular Pequena</option>
                                                        <option value='retangular-grande'>Retangular Grande</option>
                                                    </select>
                                                </Form.Group>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="quinto">
                                                <Form.Group controlId="mainForm.ControlSelect1">
                                                    <Form.Label>Cobertura</Form.Label>
                                                    <select className='form-control' value={cobertura} onChange={(e) => setCobertura({ value: e.target.value })}>
                                                        <option value='redonda-pequena'>Redonda Pequena</option>
                                                        <option value='redonda-grande'>Redonda Grande</option>
                                                        <option value='retangular-pequena'>Retangular Pequena</option>
                                                        <option value='retangular-grande'>Retangular Grande</option>
                                                    </select>
                                                </Form.Group>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="sexto">
                                                <Form.Group controlId="mainForm.ControlSelect1">
                                                    <Form.Label>Confeito</Form.Label>
                                                    <select className='form-control' value={confeito} onChange={(e) => setConfeito({ value: e.target.value })}>
                                                        <option value='redonda-pequena'>Redonda Pequena</option>
                                                        <option value='redonda-grande'>Redonda Grande</option>
                                                        <option value='retangular-pequena'>Retangular Pequena</option>
                                                        <option value='retangular-grande'>Retangular Grande</option>
                                                    </select>
                                                </Form.Group>
                                            </Tab.Pane>

                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Form>
                    </Card.Body>

                    <Card.Footer className='card-footer'>Aqui os botoes</Card.Footer>
                </Card>
            </Row>

        </Container>
    )
}

export default Home