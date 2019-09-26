import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'

import ModalQuemSomos from '../../components/modal/modalQuemSomos'
import ModalComoFunciona from '../../components/modal/modalComoFunciona'
import Header from '../../components/header'
import Content from '../../components/content'
import Contact from '../../components/contact'

import api from '../../services/api'

import './styles.css'

function Home() {

    const [bandeja, setBandeja] = useState({})
    const [massa, setMassa] = useState({})
    const [sabor1, setSabor1] = useState({})
    const [sabor2, setSabor2] = useState({})
    const [cobertura, setCobertura] = useState({})
    const [confeito, setConfeito] = useState({})

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [endereco, setEndereco] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [complemento, setComplemento] = useState('')
    const [telefone, setTelefone] = useState('')
    const [dataEntrega, setDataEntrega] = useState('')

    const [preco, setPreco] = useState({
        bandeja: 0,
        massa: 0,
        sabor1: 0,
        sabor2: 0,
        cobertura: 0,
        confeito: 0
    })

    const [total, setTotal] = useState(0)

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

    
    async function handleSubmit() {
        var aux = 0
        
        Object.keys(preco).map((key) => {
            aux += preco[key]
        });
        setTotal(10)

        const data = {
            bandeja: bandeja.id,
            massa: massa.id,
            sabor1: sabor1.id,
            sabor2: sabor2.id,
            cobertura: cobertura.id,
            confeito: confeito.id,
            nome,
            email,
            endereco,
            numero,
            bairro,
            complemento,
            telefone,
            data_entrega: dataEntrega,
            preco: total
        }

        console.log(data)

        // const response = await api.post('/', data)
        // console.log(response.data)
    }

    return (
        <div>

            <Container className='main-container' fluid={true}>

                <ModalQuemSomos isVisible={modalQuemSomos} handleClose={handleCloseModalQuemSomos} />
                <ModalComoFunciona isVisible={modalComoFunciona} handleClose={handleCloseModalComoFunciona} />

                <Header handleShowModalQuemSomos={handleShowModalQuemSomos} handleShowModalComoFunciona={handleShowModalComoFunciona} />

                <Content
                    cardHeaderTitle='Monte seu Bolo'
                    values={{ bandeja, massa, sabor1, sabor2, cobertura, confeito, preco }}
                    setValues={{ setBandeja, setMassa, setSabor1, setSabor2, setCobertura, setConfeito, setPreco }}
                    display={{ displayBandeja, displayMassa, displaySabor1, displaySabor2, displayCobertura, displayConfeito }}
                    setDisplay={{ setDisplayBandeja, setDisplayMassa, setDisplaySabor1, setDisplaySabor2, setDisplayCobertura, setDisplayConfeito }} />

            </Container>

            <Container bsPrefix='contact-container'>

                <Contact
                    values={{ nome, email, endereco, numero, bairro, complemento, telefone, dataEntrega, preco }}
                    setValues={{ setNome, setEmail, setEndereco, setNumero, setBairro, setComplemento, setTelefone, setDataEntrega }}
                    submit={handleSubmit} />

            </Container>
        </div>

    )
}

export default Home