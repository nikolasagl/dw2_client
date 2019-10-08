import React, { useState, useEffect } from 'react'

import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

import api from '../../../services/api'

import styles from './styles.module.css'

function Admin(props) {

    const [data, setData] = useState({})

    useEffect(() => {
        fetchData()
    }, [])
    
    async function fetchData() {
        const response = await api.get('/admin')

        const data = response.data
        console.log(data)

        setData({})
    }

    return (

        <div className={styles.container}>

            <div>
                <Col className={styles.header}>
                    HEADER
                </Col>
            </div>

            <div className={styles.content}>

                <div className={styles.pedidos}>

                    <div className={styles.search}>
                        <h4>teste</h4>
                        <h4>asdasd</h4>
                        <h4>teaea</h4>
                        <h4>tasdasd</h4>
                    </div>


                    <Table striped bordered hover className={styles.table}>

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

                        </tbody>

                    </Table>

                </div>

            </div>

        </div>
    )
}

export default Admin