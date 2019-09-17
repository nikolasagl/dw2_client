import React, { useState } from 'react'

import FormTab from '../../components/formTab/index'

import './styles.css'

export default function HomeForm(props) {

    const [bandeja, setBandeja] = useState({ value: '', isVisible: false })
    const [massa, setMassa] = useState({ value: '', isVisible: false })
    const [saborPrimario, setSaborPrimario] = useState({ value: '', isVisible: false })
    const [saborSecundario, setSaborSecundario] = useState({ value: '', isVisible: false })
    const [cobertura, setCobertura] = useState({ value: '', isVisible: false })
    const [confeito, setConfeito] = useState({ value: '', isVisible: false })

    const onClick = function() {

    }

    function handleSubmit(e) {
        e.preventDefault()

        if (bandeja.value !== '' && massa.value !== '' && saborPrimario.value !== '' && saborSecundario.value !== '' && cobertura.value !== '' && confeito.value !== '' ) {
            console.log(bandeja, massa, saborPrimario, saborSecundario, cobertura, confeito)
        }
    }

    function resetVisible() {
        setBandeja({ ...bandeja, isVisible: false })
        setMassa({ ...massa, isVisible: false })
        setSaborPrimario({ ...saborPrimario, isVisible: false })
        setSaborSecundario({ ...saborSecundario, isVisible: false })
        setCobertura({ ...cobertura, isVisible: false })
        setConfeito({ ...confeito, isVisible: false })
    }

    return (
        <div className='teste'>
        <div className='home-box'>

            <div className='box-title'>
                <h1>Titulo Aqui</h1>
            </div>

            <div className='box-content'>

                <form onSubmit={handleSubmit}>

                    <FormTab
                        isVisible={bandeja.isVisible}
                        label='Escolha o formato e tamanho da bandeja!'
                        value={bandeja.value}
                        handleChange={(e) => setBandeja({ ...bandeja, value: e.target.value })}
                        options={[
                            { value: '', label: 'Selecione a bandeja' },
                            { value: 'redonda-pequena', label: 'Redonda Pequena' },
                            { value: 'retangular-pequena', label: 'Retangular Pequena' },
                            { value: 'redonda-grande', label: 'Redonda Grande' },
                            { value: 'retangular-grande', label: 'Retangular Grande' }]} />

                    <FormTab
                        isVisible={massa.isVisible}
                        label='Escolha o sabor da massa!'
                        value={massa.value}
                        handleChange={(e) => setMassa({ ...massa, value: e.target.value })}
                        options={[
                            { value: '', label: 'Selecione a massa' },
                            { value: 'chocolate', label: 'Chocolate' },
                            { value: 'baunilha', label: 'Baunilha' },
                            { value: 'morango', label: 'Morango' }]} />

                    <FormTab
                        isVisible={saborPrimario.isVisible}
                        label='Escolha o sabor primario do recheio!'
                        value={saborPrimario.value}
                        handleChange={(e) => setSaborPrimario({ ...saborPrimario, value: e.target.value })}
                        options={[
                            { value: '', label: 'Selecione o primeiro sabor' },
                            { value: 'chocolate', label: 'Chocolate' },
                            { value: 'baunilha', label: 'Baunilha' },
                            { value: 'morango', label: 'Morango' }]} />

                    <FormTab
                        isVisible={saborSecundario.isVisible}
                        label='Escolha o sabor secundario do recheio!'
                        value={saborSecundario.value}
                        handleChange={(e) => setSaborSecundario({ ...saborSecundario, value: e.target.value })}
                        options={[
                            { value: '', label: 'Selecione o segundo sabor' },
                            { value: 'chocolate', label: 'Chocolate' },
                            { value: 'baunilha', label: 'Baunilha' },
                            { value: 'morango', label: 'Morango' }]} />

                    <FormTab
                        isVisible={cobertura.isVisible}
                        label='Escolha o sabor da cobertura!'
                        value={cobertura.value}
                        handleChange={(e) => setCobertura({ ...cobertura, value: e.target.value })}
                        options={[
                            { value: '', label: 'Selecione uma Cobertura' },
                            { value: 'chocolate', label: 'Chocolate' },
                            { value: 'baunilha', label: 'Baunilha' },
                            { value: 'morango', label: 'Morango' }]} />

                    <FormTab
                        isVisible={confeito.isVisible}
                        label='Escolha os confeitos!'
                        value={confeito.value}
                        handleChange={(e) => setConfeito({ ...confeito, value: e.target.value })}
                        options={[
                            { value: '', label: 'Selecione o Confeito' },
                            { value: 'granulado', label: 'Granulado' },
                            { value: 'pacoca', label: 'Paçoca' }]} />

                </form>

            </div>

            <div className='box-navigation'>

                <button className='tab' onClick={() => {
                    resetVisible()
                    setBandeja({...bandeja, isVisible: true})
                }}>Bandeja</button>

                <button className='tab' onClick={() => {
                    resetVisible()
                    setMassa({...massa, isVisible: true})
                }}>Massa</button>

                <button className='tab' onClick={() => {
                    resetVisible()
                    setSaborPrimario({...saborPrimario, isVisible: true})
                }}>Sabor 1</button>

                <button className='tab' onClick={() => {
                    resetVisible()
                    setSaborSecundario({...saborSecundario, isVisible: true})
                }}>Sabor 2</button>

                <button className='tab' onClick={() => {
                    resetVisible()
                    setCobertura({...cobertura, isVisible: true})
                }}>Cobertura</button>

                <button className='tab' onClick={() => {
                    resetVisible()
                    setConfeito({...confeito, isVisible: true})
                }}>Confeitos</button>

            </div>


        </div>

        {/* { bandeja.value !== '' && 
            massa.value !== '' && 
            saborPrimario.value !== '' && 
            saborSecundario.value !== '' && 
            cobertura.value !== '' && 
            confeito.value !== '' && 
            <button className='ready-btn' type='button' onClick={handleSubmit}>Pronto</button>} */}
            <button className='ready-btn' type='button' onClick={() => {
                props.contactIsVisible()
            }}>Pronto</button>
        </div>

    )
}