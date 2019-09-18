import React from 'react'

export default function ContactForm(props) {

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className='contact-box'>

            <form onSubmit={handleSubmit}>

                {/* <input value={} onChange={() => {}}></input>
                <input value={} onChange={() => {}}></input>
                <input value={} onChange={() => {}}></input>
                <input value={} onChange={() => {}}></input>
                <input value={} onChange={() => {}}></input>
                <input value={} onChange={() => {}}></input>
                <input value={} onChange={() => {}}></input>
                <input value={} onChange={() => {}}></input> */}

            </form>

        </div>
    )
}