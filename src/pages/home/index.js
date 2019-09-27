import React, { useState, useEffect } from 'react'

import Container from 'react-bootstrap/Container'

import ModalQuemSomos from '../../components/main/modal/modalQuemSomos'
import ModalComoFunciona from '../../components/main/modal/modalComoFunciona'
import Header from '../../components/main/header'
import Content from '../../components/main/content'
import Contact from '../../components/main/contact'

import api from '../../services/api'

import './styles.css'

function Home() {

    const [peso, setPeso] = useState(1)
    const [forma, setForma] = useState({})
    const [massa, setMassa] = useState({})
    const [sabor, setSabor] = useState({})
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
        forma: 0,
        massa: 0,
        sabor: 0,
        cobertura: 0,
        confeito: 0
    })

    const [totalParcial, setTotalParcial] = useState(0)
    const [total, setTotal] = useState(0)

    const [modalComoFunciona, setModalComoFunciona] = useState(false)
    const [modalQuemSomos, setModalQuemSomos] = useState(false)

    const [displayPeso, setDisplayPeso] = useState(false)
    const [displayForma, setDisplayForma] = useState(false)
    const [displayMassa, setDisplayMassa] = useState(false)
    const [displaySabor, setDisplaySabor] = useState(false)
    const [displayCobertura, setDisplayCobertura] = useState(false)
    const [displayConfeito, setDisplayConfeito] = useState(false)

    const handleCloseModalComoFunciona = () => setModalComoFunciona(false)
    const handleShowModalComoFunciona = () => setModalComoFunciona(true)

    const handleCloseModalQuemSomos = () => setModalQuemSomos(false)
    const handleShowModalQuemSomos = () => setModalQuemSomos(true)

    useEffect(() => {
        var aux = 0

        Object.keys(preco).map((key) => {
            aux += preco[key]
        })
        setTotalParcial(aux)
        setTotal(aux * peso)
    }, [preco, peso])
    
    async function handleSubmit() {

        const data = {
            forma: forma.id,
            massa: massa.id,
            sabor: sabor.id,
            peso: peso,
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

        const response = await api.post('/', data)
        console.log(response.data)
    }

    return (
        <div>

            <Container className='main-container' fluid={true}>

                <ModalQuemSomos isVisible={modalQuemSomos} handleClose={handleCloseModalQuemSomos} />
                <ModalComoFunciona isVisible={modalComoFunciona} handleClose={handleCloseModalComoFunciona} />

                <Header handleShowModalQuemSomos={handleShowModalQuemSomos} handleShowModalComoFunciona={handleShowModalComoFunciona} />

                <Content
                    cardHeaderTitle='Monte seu Bolo'
                    values={{ peso, forma, massa, sabor, cobertura, confeito, preco, totalParcial, total }}
                    setValues={{ setPeso, setForma, setMassa, setSabor, setCobertura, setConfeito, setPreco }}
                    display={{ displayPeso, displayForma, displayMassa, displaySabor, displayCobertura, displayConfeito }}
                    setDisplay={{ setDisplayPeso, setDisplayForma, setDisplayMassa, setDisplaySabor, setDisplayCobertura, setDisplayConfeito }} />

            </Container>

            <Container bsPrefix='contact-container'>

                <Contact
                    values={{ nome, email, endereco, numero, bairro, complemento, telefone, dataEntrega, preco, totalParcial, total }}
                    setValues={{ setNome, setEmail, setEndereco, setNumero, setBairro, setComplemento, setTelefone, setDataEntrega }}
                    submit={handleSubmit} />

            </Container>
        </div>

    )
}

export default Home