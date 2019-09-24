import React, { useState, useEffect } from 'react'

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'

import api from '../../services/api'

import './styles.css'

import { clearString, isEmpty } from '../../helpers/mainHelper'

export default function MainForm(props) {

    const [data, setData] = useState({});
    const [key, setKey] = useState('bandeja');

    useEffect(() => {
        loadData()
    }, [])

    useEffect(() => {
        console.log(isEmpty(data))
        console.log(data.bandejas)
    }, [data])

    async function loadData() {
        const response = await api.get('/')

        const data = response.data

        setData(data)
    }

    return (
        <Form>  
            <Tabs id="controlled-tab" activeKey={key} onSelect={k => setKey(k)}>

                <Tab className='tab' eventKey="bandeja" title="Bandeja">

                    <Form.Group controlId="mainForm.ControlSelect1">

                        <Form.Label className='label'>Bandeja</Form.Label>

                        <Dropdown bsPrefix='select'>

                            <Dropdown.Toggle className='selected'>
                                {isEmpty(props.values.bandeja) ? <p className='placeholder'> Selecione a bandeja </p> : clearString(props.values.bandeja.nome)}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='select-options'>

                                {!isEmpty(data) ? data.bandejas.map((bandeja) => (
                                    <Dropdown.Item key={bandeja.id} className='option' onSelect={() => props.setValues.setBandeja(bandeja.id)}>
                                        <p>{bandeja.nome}</p>
                                        <p>R$ {bandeja.preco}</p>
                                    </Dropdown.Item>
                                )) : null}
                                
                            </Dropdown.Menu>

                        </Dropdown>

                    </Form.Group>

                </Tab>

                <Tab className='tab' eventKey="massa" title="Massa">

                    <Form.Group controlId="mainForm.ControlSelect2">

                        <Form.Label className='label'>Massa</Form.Label>

                        <Dropdown bsPrefix='select'>

                            <Dropdown.Toggle className='selected'>
                                {props.values.massa === '' ? <p className='placeholder'> Selecione a massa </p> : clearString(props.values.massa)}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='select-options'>
                                <Dropdown.Item className='option' onSelect={() => props.setValues.setMassa('redonda-pequena')}>
                                    <p>Redonda Pequena</p>
                                    <p>R$ 10,00</p>
                                </Dropdown.Item>

                                <Dropdown.Item className='option' onSelect={() => props.setValues.setMassa('redonda-grande')}>
                                    <p>Redonda Grande</p>
                                    <p>R$ 10,00</p>
                                </Dropdown.Item>

                                <Dropdown.Item className='option' onSelect={() => props.setValues.setMassa('retangular-pequena')}>
                                    <p>Retangular Pequena</p>
                                    <p>R$ 10,00</p>
                                </Dropdown.Item>

                                <Dropdown.Item className='option' onSelect={() => props.setValues.setMassa('retangular-grande')}>
                                    <p>Retangular Grande</p>
                                    <p>R$ 10,00</p>
                                </Dropdown.Item>
                            </Dropdown.Menu>

                        </Dropdown>

                    </Form.Group>

                </Tab>

                <Tab className='tab' eventKey="sabor1" title="Sabor Primario">

                    <Form.Group controlId="mainForm.ControlSelect3">

                        <Form.Label className='label'>Sabor Primario</Form.Label>

                        <Dropdown bsPrefix='select'>

                            <Dropdown.Toggle className='selected'>
                                {props.values.sabor1 === '' ? <p className='placeholder'> Selecione o primeiro sabor </p> : clearString(props.values.sabor1)}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='select-options'>
                                <Dropdown.Item className='option' onSelect={() => props.setValues.setSabor1('redonda-pequena')}>
                                    <p>Redonda Pequena</p>
                                    <p>R$ 10,00</p>
                                </Dropdown.Item>

                                <Dropdown.Item className='option' onSelect={() => props.setValues.setSabor1('redonda-grande')}>
                                    <p>Redonda Grande</p>
                                    <p>R$ 10,00</p>
                                </Dropdown.Item>

                                <Dropdown.Item className='option' onSelect={() => props.setValues.setSabor1('retangular-pequena')}>
                                    <p>Retangular Pequena</p>
                                    <p>R$ 10,00</p>
                                </Dropdown.Item>

                                <Dropdown.Item className='option' onSelect={() => props.setValues.setSabor1('retangular-grande')}>
                                    <p>Retangular Grande</p>
                                    <p>R$ 10,00</p>
                                </Dropdown.Item>
                            </Dropdown.Menu>

                        </Dropdown>

                    </Form.Group>

                </Tab>

                <Tab className='tab' eventKey="sabor2" title="Sabor Secundario">

                    <Form.Group controlId="mainForm.ControlSelect4">

                        <Form.Label className='label'>Sabor Secundario</Form.Label>

                        <Dropdown bsPrefix='select'>

                            <Dropdown.Toggle className='selected'>
                                {props.values.sabor2 === '' ? <p className='placeholder'> Selecione o segundo sabor </p> : clearString(props.values.sabor2)}                            
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='select-options'>
                                <Dropdown.Item className='option' onSelect={() => props.setValues.setSabor2('redonda-pequena')}>
                                    <p>Redonda Pequena</p>
                                    <p>R$ 10,00</p>
                                </Dropdown.Item>

                                <Dropdown.Item className='option' onSelect={() => props.setValues.setSabor2('redonda-grande')}>
                                    <p>Redonda Grande</p>
                                    <p>R$ 10,00</p>
                                </Dropdown.Item>

                                <Dropdown.Item className='option' onSelect={() => props.setValues.setSabor2('retangular-pequena')}>
                                    <p>Retangular Pequena</p>
                                    <p>R$ 10,00</p>
                                </Dropdown.Item>

                                <Dropdown.Item className='option' onSelect={() => props.setValues.setSabor2('retangular-grande')}>
                                    <p>Retangular Grande</p>
                                    <p>R$ 10,00</p>
                                </Dropdown.Item>
                            </Dropdown.Menu>

                        </Dropdown>

                    </Form.Group>

                </Tab>

                <Tab className='tab' eventKey="cobertura" title="Cobertura">

                    <Form.Group controlId="mainForm.ControlSelect5">

                        <Form.Label className='label'>Cobertura</Form.Label>

                        <Dropdown bsPrefix='select'>

                            <Dropdown.Toggle className='selected'>
                                {props.values.cobertura === '' ? <p className='placeholder'> Selecione a cobertura </p> : clearString(props.values.cobertura)}                            
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='select-options'>
                                <Dropdown.Item className='option' onSelect={() => props.setValues.setCobertura('redonda-pequena')}>
                                    <p>Redonda Pequena</p>
                                    <p>R$ 10,00</p>
                                </Dropdown.Item>

                                <Dropdown.Item className='option' onSelect={() => props.setValues.setCobertura('redonda-grande')}>
                                    <p>Redonda Grande</p>
                                    <p>R$ 10,00</p>
                                </Dropdown.Item>

                                <Dropdown.Item className='option' onSelect={() => props.setValues.setCobertura('retangular-pequena')}>
                                    <p>Retangular Pequena</p>
                                    <p>R$ 10,00</p>
                                </Dropdown.Item>

                                <Dropdown.Item className='option' onSelect={() => props.setValues.setCobertura('retangular-grande')}>
                                    <p>Retangular Grande</p>
                                    <p>R$ 10,00</p>
                                </Dropdown.Item>
                            </Dropdown.Menu>

                        </Dropdown>

                    </Form.Group>

                </Tab>

                <Tab className='tab' eventKey="confeito" title="Confeitos">

                    <Form.Group controlId="mainForm.ControlSelect6">

                        <Form.Label className='label'>Confeito</Form.Label>

                        <Dropdown bsPrefix='select'>

                            <Dropdown.Toggle className='selected'>
                                {props.values.confeito === '' ? <p className='placeholder'> Selecione o confeito </p> : clearString(props.values.confeito)}                                
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='select-options'>
                                <Dropdown.Item className='option' onSelect={() => props.setValues.setConfeito('redonda-pequena')}>
                                    <p>Redonda Pequena</p>
                                    <p>R$ 10,00</p>
                                </Dropdown.Item>

                                <Dropdown.Item className='option' onSelect={() => props.setValues.setConfeito('redonda-grande')}>
                                    <p>Redonda Grande</p>
                                    <p>R$ 10,00</p>
                                </Dropdown.Item>

                                <Dropdown.Item className='option' onSelect={() => props.setValues.setConfeito('retangular-pequena')}>
                                    <p>Retangular Pequena</p>
                                    <p>R$ 10,00</p>
                                </Dropdown.Item>

                                <Dropdown.Item className='option' onSelect={() => props.setValues.setConfeito('retangular-grande')}>
                                    <p>Retangular Grande</p>
                                    <p>R$ 10,00</p>
                                </Dropdown.Item>
                            </Dropdown.Menu>

                        </Dropdown>

                    </Form.Group>

                </Tab>

            </Tabs>

        </Form>
    )
}