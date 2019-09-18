import React, { useState } from 'react'

import scrollToComponent from 'react-scroll-to-component'

import TopMenu from '../../components/menu/index'
import HomeForm from '../../components/homeForm/index'
import ContactForm from '../../components/contactForm/index'

import './styles.css'

function Home() {

    const [bandeja, setBandeja] = useState({ value: '', isVisible: false })
    const [massa, setMassa] = useState({ value: '', isVisible: false })
    const [saborPrimario, setSaborPrimario] = useState({ value: '', isVisible: false })
    const [saborSecundario, setSaborSecundario] = useState({ value: '', isVisible: false })
    const [cobertura, setCobertura] = useState({ value: '', isVisible: false })
    const [confeito, setConfeito] = useState({ value: '', isVisible: false })

    var violet = null
    var hidden = true

    // if (hidden)
    //     document.body.style.overflow = 'hidden'

    function handleSubmit(e) {
        e.preventDefault()

        if (bandeja.value !== '' && massa.value !== '' && saborPrimario.value !== '' && saborSecundario.value !== '' && cobertura.value !== '' && confeito.value !== '') {
            console.log(bandeja, massa, saborPrimario, saborSecundario, cobertura, confeito)
        }
    }

    function handleIsVisible() {
        hidden = false
        document.body.style.overflow = ''
        scrollToComponent(violet, { offset: 0, align: 'top', duration: 1200 })
    }

    function handleStateChange(state, operation, value = null) {
        if (value === null)
            resetVisible()

        switch (state) {
            case 'bandeja':
                if (operation === 1 && value !== null)
                    setBandeja({ ...bandeja, value: value })
                else
                    setBandeja({ ...bandeja, isVisible: true })
                break

            case 'massa':
                if (operation === 1 && value !== null)
                    setMassa({ ...massa, value: value })
                else
                    setMassa({ ...massa, isVisible: true })
                break

            case 'saborPrimario':
                if (operation === 1 && value !== null)
                    setSaborPrimario({ ...saborPrimario, value: value })
                else
                    setSaborPrimario({ ...saborPrimario, isVisible: true })
                break

            case 'saborSecundario':
                if (operation === 1 && value !== null)
                    setSaborSecundario({ ...saborSecundario, value: value })
                else
                    setSaborSecundario({ ...saborSecundario, isVisible: true })
                break

            case 'cobertura':
                if (operation === 1 && value !== null)
                    setCobertura({ ...cobertura, value: value })
                else
                    setCobertura({ ...cobertura, isVisible: true })
                break

            case 'confeito':
                if (operation === 1 && value !== null)
                    setConfeito({ ...confeito, value: value })
                else
                    setConfeito({ ...confeito, isVisible: true })
                break

            default:
                break;
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
        <div className='container'>

            <div className='content'>

                <TopMenu />

                <HomeForm
                    contactIsVisible={handleIsVisible}
                    handleStateChange={handleStateChange}
                    teste={handleIsVisible}
                    states={{ bandeja, massa, saborPrimario, saborSecundario, cobertura, confeito }} />

                <ContactForm />

            </div>

        </div>
    )
}

export default Home