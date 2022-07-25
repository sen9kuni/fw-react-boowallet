import React from 'react'
import {Col} from 'react-bootstrap'

// image
import {FiGrid, FiPlus, FiArrowUp, FiUser, FiLogOut} from 'react-icons/fi'
import { Link } from 'react-router-dom'
// image

export default function ComMenu() {
    return (
        <Col md={3} className="d-none d-md-flex flex-md-column col-md-3">
            <div className="d-flex flex-column gap-4 gap-md-5 h-100 p-4 shadow-sm rounded background-dash-white">
                <div className="navButton">
                    <Link to={'/home'} className="d-flex flex-row gap-3 align-items-center text-decoration-none">
                        <FiGrid size={28} />
                        <span className="fw-bold">Dashboard</span>
                    </Link>
                </div>
                <div className="navButton">
                    <Link to={'/searchreciver'} className="d-flex flex-row gap-3 align-items-center text-decoration-none">
                        <FiArrowUp size={28} />
                        <span className="fw-bold">Transfer</span>
                    </Link>
                </div>
                <div className="navButton">
                    <Link to={'/topup'} className="d-flex flex-row gap-3 align-items-center text-decoration-none">
                        <FiPlus size={28} />
                        <span className="fw-bold">Top Up</span>
                    </Link>
                </div>
                <div className="navButton">
                    <Link to={'/profileuser'} className="d-flex flex-row gap-3 align-items-center text-decoration-none">
                        <FiUser size={28} />
                        <span className="fw-bold">Profile</span>
                    </Link>
                </div>
                <div className="navButton mt-auto">
                    <Link to={'/'} className="d-flex flex-row gap-3 align-items-center text-decoration-none">
                        <FiLogOut size={28} />
                        <span className="fw-bold">Logout</span>
                    </Link>
                </div>
            </div>
        </Col>
    )
}
