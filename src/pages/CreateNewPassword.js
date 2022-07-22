import React from 'react'
import LogoDashboard from '../components/LogoDashboard'
import DasboardRight from '../components/DasboardRight'
import {Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

// image etc
import {FiLock} from 'react-icons/fi'
// image etc

function CreateNewPassword() {
    return (
        <>
        <LogoDashboard />
        <Row className='min-vh-100 mw-100'>
        <DasboardRight />

        <Col md={5} className='p-5 gap-4 px-md-5 p-5 d-flex flex-column gap-md-5'>
            <h3 className="text-start fs-3 fw-bold colorTextPrimary">Did You Forgot Your Password? Don't Worry, You Can Reset Your Password In a Minutes.</h3>
            <p className="text-start fw-normal text-muted">Now you can create a new password for your BooWallet account. Type your password twice so we can confirm your new passsword.</p>

            <div className="input-group flex-nowrap">
                <span className="input-group-text iconLogin">
                <FiLock size={24} className='colorA9Trans'/>
                </span>
                <input type="password" className="form-control inputLogin" placeholder="Create new password"/>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text iconLogin">
                <FiLock size={24} className='colorA9Trans'/>
                </span>
                <input type="password" className="form-control inputLogin" placeholder="Create new password"/>
            </div>

            <Link to={"/login"} className="text-decoration-none">
                <div className="d-grid">
                        <button className="btn DashbuttonLogin fw-bold colorWhite text-decoration-none">Reset Password</button>
                </div>
            </Link>
        </Col>
        </Row>
        </>
    )
}

export default CreateNewPassword