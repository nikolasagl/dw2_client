import React from 'react'

import FormTab from '../../components/formTab/index'
import OrderResume from '../../components/orderResume/index'

import './styles.css'

export default function HomeForm(props) {

    return (
        <div className='home-box'>

            <div className='box-title'>
                <h1>Monte Seu Bolo</h1>
            </div>

            <div className='box-content'>

                <OrderResume states={props.states} />

                <form onSubmit={props.handleSubmit}>

                    <FormTab
                        className='form-tab'
                        isVisible={props.states.bandeja.isVisible}
                        label='Escolha o formato e tamanho da bandeja!'
                        value={props.states.bandeja.value}
                        handleChange={(e) => props.handleStateChange('bandeja', 1, e.target.value)}
                        options={[
                            { value: '', label: 'Selecione a bandeja' },
                            { value: 'redonda-pequena', label: 'Redonda Pequena' },
                            { value: 'retangular-pequena', label: 'Retangular Pequena' },
                            { value: 'redonda-grande', label: 'Redonda Grande' },
                            { value: 'retangular-grande', label: 'Retangular Grande' }]} />

                    <FormTab
                        className='form-tab'
                        isVisible={props.states.massa.isVisible}
                        label='Escolha o sabor da massa!'
                        value={props.states.massa.value}
                        handleChange={(e) => props.handleStateChange('massa', 1, e.target.value)}
                        options={[
                            { value: '', label: 'Selecione a massa' },
                            { value: 'chocolate', label: 'Chocolate' },
                            { value: 'baunilha', label: 'Baunilha' },
                            { value: 'morango', label: 'Morango' }]} />

                    <FormTab
                        className='form-tab'
                        isVisible={props.states.saborPrimario.isVisible}
                        label='Escolha o sabor primario do recheio!'
                        value={props.states.saborPrimario.value}
                        handleChange={(e) => props.handleStateChange('saborPrimario', 1, e.target.value)}
                        options={[
                            { value: '', label: 'Selecione o primeiro sabor' },
                            { value: 'chocolate', label: 'Chocolate' },
                            { value: 'baunilha', label: 'Baunilha' },
                            { value: 'morango', label: 'Morango' }]} />

                    <FormTab
                        className='form-tab'
                        isVisible={props.states.saborSecundario.isVisible}
                        label='Escolha o sabor secundario do recheio!'
                        value={props.states.saborSecundario.value}
                        handleChange={(e) => props.handleStateChange('saborSecundario', 1, e.target.value)}
                        options={[
                            { value: '', label: 'Selecione o segundo sabor' },
                            { value: 'chocolate', label: 'Chocolate' },
                            { value: 'baunilha', label: 'Baunilha' },
                            { value: 'morango', label: 'Morango' }]} />

                    <FormTab
                        className='form-tab'
                        isVisible={props.states.cobertura.isVisible}
                        label='Escolha o sabor da cobertura!'
                        value={props.states.cobertura.value}
                        handleChange={(e) => props.handleStateChange('cobertura', 1, e.target.value)}
                        options={[
                            { value: '', label: 'Selecione uma Cobertura' },
                            { value: 'chocolate', label: 'Chocolate' },
                            { value: 'baunilha', label: 'Baunilha' },
                            { value: 'morango', label: 'Morango' }]} />

                    <FormTab
                        className='form-tab'
                        isVisible={props.states.confeito.isVisible}
                        label='Escolha os confeitos!'
                        value={props.states.confeito.value}
                        handleChange={(e) => props.handleStateChange('confeito', 1, e.target.value)}
                        options={[
                            { value: '', label: 'Selecione o Confeito' },
                            { value: 'granulado', label: 'Granulado' },
                            { value: 'pacoca', label: 'Paçoca' }]} />

                </form>

            </div>

            <div className='box-navigation'>

                <button className='tab' onClick={() => { props.handleStateChange('bandeja', 2) }}>Bandeja</button>

                <button className='tab' onClick={() => { props.handleStateChange('massa', 2) }}>Massa</button>

                <button className='tab' onClick={() => { props.handleStateChange('saborPrimario', 2) }}>Sabor 1</button>

                <button className='tab' onClick={() => { props.handleStateChange('saborSecundario', 2) }}>Sabor 2</button>

                <button className='tab' onClick={() => { props.handleStateChange('cobertura', 2) }}>Cobertura</button>

                <button className='tab' onClick={() => { props.handleStateChange('confeito', 2) }}>Confeitos</button>

            </div>

            {props.states.bandeja.value !== '' &&
                props.states.massa.value !== '' &&
                props.states.saborPrimario.value !== '' &&
                props.states.saborSecundario.value !== '' &&
                props.states.cobertura.value !== '' &&
                props.states.confeito.value !== '' &&
                props.teste()}
        </div>

    )
}