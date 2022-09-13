import React from 'react'
import { Col } from 'react-bootstrap'

export default function ListHistory({image, alt, nameUser, typeTransfer, amount}) {
  return (
    <Col className='d-flex flex-row justify-content-between p-3 align-items-center listHomeWarp'>
      <div className="d-flex flex-row gap-3">
        <div className='image-frame-profile-history rounded-2 overflow-hidden'>
          <img className='img-fluid h-100' src={image} alt={alt}/>
        </div>
        <div className="d-flex flex-column">
          <span className="fw-bold color-4d">{nameUser}</span>
          <span className="color-thrid-sub">{typeTransfer}</span>
        </div>
      </div>
      <div>
        <span className="fw-bold colorIn">+{amount}</span>
      </div>
    </Col>
  )
}
