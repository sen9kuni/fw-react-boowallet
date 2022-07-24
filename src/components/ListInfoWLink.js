import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ListInfoWLink({titleInfo, info, target, targetName}) {
    return (
        <Col>
            <div className="d-flex flex-row justify-content-between align-items-center background-dash-white shadow-sm rounded p-3">
                <div className="d-flex flex-column gap-2">
                    <span className="color-7a fontSize-16">{titleInfo}</span>
                    <span className="fw-bold fontSize-18 color-51">{info}</span>
                </div>
                <Link to={target} className='text-decoration-none fontMid colorPrimary'>
                    {targetName}
                </Link>
            </div>
        </Col>
    )
}
