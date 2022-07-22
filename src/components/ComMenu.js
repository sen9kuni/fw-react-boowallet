import React from 'react'
import {Col} from 'react-bootstrap'

// image
import {FiGrid, FiPlus, FiArrowUp, FiUser, FiLogOut} from 'react-icons/fi'
// image

export default function ComMenu() {
    return (
        <Col md={3} class="d-md-flex flex-md-column col-md-3 rounded boxshdw navWrap shadow-sm">
            <div class="d-flex flex-column gap-4 gap-md-5 h-100 p-4">
                <div class="navButton">
                    <a href="/Dashboard/home.html" class="d-flex flex-row gap-3 align-items-center text-decoration-none">
                        <FiGrid size={28} />
                        <span class="fw-bold">Dashboard</span>
                    </a>
                </div>
                <div class="navButton">
                    <a href="/Dashboard/searchReceiver.html" class="d-flex flex-row gap-3 align-items-center text-decoration-none">
                        <FiArrowUp size={28} />
                        <span class="fw-bold">Transfer</span>
                    </a>
                </div>
                <div class="navButton">
                    <a href="/Dashboard/topup.html" class="d-flex flex-row gap-3 align-items-center text-decoration-none">
                        <FiPlus size={28} />
                        <span class="fw-bold">Top Up</span>
                    </a>
                </div>
                <div class="navButton">
                    <a href="/Dashboard/profilev1.html" class="d-flex flex-row gap-3 align-items-center text-decoration-none">
                        <FiUser size={28} />
                        <span class="fw-bold">Profile</span>
                    </a>
                </div>
                <div class="navButton mt-auto">
                    <a href="../index.html" class="d-flex flex-row gap-3 align-items-center text-decoration-none">
                        <FiLogOut size={28} />
                        <span class="fw-bold">Logout</span>
                    </a>
                </div>
            </div>
        </Col>
    )
}
