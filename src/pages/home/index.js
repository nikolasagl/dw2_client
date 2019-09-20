import React, { useState } from 'react'

import { FaAngleDown, FaAngleUp, FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Form from 'react-bootstrap/Form'

import ModalQuemSomos from '../../components/modal/modalQuemSomos'
import ModalComoFunciona from '../../components/modal/modalComoFunciona'
import Header from '../../components/header'

import './styles.css'

function Home() {

    const [key, setKey] = useState('bandeja');

    const [bandeja, setBandeja] = useState('')
    const [massa, setMassa] = useState('')
    const [sabor1, setSabor1] = useState('')
    const [sabor2, setSabor2] = useState('')
    const [cobertura, setCobertura] = useState('')
    const [confeito, setConfeito] = useState('')

    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [telefone, setTelefone] = useState('')

    const [modalComoFunciona, setModalComoFunciona] = useState(true);
    const [modalQuemSomos, setModalQuemSomos] = useState(false);

    const [displayBandeja, setDisplayBandeja] = useState(false);
    const [displayMassa, setDisplayMassa] = useState(false);
    const [displaySabor1, setDisplaySabor1] = useState(false);
    const [displaySabor2, setDisplaySabor2] = useState(false);
    const [displayCobertura, setDisplayCobertura] = useState(false);
    const [displayConfeito, setDisplayConfeito] = useState(false);

    const handleCloseModalComoFunciona = () => setModalComoFunciona(false);
    const handleShowModalComoFunciona = () => setModalComoFunciona(true);

    const handleCloseModalQuemSomos = () => setModalQuemSomos(false);
    const handleShowModalQuemSomos = () => setModalQuemSomos(true);

    return (
        <div>

            <Container className='main-container' fluid={true}>
                
                <ModalQuemSomos isVisible={modalQuemSomos} handleClose={handleCloseModalQuemSomos} />
                <ModalComoFunciona isVisible={modalComoFunciona} handleClose={handleCloseModalComoFunciona} />

                <Header handleShowModalQuemSomos={handleShowModalQuemSomos} handleShowModalComoFunciona={handleShowModalComoFunciona} />

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

                                <div onClick={() => bandeja !== '' ? setDisplayBandeja(!displayBandeja) : {}} className='resume-cell'>
                                    <p>Bandeja: <em>{bandeja}</em>{bandeja !== '' ? displayBandeja === false ? <FaAngleDown className='icon' /> : <FaAngleUp className='icon' /> : null}</p>
                                    <span style={displayBandeja === false || bandeja === '' ? {display: 'none'} : null}>Descricao bandeja</span>
                                </div>

                                <div onClick={() => massa !== '' ? setDisplayMassa(!displayMassa) : {}} className='resume-cell'>
                                    <p>Massa: <em>{massa}</em>{massa !== '' ? displayMassa === false ? <FaAngleDown className='icon' /> : <FaAngleUp className='icon' /> : null}</p>                                    
                                    <span style={displayMassa === false || massa === '' ? {display: 'none'} : null}>Descricao massa</span>
                                </div>

                                <div onClick={() => sabor1 !== '' ? setDisplaySabor1(!displaySabor1) : {}} className='resume-cell'>
                                    <p>Sabor Primario: <em>{sabor1}</em>{sabor1 !== '' ? displaySabor1 === false ? <FaAngleDown className='icon' /> : <FaAngleUp className='icon' /> : null}</p>                                                                        
                                    <span style={displaySabor1 === false || sabor1 === '' ? {display: 'none'} : null}>Descricao sabor 1</span>
                                </div>

                                <div onClick={() => sabor2 !== '' ? setDisplaySabor2(!displaySabor2) : {}} className='resume-cell'>
                                    <p>Sabor Primario: <em>{sabor2}</em>{sabor2 !== '' ? displaySabor2 === false ? <FaAngleDown className='icon' /> : <FaAngleUp className='icon' /> : null}</p>                                                                        
                                    <span style={displaySabor2 === false || sabor2 === '' ? {display: 'none'} : null}>Descricao sabor 2</span>
                                </div>

                                <div onClick={() => cobertura !== '' ? setDisplayCobertura(!displayCobertura) : {}} className='resume-cell'>
                                    <p>Cobertura: <em>{cobertura}</em>{cobertura !== '' ? displayCobertura === false ? <FaAngleDown className='icon' /> : <FaAngleUp className='icon' /> : null}</p>                                                                                                        
                                    <span style={displayCobertura === false || cobertura === '' ? {display: 'none'} : null}>Descricao cobertura</span>
                                </div>

                                <div onClick={() => confeito !== '' ? setDisplayConfeito(!displayConfeito) : {}} className='resume-cell'>
                                    <p>Confeitos: <em>{confeito}</em>{confeito !== '' ? displayConfeito === false ? <FaAngleDown className='icon' /> : <FaAngleUp className='icon' /> : null}</p>                                                                                                                                            
                                    <span style={displayConfeito === false || confeito === '' ? {display: 'none'} : null}>Descricao confeitos</span>
                                </div>

                            </div>
                        </Card.Footer>
                    </Card>
                </Row>

            </Container>

            <Container bsPrefix='contact-container'>

                <Card className='contact-card'>
                    <Card.Header className='contact-header'>
                        <p>Finalize seu Pedido</p>
                    </Card.Header>

                    <Card.Body>

                        <Form className='contact-form'>

                            <Form.Row className='form-row'>
                                <Form.Group className='col-md-12'>
                                    <input className='text-input' type='text' value={nome} onChange={(e) => setNome(e.target.value)}></input>
                                    <Form.Label className='label'>NOME</Form.Label>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row className='form-row'>
                                <Form.Group className='col-md-10'>
                                    <input className='text-input' type='text' value={endereco} onChange={(e) => setEndereco(e.target.value)}></input>
                                    <Form.Label className='label'>ENDEREÇO DE ENTREGA</Form.Label>
                                </Form.Group>

                                <Form.Group className='col-md-2'>
                                    <input className='text-input' type='text' value={numero} onChange={(e) => setNumero(e.target.value)}></input>
                                    <Form.Label className='label'>NUMERO</Form.Label>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row className='form-row'>
                                <Form.Group className='col-md-12'>
                                    <input className='text-input' type='text' value={bairro} onChange={(e) => setBairro(e.target.telefone)}></input>
                                    <Form.Label className='label'>BAIRRO</Form.Label>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row className='form-row'>
                                <Form.Group className='col-md-12'>
                                    <input className='text-input' type='text' value={telefone} onChange={(e) => setTelefone(e.target.telefone)}></input>
                                    <Form.Label className='label'>TELEFONE</Form.Label>
                                </Form.Group>
                            </Form.Row>

                        </Form>

                    </Card.Body>

                    <Card.Footer className='contact-footer'>
                        <button className='submit' type='submit' onClick={() => {}}>Confirmar Pedido</button>
                    </Card.Footer>
                </Card>

            </Container>
        </div>

    )
}

export default Home