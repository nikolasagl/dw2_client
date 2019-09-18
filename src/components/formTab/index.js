import React from 'react'

// import './styles.css'

export default function FormTab(props) {

    return (
        <div className='input-group' style={props.isVisible === false ? {display: 'none'} : null}>
            <label>
                {props.label}

                <select value={props.value} onChange={props.handleChange}>
                    {props.options.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>
        </div>
    )
}