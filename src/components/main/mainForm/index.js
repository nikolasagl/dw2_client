import React, { useState, useEffect } from 'react'

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import Slider from 'react-slick'

import api from '../../../services/api'

import testeImg from '../../../assets/img/teste.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css'

import { isEmpty } from '../../../helpers/mainHelper'

export default function MainForm(props) {

    const [data, setData] = useState({});
    const [key, setKey] = useState('peso');

    const settings = {
        dots: false,
        className: "center custom-slider",
        infinite: true,
        slidesToShow: 1,
        speed: 500
    }

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

                <Tab className='tab' eventKey="peso" title="Peso">

                    <Form.Group controlId="mainForm.ControlSelect4">

                        <Form.Label className='label'>Peso</Form.Label>

                        <Dropdown bsPrefix='select'>

                            <Dropdown.Toggle className='selected'>
                                <div>{props.values.peso} kg</div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='select-options'>

                                {[1, 2, 3].map((peso) => (
                                    <Dropdown.Item key={peso} className='option' onSelect={() => (props.setValues.setPeso(peso))}>
                                        <p>{peso}kg</p>
                                        <p>Preço: Bolo x {peso}</p>
                                    </Dropdown.Item>
                                ))}

                            </Dropdown.Menu>

                        </Dropdown>

                    </Form.Group>

                </Tab>

                <Tab className='tab' eventKey="forma" title="Forma">

                    <Form.Group controlId="mainForm.ControlSelect1">

                        <Form.Label className='label'>Forma</Form.Label>

                        <Slider {...settings}>
                            {!isEmpty(data) ? data.formas.map((forma) => (
                                <div key={forma.id} className='' onClick={() => {
                                    props.setValues.setForma(forma)
                                    props.setValues.setPreco({ ...props.values.preco, forma: forma.preco })
                                }}>
                                    <img className='slider-item' src={testeImg} alt='teste' />
                                    <p>{forma.nome}</p>
                                    <p>Preço: R$ {forma.preco}</p>
                                </div>
                            )) : null}
                        </Slider>

                    </Form.Group>

                </Tab>

                <Tab className='tab' eventKey="massa" title="Massa">

                    <Form.Group controlId="mainForm.ControlSelect2">

                        <Form.Label className='label'>Massa</Form.Label>

                        <Slider {...settings}>
                            {!isEmpty(data) ? data.massas.map((massa) => (
                                <div key={massa.id} className='' onClick={() => {
                                    props.setValues.setMassa(massa)
                                    props.setValues.setPreco({ ...props.values.preco, massa: massa.preco })
                                }}>
                                    <img className='slider-item' src={testeImg} alt='teste' />
                                    <p>{massa.nome}</p>
                                    <p>Preço: R$ {massa.preco}</p>
                                </div>
                            )) : null}
                        </Slider>

                    </Form.Group>

                </Tab>

                <Tab className='tab' eventKey="sabor" title="Sabor">

                    <Form.Group controlId="mainForm.ControlSelect3">

                        <Form.Label className='label'>Sabor</Form.Label>

                        <Slider {...settings}>
                            {!isEmpty(data) ? data.sabores.map((sabor) => (
                                <div key={sabor.id} className='' onClick={() => {
                                    props.setValues.setSabor(sabor)
                                    props.setValues.setPreco({ ...props.values.preco, sabor: sabor.preco })
                                }}>
                                    <img className='slider-item' src={testeImg} alt='teste' />
                                    <p>{sabor.nome}</p>
                                    <p>Preço: R$ {sabor.preco}</p>
                                </div>
                            )) : null}
                        </Slider>

                    </Form.Group>

                </Tab>

                <Tab className='tab' eventKey="cobertura" title="Cobertura">

                    <Form.Group controlId="mainForm.ControlSelect5">

                        <Form.Label className='label'>Cobertura</Form.Label>

                        <Slider {...settings}>
                            {!isEmpty(data) ? data.coberturas.map((cobertura) => (
                                <div key={cobertura.id} className='' onClick={() => {
                                    props.setValues.setCobertura(cobertura)
                                    props.setValues.setPreco({ ...props.values.preco, cobertura: cobertura.preco })
                                }}>
                                    <img className='slider-item' src={testeImg} alt='teste' />
                                    <p>{cobertura.nome}</p>
                                    <p>Preço: R$ {cobertura.preco}</p>
                                </div>
                            )) : null}
                        </Slider>

                    </Form.Group>

                </Tab>

                <Tab className='tab' eventKey="confeito" title="Confeitos">

                    <Form.Group controlId="mainForm.ControlSelect6">

                        <Form.Label className='label'>Confeito</Form.Label>

                        <Slider {...settings}>
                            {!isEmpty(data) ? data.confeitos.map((confeito) => (
                                <div key={confeito.id} className='' onClick={() => {
                                    props.setValues.setConfeito(confeito)
                                    props.setValues.setPreco({ ...props.values.preco, confeito: confeito.preco })
                                }}>
                                    <img className='slider-item' src={testeImg} alt='teste' />
                                    <p>{confeito.nome}</p>
                                    <p>Preço: R$ {confeito.preco}</p>
                                </div>
                            )) : null}
                        </Slider>

                    </Form.Group>

                </Tab>

            </Tabs>

        </Form>
    )
}