import React from 'react'
import {Row, Col} from 'react-bootstrap'

export default function PinInput() {
    return (
        <Row className='d-flex justify-content-center gap-md-3 gap-1 pinInput-wrap'>
            <Col className='d-flex align-items-center inputPinWrap'>
                <input type="number" maxlength="1" min="0" max="9" className="pinInput"/>
            </Col>
            <Col className='d-flex align-items-center inputPinWrap'>
                <input type="number" maxlength="1" min="0" max="9" className="pinInput"/>
            </Col>
            <Col className='d-flex align-items-center inputPinWrap'>
                <input type="number" maxlength="1" min="0" max="9" className="pinInput"/>
            </Col>
            <Col className='d-flex align-items-center inputPinWrap'>
                <input type="number" maxlength="1" min="0" max="9" className="pinInput"/>
            </Col>
            <Col className='d-flex align-items-center inputPinWrap'>
                <input type="number" maxlength="1" min="0" max="9" className="pinInput"/>
            </Col>
            <Col className='d-flex align-items-center inputPinWrap'>
                <input type="number" maxlength="1" min="0" max="9" className="pinInput"/>
            </Col>
        </Row>
    )
}
