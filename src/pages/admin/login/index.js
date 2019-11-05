import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

import { login } from '../../../services/auth'

import './styles.css'

function Admin(props) {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        const logged = await login({ email, senha })

        if (logged) {
            props.history.push('/admin')
        } else {
            console.log('falha no login')
        }
    }

    function handleRegister(e) {
        e.preventDefault()

        props.history.push('/admin/register')
    }

    return (

        <Container fluid={true} className='admin-container'>

            <div className='admin-login-container'>

                <Form>

                    <Card className='admin-card-admin'>

                        <Card.Header className='admin-card-header'>
                            <div>LOGIN</div>
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
                                    <Form.Label className='admin-label'>Senha</Form.Label>
                                    <input className='form-control' type='password' value={senha} onChange={(e) => setSenha(e.target.value)}></input>
                                </Form.Group>
                            </Form.Row>

                        </Card.Body>

                        <Card.Footer className='admin-card-footer'>
                            <button className='btn btn-default admin-login-btn' type='submit' onClick={(e) => handleSubmit(e)}>Entrar</button>
                            <button className='btn btn-default admin-login-btn' type='submit' onClick={(e) => handleRegister(e)}>Registrar</button>
                        </Card.Footer>

                    </Card>

                </Form>

            </div>

        </Container>
    )
}

export default Admin