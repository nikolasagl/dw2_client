import React from 'react'

import logo from '../../assets/logo.png'

import './styles.css'

export default function Menu() {

    return (
        <div className='menu-container'>

            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>

            <div className='menu'>

                <button>Quem Somos</button>
                <button>Como Funciona</button>

            </div>

        </div>
    )
}