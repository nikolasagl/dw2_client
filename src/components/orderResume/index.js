import React from 'react'

import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { clearString } from '../../helpers/mainHelper'
import './styles.css'

export default function OrderResume(props) {

    return (

        <div className='order-resume'>

            <div onClick={() => props.values.bandeja !== '' ? props.setDisplay.setDisplayBandeja(!props.display.displayBandeja) : {}} className='resume-cell'>

                <p>Bandeja:
                    <em> {props.values.bandeja !== '' ? clearString(props.values.bandeja) : ''}</em>

                    {
                        props.values.bandeja !== '' ?
                        props.display.displayBandeja === false ?
                        <FaAngleDown className='icon' /> :
                        <FaAngleUp className='icon' /> : null
                    }
                </p>

                <span style={props.display.displayBandeja === false || props.values.bandeja === '' ? { display: 'none' } : null}>
                    Descricao bandeja
                </span>

            </div>

            <div onClick={() => props.values.massa !== '' ? props.setDisplay.setDisplayMassa(!props.display.displayMassa) : {}} className='resume-cell'>

                <p>Massa:
                    <em> {props.values.massa !== '' ? clearString(props.values.massa) : ''}</em>

                    {
                        props.values.massa !== '' ?
                        props.display.displayMassa === false ?
                        <FaAngleDown className='icon' /> :
                        <FaAngleUp className='icon' /> : null
                    }
                </p>

                <span style={props.display.displayMassa === false || props.values.massa === '' ? { display: 'none' } : null}>Descricao massa</span>

            </div>


            <div onClick={() => props.values.sabor1 !== '' ? props.setDisplay.setDisplaySabor1(!props.display.displaySabor1) : {}} className='resume-cell'>

                <p>Sabor Primario:
                        <em> {props.values.sabor1 !== '' ? clearString(props.values.sabor1) : ''}</em>

                    {
                        props.values.sabor1 !== '' ?
                        props.display.displaySabor1 === false ?
                        <FaAngleDown className='icon' /> :
                        <FaAngleUp className='icon' /> : null
                    }
                </p>

                <span style={props.display.displaySabor1 === false || props.values.sabor1 === '' ? { display: 'none' } : null}>Descricao sabor 1</span>

            </div>

            <div onClick={() => props.values.sabor2 !== '' ? props.setDisplay.setDisplaySabor2(!props.display.displaySabor2) : {}} className='resume-cell'>

                <p>Sabor Primario:
                    <em> {props.values.sabor2 !== '' ? clearString(props.values.sabor2) : ''}</em>

                    {
                        props.values.sabor2 !== '' ?
                        props.display.displaySabor2 === false ?
                        <FaAngleDown className='icon' /> :
                        <FaAngleUp className='icon' /> : null
                    }
                </p>

                <span style={props.display.displaySabor2 === false || props.values.sabor2 === '' ? { display: 'none' } : null}>Descricao sabor 2</span>

            </div>

            <div onClick={() => props.values.cobertura !== '' ? props.setDisplay.setDisplayCobertura(!props.display.displayCobertura) : {}} className='resume-cell'>

                <p>Cobertura:
                    <em> {props.values.cobertura !== '' ? clearString(props.values.cobertura) : ''}</em>

                    {
                        props.values.cobertura !== '' ?
                        props.display.displayCobertura === false ?
                        <FaAngleDown className='icon' /> :
                        <FaAngleUp className='icon' /> : null
                    }
                </p>

                <span style={props.display.displayCobertura === false || props.values.cobertura === '' ? { display: 'none' } : null}>Descricao cobertura</span>

            </div>

            <div onClick={() => props.values.confeito !== '' ? props.setDisplay.setDisplayConfeito(!props.display.displayConfeito) : {}} className='resume-cell'>

                <p>Confeitos:
                    <em> {props.values.confeito !== '' ? clearString(props.values.confeito) : ''}</em>

                    {
                        props.values.confeito !== '' ?
                        props.display.displayConfeito === false ?
                        <FaAngleDown className='icon' /> :
                        <FaAngleUp className='icon' /> : null
                    }
                </p>

                <span style={props.display.displayConfeito === false || props.values.confeito === '' ? { display: 'none' } : null}>Descricao confeitos</span>

            </div>

        </div>
    )
}