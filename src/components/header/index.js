import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'


import './styles.css'

export default function Header() {

    return (
        <Row className='header'>
            <Col className='logo' sm={true}>
                <img src={logo} alt='logo' />
            </Col>
            <Col>
                <div className='menu'>
                    <a href='' target="_blank"><FaWhatsapp /></a>
                    <a href='https://instagram.com' target="_blank"><FaInstagram /></a>
                    <a href='https://facebook.com' target="_blank"><FaFacebookF /></a>
                    <button onClick={handleShowModalQuemSomos}>Quem Somos</button>
                    <button onClick={handleShowModalComoFunciona}>Como Funciona</button>
                </div>
            </Col>
        </Row>
    )
}