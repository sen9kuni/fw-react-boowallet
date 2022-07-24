import React from 'react'
import { Form } from 'react-bootstrap'

export default function FromPin() {
    return (
        <Form>
            <Form.Group className="d-flex flex-row gap-2 w-auto mx-auto" controlId="formBasicEmail">
                <Form.Control className='p-1 w-100 h-auto shadow-none bg-dark' maxLength={1} type="number" />
                <Form.Control className='p-1 w-100 h-auto shadow-none bg-dark' maxLength={1} type="number" />
                <Form.Control className='p-1 w-100 h-auto shadow-none bg-dark' maxLength={1} type="number" />
                <Form.Control className='p-1 w-100 h-auto shadow-none bg-dark' maxLength={1} type="number" />
                <Form.Control className='p-1 w-100 h-auto shadow-none bg-dark' maxLength={1} type="number" />
                <Form.Control className='p-1 w-100 h-auto shadow-none bg-dark' maxLength={1} type="number" />
            </Form.Group>
        </Form>
    )
}
