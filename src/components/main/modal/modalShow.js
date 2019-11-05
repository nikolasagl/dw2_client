import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import api from '../../../services/api'

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

                <div>  
                    
                    <div>
                        <h5>Informações Gerais</h5>
                        
                        <div className='show-header'>
                            <p><b>Encomendado por:</b> {data.pessoa && data.pessoa.nome}</p>
                            <p><b>Encomendado em: </b> {data.pessoa && data.data_pedido}</p>
                            <p><b>Encomendado para: </b> {data.pessoa && data.data_entrega}</p>
                        </div>
                    </div>

                    {/* <p>{data.}</p>
                    <p>{data.}</p>
                    <p>{data.}</p>
                    <p>{data.}</p>
                    <p>{data.}</p> */}
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