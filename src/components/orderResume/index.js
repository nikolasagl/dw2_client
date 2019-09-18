import React from 'react'

import './styles.css'

export default function OrderResume(props) {

    return (
        <div className='order-resume'>
            <ol>
                <li><p><span>Bandeja:</span> <em>{props.states.bandeja.value}</em></p></li>
                <li><p><span>Massa:</span> <em>{props.states.massa.value}</em></p></li>
                <li><p><span>Sabor Primario:</span> <em>{props.states.saborPrimario.value}</em></p></li>
                <li><p><span>Sabor Secundario:</span> <em>{props.states.saborSecundario.value}</em></p></li>
                <li><p><span>Cobertura:</span> <em>{props.states.cobertura.value}</em></p></li>
                <li><p><span>Confeitos:</span> <em>{props.states.confeito.value}</em></p></li>
            </ol>
        </div>
    )
}