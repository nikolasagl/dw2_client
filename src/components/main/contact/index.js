import React from 'react'

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

import './styles.css'

export default function Contact(props) {

    return (
        <Card className='contact-card'>
            <Card.Header className='contact-header'>
                <p>Finalize seu Pedido</p>
            </Card.Header>

            <Card.Body>

                <Form className='contact-form'>

                    <Form.Row className='form-row'>
                        <Form.Group className='col-md-12'>
                            <input className='text-input' type='text' value={props.values.nome} onChange={(e) => props.setValues.setNome(e.target.value)}></input>
                            <Form.Label className='contact-label'>NOME</Form.Label>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className='form-row'>
                        <Form.Group className='col-md-12'>
                            <input className='text-input' type='email' value={props.values.email} onChange={(e) => props.setValues.setEmail(e.target.value)}></input>
                            <Form.Label className='contact-label'>E-MAIL</Form.Label>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className='form-row'>
                        <Form.Group className='col-md-10'>
                            <input className='text-input' type='text' value={props.values.endereco} onChange={(e) => props.setValues.setEndereco(e.target.value)}></input>
                            <Form.Label className='contact-label'>ENDEREÇO DE ENTREGA</Form.Label>
                        </Form.Group>

                        <Form.Group className='col-md-2'>
                            <input className='text-input' type='number' value={props.values.numero} onChange={(e) => props.setValues.setNumero(e.target.value)}></input>
                            <Form.Label className='contact-label'>NUMERO</Form.Label>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className='form-row'>
                        <Form.Group className='col-md-12'>
                            <input className='text-input' type='text' value={props.values.bairro} onChange={(e) => props.setValues.setBairro(e.target.value)}></input>
                            <Form.Label className='contact-label'>BAIRRO</Form.Label>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className='form-row'>
                        <Form.Group className='col-md-12'>
                            <input className='text-input' type='text' value={props.values.complemento} onChange={(e) => props.setValues.setComplemento(e.target.value)}></input>
                            <Form.Label className='contact-label'>COMPLEMENTO</Form.Label>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className='form-row'>
                        <Form.Group className='col-md-12'>
                            <input className='text-input' type='text' value={props.values.telefone} onChange={(e) => props.setValues.setTelefone(e.target.value)}></input>
                            <Form.Label className='contact-label'>TELEFONE</Form.Label>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className='form-row'>
                        <Form.Group className='col-md-12'>
                            <input className='text-input' type='date' value={props.values.dataEntrega} onChange={(e) => props.setValues.setDataEntrega(e.target.value)}></input>
                            <Form.Label className='contact-label'>DATA DE ENTREGA</Form.Label>
                        </Form.Group>
                    </Form.Row>

                </Form>

            </Card.Body>

            <Card.Footer className='contact-footer'>
                <button className='submit' onClick={props.submit}>Confirmar Pedido</button>
            </Card.Footer>
        </Card>
    )
}