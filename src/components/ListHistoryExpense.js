import React from 'react'
import { Col } from 'react-bootstrap'

export default function ListHistoryExpense({image, alt, nameUser, typeTransfer, amount}) {
    return (
        <Col className='d-flex flex-row justify-content-between p-3 align-items-center listHomeWarp'>
                <div class="d-flex flex-row gap-3">
                        <img className='img-fluid' src={image} alt={alt}/>
                        <div class="d-flex flex-column">
                            <span class="fw-bold color-4d">{nameUser}</span>
                            <span class="color-thrid-sub">{typeTransfer}</span>
                        </div>
                    </div>
                    <div>
                        <span class="fw-bold colorOut">-Rp{amount}</span>
                    </div>
            </Col>
    )
}
