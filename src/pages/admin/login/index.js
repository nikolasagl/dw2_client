import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

import { login } from '../../../services/auth'

import './styles.css'

function Admin(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        const logged = await login({ username, password })

        if (logged) {
            props.history.push('/admin/index')
        } else {
            console.log('falha no login')
        }
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
                                    <input className='text-input' type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row className='form-row'>
                                <Form.Group className='col-md-12'>
                                    <Form.Label>SENHA</Form.Label>
                                    <input className='text-input' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
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