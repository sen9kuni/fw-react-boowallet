import React from 'react'
import LogoDashboard from '../components/LogoDashboard'
import DasboardRight from '../components/DasboardRight'
import PinInput from '../components/PinInput'
import {Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet'

function CreatePin() {
    return (
        <>
        <Helmet>
            <title>Create Pin</title>
        </Helmet>
        <LogoDashboard />
        <Row className='min-vh-100 mw-100'>
        <DasboardRight />

        <Col md={5} className='p-5 gap-4 px-md-5 p-5 d-flex flex-column gap-md-5'>
            <h3 className="text-start fs-3 fw-bold colorTextPrimary">Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</h3>
            <p className="text-start fw-normal text-muted">Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don't tell anyone about your Zwallet account password and the PIN.</p>

            <PinInput />

            <Link to={"/pinsuccess"} className="text-decoration-none">
                <div className="d-grid">
                        <button className="btn DashbuttonLogin fw-bold colorWhite">Confirm</button>
                </div>
            </Link>
        </Col>
        </Row>
        </>
    )
}

export default CreatePin