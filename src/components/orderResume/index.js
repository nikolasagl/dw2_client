import React from 'react'

import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { clearString, isEmpty } from '../../helpers/mainHelper'
import './styles.css'

export default function OrderResume(props) {

    return (

        <div className='order-resume'>

            <div onClick={() => !isEmpty(props.values.bandeja) ? props.setDisplay.setDisplayBandeja(!props.display.displayBandeja) : {}} className='resume-cell'>

                <p>Bandeja:
                    <em> {!isEmpty(props.values.bandeja) ? clearString(props.values.bandeja.nome) : ''}</em>

                    {
                        !isEmpty(props.values.bandeja) ?
                        props.display.displayBandeja === false ?
                        <FaAngleDown className='icon' /> :
                        <FaAngleUp className='icon' /> : null
                    }
                </p>

                <span style={props.display.displayBandeja === false || isEmpty(props.values.bandeja) ? { display: 'none' } : null}>
                    {props.values.bandeja.descricao}
                </span>

            </div>

            <div onClick={() => !isEmpty(props.values.massa) ? props.setDisplay.setDisplayMassa(!props.display.displayMassa) : {}} className='resume-cell'>

                <p>Massa:
                    <em> {!isEmpty(props.values.massa) ? clearString(props.values.massa.nome) : ''}</em>

                    {
                        !isEmpty(props.values.massa) ?
                        props.display.displayMassa === false ?
                        <FaAngleDown className='icon' /> :
                        <FaAngleUp className='icon' /> : null
                    }
                </p>

                <span style={props.display.displayMassa === false || isEmpty(props.values.massa) ? { display: 'none' } : null}>
                    {props.values.massa.descricao}
                </span>

            </div>


            <div onClick={() => !isEmpty(props.values.sabor1) ? props.setDisplay.setDisplaySabor1(!props.display.displaySabor1) : {}} className='resume-cell'>

                <p>Sabor Primario:
                        <em> {!isEmpty(props.values.sabor1) ? clearString(props.values.sabor1.nome) : ''}</em>

                    {
                        !isEmpty(props.values.sabor1) ?
                        props.display.displaySabor1 === false ?
                        <FaAngleDown className='icon' /> :
                        <FaAngleUp className='icon' /> : null
                    }
                </p>

                <span style={props.display.displaySabor1 === false || isEmpty(props.values.sabor1) ? { display: 'none' } : null}>
                    {props.values.sabor1.descricao}
                </span>

            </div>

            <div onClick={() => !isEmpty(props.values.sabor2) ? props.setDisplay.setDisplaySabor2(!props.display.displaySabor2) : {}} className='resume-cell'>

                <p>Sabor Secundario:
                        <em> {!isEmpty(props.values.sabor2) ? clearString(props.values.sabor2.nome) : ''}</em>

                    {
                        !isEmpty(props.values.sabor2) ?
                        props.display.displaySabor2 === false ?
                        <FaAngleDown className='icon' /> :
                        <FaAngleUp className='icon' /> : null
                    }
                </p>

                <span style={props.display.displaySabor2 === false || isEmpty(props.values.sabor2) ? { display: 'none' } : null}>
                    {props.values.sabor2.descricao}
                </span>

            </div>

            <div onClick={() => !isEmpty(props.values.cobertura) ? props.setDisplay.setDisplayCobertura(!props.display.displayCobertura) : {}} className='resume-cell'>

                <p>Cobertura:
                        <em> {!isEmpty(props.values.cobertura) ? clearString(props.values.cobertura.nome) : ''}</em>

                    {
                        !isEmpty(props.values.cobertura) ?
                        props.display.displayCobertura === false ?
                        <FaAngleDown className='icon' /> :
                        <FaAngleUp className='icon' /> : null
                    }
                </p>

                <span style={props.display.displayCobertura === false || isEmpty(props.values.cobertura) ? { display: 'none' } : null}>
                    {props.values.cobertura.descricao}
                </span>

            </div>

            <div onClick={() => !isEmpty(props.values.confeito) ? props.setDisplay.setDisplayConfeito(!props.display.displayConfeito) : {}} className='resume-cell'>

                <p>Confeito:
                        <em> {!isEmpty(props.values.confeito) ? clearString(props.values.confeito.nome) : ''}</em>

                    {
                        !isEmpty(props.values.confeito) ?
                        props.display.displayConfeito === false ?
                        <FaAngleDown className='icon' /> :
                        <FaAngleUp className='icon' /> : null
                    }
                </p>

                <span style={props.display.displayConfeito === false || isEmpty(props.values.confeito) ? { display: 'none' } : null}>
                    {props.values.confeito.descricao}
                </span>

            </div>

        </div>
    )
}