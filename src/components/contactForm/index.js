import React from 'react'

export default function ContactForm() {

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className='contact-box'>

            <form onSubmit={handleSubmit}>

            </form>

        </div>
    )
}