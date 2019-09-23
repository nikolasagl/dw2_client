import React, { useState, useEffect } from 'react'

import Container from 'react-bootstrap/Container'

import ModalQuemSomos from '../../components/modal/modalQuemSomos'
import ModalComoFunciona from '../../components/modal/modalComoFunciona'
import Header from '../../components/header'
import Content from '../../components/content'
import Contact from '../../components/contact'

import './styles.css'

function Home() {

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

    const [modalComoFunciona, setModalComoFunciona] = useState(false);
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

    function handleSubmit() {
        console.log({bandeja, massa, sabor1, sabor2, cobertura, confeito, nome, endereco, numero, bairro, telefone})
    }

    useEffect(() => {
        console.log('asjdnakdnas;djbaidjbasi')
    }, [])

    return (
        <div>

            <Container className='main-container' fluid={true}>

                <ModalQuemSomos isVisible={modalQuemSomos} handleClose={handleCloseModalQuemSomos} />
                <ModalComoFunciona isVisible={modalComoFunciona} handleClose={handleCloseModalComoFunciona} />

                <Header handleShowModalQuemSomos={handleShowModalQuemSomos} handleShowModalComoFunciona={handleShowModalComoFunciona} />

                <Content
                    cardHeaderTitle='Monte seu Bolo'
                    values={{ bandeja, massa, sabor1, sabor2, cobertura, confeito }}
                    setValues={{ setBandeja, setMassa, setSabor1, setSabor2, setCobertura, setConfeito }}
                    display={{ displayBandeja, displayMassa, displaySabor1, displaySabor2, displayCobertura, displayConfeito }}
                    setDisplay={{ setDisplayBandeja, setDisplayMassa, setDisplaySabor1, setDisplaySabor2, setDisplayCobertura, setDisplayConfeito }} />

            </Container>

            <Container bsPrefix='contact-container'>

                <Contact
                    values={{ nome, endereco, numero, bairro, telefone }}
                    setValues={{ setNome, setEndereco, setNumero, setBairro, setTelefone }}
                    submit={handleSubmit} />

            </Container>
        </div>

    )
}

export default Home