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
                                    <Dropdown.Item key={bandeja.id} className='option' onSelect={() => props.setValues.setBandeja(bandeja)}>
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
                                {isEmpty(props.values.massa) ? <p className='placeholder'> Selecione a massa </p> : clearString(props.values.massa.nome)}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='select-options'>

                                {!isEmpty(data) ? data.massas.map((massa) => (
                                    <Dropdown.Item key={massa.id} className='option' onSelect={() => props.setValues.setMassa(massa)}>
                                        <p>{massa.nome}</p>
                                        <p>R$ {massa.preco}</p>
                                    </Dropdown.Item>
                                )) : null}
                                
                            </Dropdown.Menu>

                        </Dropdown>

                    </Form.Group>

                </Tab>

                <Tab className='tab' eventKey="sabor1" title="Sabor Primario">

                    <Form.Group controlId="mainForm.ControlSelect3">

                        <Form.Label className='label'>Sabor Primario</Form.Label>

                        <Dropdown bsPrefix='select'>

                            <Dropdown.Toggle className='selected'>
                                {isEmpty(props.values.sabor1) ? <p className='placeholder'> Selecione o primeiro sabor </p> : clearString(props.values.sabor1.nome)}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='select-options'>

                                {!isEmpty(data) ? data.sabores.map((sabor1) => (
                                    <Dropdown.Item key={sabor1.id} className='option' onSelect={() => props.setValues.setSabor1(sabor1)}>
                                        <p>{sabor1.nome}</p>
                                        <p>R$ {sabor1.preco}</p>
                                    </Dropdown.Item>
                                )) : null}
                                
                            </Dropdown.Menu>

                        </Dropdown>

                    </Form.Group>

                </Tab>

                <Tab className='tab' eventKey="sabor2" title="Sabor Secundario">

                    <Form.Group controlId="mainForm.ControlSelect4">

                        <Form.Label className='label'>Sabor Secundario</Form.Label>

                        <Dropdown bsPrefix='select'>

                            <Dropdown.Toggle className='selected'>
                                {isEmpty(props.values.sabor2) ? <p className='placeholder'> Selecione o segundo sabor </p> : clearString(props.values.sabor2.nome)}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='select-options'>

                                {!isEmpty(data) ? data.sabores.map((sabor2) => (
                                    <Dropdown.Item key={sabor2.id} className='option' onSelect={() => props.setValues.setSabor2(sabor2)}>
                                        <p>{sabor2.nome}</p>
                                        <p>R$ {sabor2.preco}</p>
                                    </Dropdown.Item>
                                )) : null}
                                
                            </Dropdown.Menu>

                        </Dropdown>

                    </Form.Group>

                </Tab>

                <Tab className='tab' eventKey="cobertura" title="Cobertura">

                    <Form.Group controlId="mainForm.ControlSelect5">

                        <Form.Label className='label'>Cobertura</Form.Label>

                        <Dropdown bsPrefix='select'>

                            <Dropdown.Toggle className='selected'>
                                {isEmpty(props.values.cobertura) ? <p className='placeholder'> Selecione a cobertura </p> : clearString(props.values.cobertura.nome)}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='select-options'>

                                {!isEmpty(data) ? data.coberturas.map((cobertura) => (
                                    <Dropdown.Item key={cobertura.id} className='option' onSelect={() => props.setValues.setCobertura(cobertura)}>
                                        <p>{cobertura.nome}</p>
                                        <p>R$ {cobertura.preco}</p>
                                    </Dropdown.Item>
                                )) : null}
                                
                            </Dropdown.Menu>

                        </Dropdown>

                    </Form.Group>

                </Tab>

                <Tab className='tab' eventKey="confeito" title="Confeitos">

                    <Form.Group controlId="mainForm.ControlSelect6">

                        <Form.Label className='label'>Confeito</Form.Label>

                        <Dropdown bsPrefix='select'>

                            <Dropdown.Toggle className='selected'>
                                {isEmpty(props.values.confeito) ? <p className='placeholder'> Selecione os confeitos </p> : clearString(props.values.confeito.nome)}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='select-options'>

                                {!isEmpty(data) ? data.confeitos.map((confeito) => (
                                    <Dropdown.Item key={confeito.id} className='option' onSelect={() => props.setValues.setConfeito(confeito)}>
                                        <p>{confeito.nome}</p>
                                        <p>R$ {confeito.preco}</p>
                                    </Dropdown.Item>
                                )) : null}
                                
                            </Dropdown.Menu>

                        </Dropdown>

                    </Form.Group>

                </Tab>

            </Tabs>

        </Form>
    )
}