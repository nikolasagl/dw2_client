import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import api from '../../../services/api'

import './styles.css'

export default function ModalShow(props) {

    const [data, setData] = useState({})

    useEffect(() => {

        if (props.pedido != 0) {
            fetchData()
        }
    }, [props.pedido])

    async function fetchData() {
        const response = await api.post('/admin/find', { id: props.pedido })

        const data = response.data

        setData(data[0])
    }

    console.log(data)

    return (

        <Modal size='xl' show={props.isVisible} onHide={props.handleClose}>

            <Modal.Header>{data.pessoa && <h3>Pedido {data.id} - Feito por: {data.pessoa.nome}</h3>}</Modal.Header>

            <Modal.Body>

                <div className='modalshow-body'>  
                    
                    <div>
                        <h5>Informações Gerais</h5>
                        
                        <div className='show-header modalshow-showheader'>
                            <div className='modalshow-resume'>
                                <p><b>Encomendado por:</b> {data.pessoa && data.pessoa.nome}</p>
                                <p><b>Data do Pedido: </b> {data.pessoa && data.data_pedido}</p>
                                <p><b>Data de Entrega: </b> {data.pessoa && data.data_entrega}</p>
                            </div>
                            <div className='modalshow-resume'>
                                <p><b>Peso do bolo: </b>{data.peso && data.peso}kg</p>
                                <p><b>Preço do pedido: </b>R${data.preco && data.preco}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5>Resumo Pedido</h5>

                        <ul>
                            <li><b>Bandeja: </b>{data.bandeja && data.bandeja.nome}</li>
                            <li><b>Massa: </b>{data.massa && data.massa.nome}</li>
                            <li><b>Sabor: </b>{data.sabor && data.sabor.nome}</li>
                            <li><b>Cobertura: </b>{data.cobertura && data.cobertura.nome}</li>
                            <li><b>Confeito: </b>{data.confeito && data.confeito.nome}</li>
                        </ul>

                    </div>

                    <div>
                        <h5>Dados de Entrega</h5>

                        <p><b>Endereço: </b>{data.pessoa && data.pessoa.endereco}, {data.pessoa && data.pessoa.numero}, {data.pessoa && data.pessoa.bairro}</p>
                        <p><b>Email: </b>{data.pessoa && data.pessoa.email}</p>
                        <p><b>Telefone: </b>{data.pessoa && data.pessoa.telefone}</p>

                    </div>
                </div>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Fechar
                </Button>
            </Modal.Footer>

        </Modal>

    )
}