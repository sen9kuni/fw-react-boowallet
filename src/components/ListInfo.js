import React from 'react'
import { Col } from 'react-bootstrap'

export default function ListInfo({titleInfo, info}) {
    return (
        <Col>
            <div class="d-flex flex-row justify-content-between align-items-center background-dash-white shadow-sm rounded p-3">
                <div class="d-flex flex-row gap-4">
                    <div class="d-flex flex-column gap-2">
                        <span class="color-7a fontSize-16">{titleInfo}</span>
                        <span class="fw-bold fontSize-18 color-51">{info}</span>
                    </div>
                </div>
            </div>
        </Col>
    )
}
