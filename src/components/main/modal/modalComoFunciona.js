import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function MenuModal(props) {
    
    return (
        <Modal show={props.isVisible} onHide={props.handleClose}>

        <Modal.Header closeButton>
            <Modal.Title>Modal Como Funciona</Modal.Title>
        </Modal.Header>

        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
                Close
        </Button>
        </Modal.Footer>

    </Modal>
    )
}