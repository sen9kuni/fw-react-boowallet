import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ListProfile({image, alt, nameUser, phone}) {
  return (
    <Link to={'/inputamount'} className="text-decoration-none">
      <Col>
        <div className="d-flex flex-row justify-content-between align-items-center rounded searchListWrap background-dash-white shadow-sm p-3">
          <div className="d-flex flex-row gap-3">
            <div className='image-frame-profile-search-reciver rounded-2 overflow-hidden'>
              <img className='img-fluid' src={image} alt={alt} width="70px" height="70px" />
            </div>
            <div className="d-flex flex-column gap-2">
              <span className="fw-bold fontSize-18 color-4d">{nameUser}</span>
              <span className="color-7a fontSize-16">+62 {phone}</span>
            </div>
          </div>
        </div>
      </Col>
    </Link>
  )
}
