import React, { useState, useEffect } from 'react'

import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'

import api from '../../../services/api'
import { getToken } from '../../../services/auth'

import { FaSistrix, FaEdit, FaRegWindowClose, FaSearchengin } from 'react-icons/fa'

import styles from './styles.module.css'

function Admin(props) {

    const [pedidos, setPedidos] = useState({})
    const [search, setSearch] = useState({})
    const [query, setQuery] = useState({
        id: '',
        nome: '',
        preco: '',
        data_pedido: '',
        data_entrega: '',
        status: ''
    })

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const token = getToken()

        const response = await api.get('/admin', { headers: { Authorization: token } })

        const { data } = response.data

        setPedidos(data)
        setSearch(data)
    }

    function searchEngine(e) {
        e.preventDefault()

        console.log(query)
    }

    function setQueryId(value) {
        setQuery(query => ({...query, id: value}))
    }

    function setQueryNome(value) {
        setQuery(query => ({...query, nome: value}))
    }

    function setQueryPreco(value) {
        setQuery(query => ({...query, preco: value}))        
    }

    function setQueryDataPedido(value) {
        setQuery(query => ({...query, data_pedido: value}))        
    }

    function setQueryDataEntrega(value) {
        setQuery(query => ({...query, data_entrega: value}))        
    }

    function setQueryStatus(value) {
        setQuery(query => ({...query, status: value}))        
    }

    return (

        <div className={styles.container}>

            <div>
                <Col className={styles.header}>
                </Col>
            </div>

            <div className={styles.content}>

                <div className={styles.pedidos}>

                    <div className={styles.search}>

                        <Form>

                            <Form.Row>

                                <Form.Group className='col-md-3'>
                                    <Form.Label>Id</Form.Label>
                                    <input type='text' className='form-control' value={query.id} onChange={(e) => setQueryId(e.target.value)}></input>
                                </Form.Group>

                                <Form.Group className='col-md-7'>
                                    <Form.Label>Nome</Form.Label>
                                    <input type='text' className='form-control' value={query.nome} onChange={(e) => setQueryNome(e.target.value)}></input>
                                </Form.Group>

                                <Form.Group className='col-md-2'>
                                    <Form.Label>Preço</Form.Label>
                                    <input type='text' className='form-control' value={query.preco} onChange={(e) => setQueryPreco(e.target.value)}></input>
                                </Form.Group>

                            </Form.Row>

                            <Form.Row>
                                
                                <Form.Group className='col-md-4'>
                                    <Form.Label>Data Pedido</Form.Label>
                                    <input type='text' className='form-control' value={query.data_pedido} onChange={(e) => setQueryDataPedido(e.target.value)}></input>
                                </Form.Group>

                                <Form.Group className='col-md-4'>
                                    <Form.Label>Data Entrega</Form.Label>
                                    <input type='text' className='form-control' value={query.data_entrega} onChange={(e) => setQueryDataEntrega(e.target.value)}></input>
                                </Form.Group>

                                <Form.Group className='col-md-3'>
                                    <Form.Label>Status</Form.Label>
                                    <input type='text' className='form-control' value={query.status} onChange={(e) => setQueryStatus(e.target.value)}></input>
                                </Form.Group>

                                <Form.Group className='col-md-1'>
                                    <button className={styles.searchBtn} onClick={(e) => searchEngine(e)}><FaSearchengin />Buscar</button>
                                </Form.Group>

                            </Form.Row>

                        </Form>

                    </div>

                    <Table bordered hover className={styles.table}>

                        <thead className={styles.tableHeader}>
                            <tr>
                                <th>#</th>
                                <th>Cliente</th>
                                <th>Data do Pedido</th>
                                <th>Data de Entrega</th>
                                <th>Preço</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>

                            { search.length > 0 && Object.keys(search).map(function (key, index) {
                                return (
                                    <tr key={key}>
                                        <td>{search[key].id}</td>
                                        <td>{search[key].pessoa.nome}</td>
                                        <td>{search[key].data_pedido}</td>
                                        <td>{search[key].data_entrega}</td>
                                        <td>{search[key].preco}</td>
                                        <td>{search[key].status.nome}</td>
                                        <td>
                                            <button className={`${styles.actionBtn} ${styles.showBtn}`}><FaSistrix color='white' /></button>
                                            <button className={`${styles.actionBtn} ${styles.editBtn}`}><FaEdit color='white' /></button>
                                            <button className={`${styles.actionBtn} ${styles.deleteBtn}`}><FaRegWindowClose color='white' /></button>
                                        </td>
                                    </tr>
                                )
                            }) }
                    
                        </tbody>

                    </Table>

                </div>

            </div>

        </div>
    )
}

export default Admin