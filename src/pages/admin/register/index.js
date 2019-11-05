import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

import api from '../../../services/api'
import { login } from '../../../services/auth'

function Admin(props) {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        const response = await api.post('/admin/register', { email, username, password })     
        
        const data = response.data

        console.log(data)

        if (data.status) {
            const logged = await login({ username: data.username, password })

            if (logged) {
                props.history.push('/admin')
            } else {
                console.log('falha no login')
            }
        } else {
            console.log('falha no cadastro')
        }
    }

    return (

        <Container fluid={true} className='admin-container'>

            <div className='admin-login-container'>

                <Form>

                    <Card className='admin-card-admin'>

                        <Card.Header className='admin-card-header'>
                            <div>Registrar</div>
                        </Card.Header>

                        <Card.Body className='admin-card-body'>

                            <Form.Row className='form-row'>
                                <Form.Group className='col-md-12'>
                                    <Form.Label className='admin-label'>Email</Form.Label>
                                    <input className='form-control' type='text' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row className='form-row'>
                                <Form.Group className='col-md-12'>
                                    <Form.Label className='admin-label'>Login</Form.Label>
                                    <input className='form-control' type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row className='form-row'>
                                <Form.Group className='col-md-12'>
                                    <Form.Label className='admin-label'>Senha</Form.Label>
                                    <input className='form-control' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                                </Form.Group>
                            </Form.Row>

                        </Card.Body>

                        <Card.Footer className='admin-card-footer'>
                            <button className='btn btn-default admin-login-btn' type='submit' onClick={(e) => handleSubmit(e)}>Cadastrar</button>
                        </Card.Footer>

                    </Card>

                </Form>

            </div>

        </Container>
    )
}

export default Admin