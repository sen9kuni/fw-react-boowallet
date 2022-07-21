import React from 'react'
import LogoDashboard from '../components/LogoDashboard'
import DasboardRight from '../components/DasboardRight'
import {Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

// image etc
import {FiMail, FiLock} from 'react-icons/fi'
// image etc

function Login() {
    return (
    <>
        <LogoDashboard />
        <Row className='min-vh-100 mw-100'>
            <DasboardRight />
            <Col md={5} className='p-5 gap-4 px-md-5 p-5 d-flex flex-column gap-md-5'>
                <h3 className="text-start fs-3 fw-bold colorSecondary">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h3>
                <p className="text-start fw-normal text-muted">Transfering money is eassier than ever, you can access <br/> Zwallet wherever you are. Desktop, laptop, mobile phone? <br/> we cover all of that for you!</p>

                <div className="input-group flex-nowrap">
                    <span className="input-group-text iconLogin">
                    <FiMail size={24} className='colorA9Trans'/>
                    </span>
                    <input type="email" className="form-control inputLogin" placeholder="Enter your e-mail"/>
                </div>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text iconLogin">
                    <FiLock size={24} className='colorA9Trans'/>
                    </span>
                    <input type="password" className="form-control inputLogin" placeholder="Enter your password"/>
                </div>

                <div className="text-end">
                    <Link to={"/resetpassword"} className="link-secondary text-decoration-none fontMid">Forgot password?</Link>
                </div>

                <div className="d-grid">
                    <button onclick="document.location='/Dashboard/home.html'" className="btn DashbuttonLogin fw-bold colorWhite">Login</button>
                </div>

                <div className="text-center">
                    Don't have an account? Let's <Link className="fw-bold colorPrimary text-decoration-none" to={"/signup"}>Sign Up</Link>
                </div>
            </Col>
        </Row>
    </>
    )
}

export default Login