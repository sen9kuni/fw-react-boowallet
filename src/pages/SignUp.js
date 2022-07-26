import React from 'react'
import LogoDashboard from '../components/LogoDashboard'
import DasboardRight from '../components/DasboardRight'
import {Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet'

// image etc
import {FiMail, FiLock, FiUser} from 'react-icons/fi'
// image etc

function SignUp() {
  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <LogoDashboard />
      <Row className='min-vh-100 mw-100'>
        <DasboardRight />

        <Col md={5} className='p-5 gap-4 px-md-5 p-5 d-flex flex-column gap-md-5'>
          <h3 className="text-start fs-3 fw-bold colorTextPrimary">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h3>
          <p className="text-start fw-normal text-muted">Transfering money is eassier than ever, you can access <br/> Zwallet wherever you are. Desktop, laptop, mobile phone? <br/> we cover all of that for you!</p>

          <div className="input-group flex-nowrap">
            <span className="input-group-text iconLogin">
              <FiUser size={24} className='colorA9Trans'/>
            </span>
            <input type="text" className="form-control inputLogin" placeholder="Enter your username"/>
          </div>
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

          <Link to={'/pin'} className="text-decoration-none">
            <div className="d-grid">
              <button className="btn DashbuttonLogin fw-bold colorWhite text-decoration-none">Sign Up</button>
            </div>
          </Link>

          <div className="text-center">
                Already have an account? Let's <Link className="fw-bold colorPrimary text-decoration-none" to={'/login'}>Login</Link>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default SignUp