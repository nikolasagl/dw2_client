import React, { useState, useEffect } from 'react'

import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'

import ModalShow from '../../../components/main/modal/modalShow'
import ModalEdit from '../../../components/main/modal/modalEdit'
import ModalDelete from '../../../components/main/modal/modalDelete'

import api from '../../../services/api'
import { getToken } from '../../../services/auth'

import { FaSistrix, FaEdit, FaRegWindowClose, FaSearchengin } from 'react-icons/fa'

import styles from './styles.module.css'
import './modalshow.css'

function Admin(props) {

    const [pedidos, setPedidos] = useState({})
    const [query, setQuery] = useState({
        id: '',
        nome: '',
        preco: '',
        data_pedido: '',
        data_entrega: '',
        status: ''
    })

    const [modalEdit, setModalEdit] = useState(false)
    const [modalShow, setModalShow] = useState(false)
    const [modalDelete, setModalDelete] = useState(false)
    const [pedidoShowId, setPedidoShowId] = useState(0)
    const [pedidoEditId, setPedidoEditId] = useState(0)
    const [pedidoDeleteId, setPedidoDeleteId] = useState(0)

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        Object.keys(query).map(element => {
            if (element !== '') {
                return
            }
        })
        fetchData()
    }, [query])

    async function fetchData() {
        const token = getToken()

        const response = await api.get('/admin', { headers: { Authorization: token } })

        const { data } = response.data

        setPedidos(data)
    }

    async function searchEngine(e) {
        e.preventDefault()

        const response = await api.post('/admin/search', query)

        setPedidos(response.data)
    }

    function setQueryId(value) {
        setQuery(query => ({ ...query, id: value }))
    }

    function setQueryNome(value) {
        setQuery(query => ({ ...query, nome: value }))
    }

    function setQueryPreco(value) {
        setQuery(query => ({ ...query, preco: value }))
    }

    function setQueryDataPedido(value) {
        setQuery(query => ({ ...query, data_pedido: value }))
    }

    function setQueryDataEntrega(value) {
        setQuery(query => ({ ...query, data_entrega: value }))
    }

    function setQueryStatus(value) {
        setQuery(query => ({ ...query, status: value }))
    }

    const handleCloseModalShow = () => setModalShow(false)
    const handleShowModalShow = () => setModalShow(true)

    const handleCloseModalEdit = () => setModalEdit(false)
    const handleShowModalEdit = () => setModalEdit(true)

    const handleCloseModalDelete = () => setModalDelete(false)
    const handleShowModalDelete = () => setModalDelete(true)

    return (

        <div className={styles.container}>

            <ModalShow isVisible={modalShow} pedido={pedidoShowId} handleClose={handleCloseModalShow} />
            <ModalEdit isVisible={modalEdit} pedido={pedidoEditId} handleClose={handleCloseModalEdit} />
            <ModalDelete isVisible={modalDelete} pedido={pedidoDeleteId} handleClose={handleCloseModalDelete} />

            <div>
                <Col className={styles.header}>
                </Col>
            </div>

            <div className={styles.content}>

                <div className={styles.pedidos}>

                    <div className={styles.search}>

                        <Form>

                            <Form.Row>

                                <div className='col-md-3'>
                                    <Form.Label>Id</Form.Label>
                                    <input type='text' className='form-control' value={query.id} onChange={(e) => setQueryId(e.target.value)}></input>
                                </div>

                                <div className='col-md-7'>
                                    <Form.Label>Nome</Form.Label>
                                    <input type='text' className='form-control' value={query.nome} onChange={(e) => setQueryNome(e.target.value)}></input>
                                </div>

                                <div className='col-md-2'>
                                    <Form.Label>Preço</Form.Label>
                                    <input type='text' className='form-control' value={query.preco} onChange={(e) => setQueryPreco(e.target.value)}></input>
                                </div>

                            </Form.Row>

                            <Form.Row>

                                <Form.Group className='col-md-4'>
                                    <Form.Label>Data Pedido</Form.Label>
                                    <input type='date' placeholder="MM/DD/AAAA" className='form-control' value={query.data_pedido} onChange={(e) => setQueryDataPedido(e.target.value)}></input>
                                </Form.Group>

                                <Form.Group className='col-md-4'>
                                    <Form.Label>Data Entrega</Form.Label>
                                    <input type='date' className='form-control' value={query.data_entrega} onChange={(e) => setQueryDataEntrega(e.target.value)}></input>
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

                            {pedidos.length > 0 && Object.keys(pedidos).map(function (key, index) {
                                return (
                                    <tr key={key}>
                                        <td>{pedidos[key].id}</td>
                                        <td>{pedidos[key].pessoa.nome}</td>
                                        <td>{pedidos[key].data_pedido}</td>
                                        <td>{pedidos[key].data_entrega}</td>
                                        <td>{pedidos[key].preco}</td>
                                        <td>{pedidos[key].status.nome}</td>
                                        <td>
                                            <button onClick={() => {handleShowModalShow(); setPedidoShowId(pedidos[key].id)}} className={`${styles.actionBtn} ${styles.showBtn}`}>
                                                <FaSistrix color='white' />
                                            </button>

                                            <button onClick={() => {handleShowModalEdit(); setPedidoEditId(pedidos[key].id)}} className={`${styles.actionBtn} ${styles.editBtn}`}>
                                                <FaEdit color='white' />
                                            </button>

                                            <button onClick={() => {handleShowModalDelete(); setPedidoDeleteId(pedidos[key].id)}} className={`${styles.actionBtn} ${styles.deleteBtn}`}>
                                                <FaRegWindowClose color='white' />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>

                    </Table>

                </div>

            </div>

        </div>
    )
}

export default Admin