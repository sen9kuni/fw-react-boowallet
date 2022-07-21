import React from 'react'
import LogoDashboard from '../components/LogoDashboard'
import DasboardRight from '../components/DasboardRight'
import {Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

// image etc
import {FiMail} from 'react-icons/fi'
// image etc

function ResetPassword() {
    return (
        <>
            <LogoDashboard />
        <Row className='min-vh-100 mw-100'>
            <DasboardRight />
            <Col md={5} className='p-5 gap-4 px-md-5 p-5 d-flex flex-column gap-md-5'>
                <h3 className="text-start fs-3 fw-bold colorSecondary">Did You Forgot Your Password? Don't Worry, You Can Reset Your Password In a Minutes.</h3>
                <p className="text-start fw-normal text-muted">To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>

                <div className="input-group flex-nowrap">
                    <span className="input-group-text iconLogin">
                    <FiMail size={24} className='colorA9Trans'/>
                    </span>
                    <input type="email" className="form-control inputLogin" placeholder="Enter your e-mail"/>
                </div>

                <Link to={"/createnewpassword"} className="text-decoration-none">
                <div className="d-grid">
                        <button className="btn DashbuttonLogin fw-bold colorWhite text-decoration-none">Confirm</button>
                </div>
            </Link>
            </Col>
        </Row>
        </>
    )
}

export default ResetPassword