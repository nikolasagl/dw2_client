import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function ModalEdit(props) {

    return (

        <Modal show={props.isVisible} onHide={props.handleClose}>

            <Modal.Header>Modal Edit</Modal.Header>

            <Modal.Body></Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Fechar
                </Button>
            </Modal.Footer>

        </Modal>

    )
}