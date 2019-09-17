import React, { useState } from 'react'

import scrollToComponent from 'react-scroll-to-component'

import TopMenu from '../../components/menu/index'

import HomeForm from '../../components/homeForm/index'

import './styles.css'

function Home() {

    const [isVisible, setIsVisible] = useState(false)

    var violet = null
    
    function handleSubmit(e) {
        e.preventDefault()
    }

    function handleIsVisible() {
        setIsVisible(true)
    }

    return (
        <div className='container'>

            <div className='content'>

                <TopMenu />

                <HomeForm scrollTo={() => scrollToComponent(violet, { offset: 0, align: 'top', duration: 1200})} contactIsVisible={handleIsVisible} />

                <div className='contact-box' ref={(section) => { violet = section; }} style={isVisible === false ? {display: 'none'} : null}>

                    <form onSubmit={handleSubmit}>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default Home