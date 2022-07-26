import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col, Button} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet'

// image
import {  FiLock } from 'react-icons/fi'
import ComMenuMobile from '../components/ComMenuMobile'
// image

function ChangePassword() {
  return (
    <>
      <Helmet>
        <title>Change Password</title>
      </Helmet>
      <div className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
          <ComMenuMobile />
          <ComMenu />
          <Col md={9} className='d-flex flex-column gap-5 rounded shadow-sm p-4 bg-white'>
            <div className='d-flex flex-column gap-3'>
              <span className='fw-bold fontSize-22 color-3a'>Change Password</span>
              <p className='text-start fontSize-16 color-7a'>You must enter your current password and then<br /> type your new password twice.</p>
            </div>
            <div className='d-flex flex-column gap-5 w-50 mx-auto'>
              <div className="input-group flex-nowrap">
                <span className="input-group-text iconLogin">
                  <FiLock size={24} className='colorA9Trans'/>
                </span>
                <input type="password" className="form-control inputLogin" placeholder="Current password"/>
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text iconLogin">
                  <FiLock size={24} className='colorA9Trans'/>
                </span>
                <input type="password" className="form-control inputLogin" placeholder="New password"/>
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text iconLogin">
                  <FiLock size={24} className='colorA9Trans'/>
                </span>
                <input type="password" className="form-control inputLogin" placeholder="Repeat new password"/>
              </div>
              <Link to={'/profileuser'} className='d-grid text-decoration-none mb-5'>
                <Button className='d-flex background-primary p-3 justify-content-center border-unset fw-bold fontSize-16 colorWhite'>
                            Change Password
                </Button>
              </Link>
            </div>
          </Col>
        </Container>
        <ComFooter />
      </div>
    </>
  )
}

export default ChangePassword