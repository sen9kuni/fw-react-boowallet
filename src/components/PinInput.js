import React from 'react'
import {Form} from 'react-bootstrap'

export default function PinInput() {
    return (
        <Form className='d-flex flex-row justify-content-center gap-1 mw-100 h-auto'>
            <div className='d-flex align-items-center max-min-pin-wrap rounded p-2'>
                <Form.Control type='text' className='w-100 h-auto border-0 input-pin-com text-center' />
            </div>
            <div className='d-flex align-items-center max-min-pin-wrap rounded p-2'>
                <Form.Control type='text' className='w-100 h-auto border-0 input-pin-com text-center' />
            </div>
            <div className='d-flex align-items-center max-min-pin-wrap rounded p-2'>
                <Form.Control type='text' className='w-100 h-auto border-0 input-pin-com text-center' />
            </div>
            <div className='d-flex align-items-center max-min-pin-wrap rounded p-2'>
                <Form.Control type='text' className='w-100 h-auto border-0 input-pin-com text-center' />
            </div>
            <div className='d-flex align-items-center max-min-pin-wrap rounded p-2'>
                <Form.Control type='text' className='w-100 h-auto border-0 input-pin-com text-center' />
            </div>
            <div className='d-flex align-items-center max-min-pin-wrap rounded p-2'>
                <Form.Control type='text' className='w-100 h-auto border-0 input-pin-com text-center' />
            </div>
        </Form>
    )
}
