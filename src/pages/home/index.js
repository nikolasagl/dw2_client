import React from 'react'

import HomeImage from '../../components/mainImage/index'

import TopMenu from '../../components/menu/index'

import './styles.css'

function Home() {
    
    return (
        <div className='container'>

            <div className='content'>
            
                <HomeImage />

                <TopMenu />

                <div className='home-box'>

                    

                </div>

            </div>

        </div>
    )
}

export default Home