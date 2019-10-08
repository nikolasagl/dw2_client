import React, { useState } from 'react'

import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { clearString, isEmpty } from '../../../helpers/mainHelper'
import './styles.css'

export default function OrderResume(props) {

    const [displayPreco, setDisplayPreco] = useState(false)

    return (

        <div className='order-resume'>

            <div onClick={() => !isEmpty(props.values.bandeja) ? props.setDisplay.setDisplayBandeja(!props.display.displayBandeja) : {}} className='resume-cell'>

                <div className='resume-cell-content'>

                    <div className='resume-cell-label'>
                        Bandeja: {!isEmpty(props.values.bandeja) ? clearString(props.values.bandeja.nome) : ''}

                        <p className='float-right'>
                            {
                                !isEmpty(props.values.bandeja) ?
                                    props.display.displayBandeja === false ?
                                        <FaAngleDown className='icon' /> :
                                        <FaAngleUp className='icon' /> : null
                            }
                        </p>
                    </div>

                </div>

                <span className='resume-cell-desc' style={props.display.displayBandeja === false || isEmpty(props.values.bandeja) ? { display: 'none' } : null}>
                    {props.values.bandeja.descricao}
                </span>

            </div>

            <div onClick={() => !isEmpty(props.values.massa) ? props.setDisplay.setDisplayMassa(!props.display.displayMassa) : {}} className='resume-cell'>

                <div className='resume-cell-content'>
                    <div className='resume-cell-label'>
                        Massa: {!isEmpty(props.values.massa) ? clearString(props.values.massa.nome) : ''}

                        <p className='float-right'>
                            {
                                !isEmpty(props.values.massa) ?
                                    props.display.displayMassa === false ?
                                        <FaAngleDown className='icon' /> :
                                        <FaAngleUp className='icon' /> : null
                            }
                        </p>
                    </div>

                </div>

                <span style={props.display.displayMassa === false || isEmpty(props.values.massa) ? { display: 'none' } : null}>
                    {props.values.massa.descricao}
                </span>

            </div>


            <div onClick={() => !isEmpty(props.values.sabor) ? props.setDisplay.setDisplaySabor(!props.display.displaySabor) : {}} className='resume-cell'>

                <div className='resume-cell-content'>
                    <div className='resume-cell-label'>
                        Sabor: {!isEmpty(props.values.sabor) ? clearString(props.values.sabor.nome) : ''}

                        <p className='float-right'>
                            {
                                !isEmpty(props.values.sabor) ?
                                    props.display.displaySabor === false ?
                                        <FaAngleDown className='icon' /> :
                                        <FaAngleUp className='icon' /> : null
                            }
                        </p>
                    </div>

                </div>

                <span style={props.display.displaySabor === false || isEmpty(props.values.sabor) ? { display: 'none' } : null}>
                    {props.values.sabor.descricao}
                </span>

            </div>

            <div onClick={() => !isEmpty(props.values.cobertura) ? props.setDisplay.setDisplayCobertura(!props.display.displayCobertura) : {}} className='resume-cell'>

                <div className='resume-cell-content'>
                    <div className='resume-cell-label'>
                        Cobertura: {!isEmpty(props.values.cobertura) ? clearString(props.values.cobertura.nome) : ''}

                        <p className='float-right'>
                            {
                                !isEmpty(props.values.cobertura) ?
                                    props.display.displayCobertura === false ?
                                        <FaAngleDown className='icon' /> :
                                        <FaAngleUp className='icon' /> : null
                            }
                        </p>
                    </div>

                </div>

                <span style={props.display.displayCobertura === false || isEmpty(props.values.cobertura) ? { display: 'none' } : null}>
                    {props.values.cobertura.descricao}
                </span>

            </div>

            <div onClick={() => !isEmpty(props.values.confeito) ? props.setDisplay.setDisplayConfeito(!props.display.displayConfeito) : {}} className='resume-cell'>

                <div className='resume-cell-content'>
                    <div className='resume-cell-label'>
                        Confeito: {!isEmpty(props.values.confeito) ? clearString(props.values.confeito.nome) : ''}

                        <p className='float-right'>
                            {
                                !isEmpty(props.values.confeito) ?
                                    props.display.displayConfeito === false ?
                                        <FaAngleDown className='icon' /> :
                                        <FaAngleUp className='icon' /> : null
                            }
                        </p>
                    </div>

                </div>

                <span style={props.display.displayConfeito === false || isEmpty(props.values.confeito) ? { display: 'none' } : null}>
                    {props.values.confeito.descricao}
                </span>

            </div>

            <div className='resume-cell' onClick={() => setDisplayPreco(!displayPreco)}>

                <div className='resume-cell-content'>
                    <div>Valor Parcial: R$ {props.values.totalParcial}</div>
                    <div className='float-right'>
                        {
                            displayPreco === false ?
                                <FaAngleDown className='icon-total' /> :
                                <FaAngleUp className='icon-total' />
                        }
                    </div>
                    <div>Valor Total: Parcial({props.values.totalParcial}) * Peso({props.values.peso}) = R$ {props.values.total}</div>
                    
                </div>

                <span style={displayPreco === false ? { display: 'none' } : null}>
                    {Object.keys(props.values.preco).map((key) => (
                        <div key={key} className='total-item'>
                            <p>{key} - R$ {props.values.preco[key]}</p>
                        </div>
                    ))}
                </span>

            </div>

        </div>
    )
}