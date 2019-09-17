import React from 'react'

import background from '../../assets/bla.jpg'

import './styles.css'

export default function MainImage() {

    return (
        <div className='img-container'>

            <img src={background} alt='background' />

        </div>
    )
}