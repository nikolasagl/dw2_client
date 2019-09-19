import React from 'react'

import logo from '../../assets/logo.png'

import './styles.css'

export default function Menu() {

    return (
        <div className='container menu-container'>

            <div className='row'>

                <div className='col-sm logo'>
                    <img src={logo} alt='logo' />
                </div>

                <div className='col-sm menu'>

                    <button>Quem Somos</button>
                    <button>Como Funciona</button>

                </div>

            </div>

        </div>
    )
}