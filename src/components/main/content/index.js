import React from 'react'

import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

import './styles.css'
import MainForm from '../mainForm'
import OrderResume from '../orderResume'

export default function Content(props) {

    return (

        <Row className='content'>
            <Card className='card-content'>

                <Card.Header className='card-header'>
                    <p>{props.cardHeaderTitle}</p>
                </Card.Header>

                <Card.Body className='card-body'>

                    <MainForm
                        values={props.values}
                        setValues={props.setValues} />

                </Card.Body>

                <Card.Footer className='card-footer'>
                    <OrderResume 
                        values={props.values}
                        setValues={props.setValues}
                        display={props.display}
                        setDisplay={props.setDisplay} />
                </Card.Footer>
            </Card>
        </Row>
    )
}