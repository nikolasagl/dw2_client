import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './styles.css'

function Admin(props) {

    return (

        <Container className='admin-index-container'>

            <Row>

                <Col className='admin-header'>
                    HEADER
                </Col>

            </Row>

        </Container>
    )
}

export default Admin