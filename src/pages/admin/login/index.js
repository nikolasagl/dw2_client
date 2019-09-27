import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

import './styles.css'

function Admin(props) {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
        // aqui api call para login
        e.preventDefault()

        localStorage.setItem('@username', login)
        sessionStorage.setItem('@password', password)

        props.history.push('/admin/index')
    }

    return (

        <Container fluid={true} className='admin-container'>

            <div className='login-container'>

                <Form>

                    <Card className='card-admin'>

                        <Card.Header className='admin-card-header'>
                            <div>LOGIN</div>
                        </Card.Header>

                        <Card.Body className='admin-card-body'>

                            <Form.Row className='form-row'>
                                <Form.Group className='col-md-12'>
                                    <Form.Label>LOGIN</Form.Label>
                                    <input className='text-input' type='text' value={login} onChange={(e) => setLogin(e.target.value)}></input>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row className='form-row'>
                                <Form.Group className='col-md-12'>
                                    <Form.Label>SENHA</Form.Label>
                                    <input className='text-input' type='text' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                                </Form.Group>
                            </Form.Row>

                        </Card.Body>

                        <Card.Footer className='admin-card-footer'>
                            <button className='btn btn-default login-btn' type='submit' onClick={(e) => handleSubmit(e)}>Entrar</button>
                        </Card.Footer>

                    </Card>

                </Form>

            </div>

        </Container>
    )
}

export default Admin