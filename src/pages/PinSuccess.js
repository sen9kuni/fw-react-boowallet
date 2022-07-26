import React from 'react'
import LogoDashboard from '../components/LogoDashboard'
import DasboardRight from '../components/DasboardRight'
import {Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet'
import { useDispatch } from 'react-redux'
import { deleteEmail } from '../redux/reducers/auth'

// image etc
import {FiCheck} from 'react-icons/fi' 
// image etc

function PinSuccess() {
  const dispatch = useDispatch()
  const onConfrim = () => {
    dispatch(deleteEmail())
  }
  return (
    <>
      <Helmet>
        <title>Create Pin Success</title>
      </Helmet>
      <LogoDashboard />
      <Row className='min-vh-100 mw-100'>
        <DasboardRight />
        <Col md={5} className='p-5 gap-4 px-md-5 p-5 d-flex flex-column gap-md-5'>
          <div className='dotCheckWrap'>
            <FiCheck size={50} className='colorWhite'/>
          </div>
          <h3 className="text-start fs-3 fw-bold colorSecondary">Your PIN Was Successfully Created</h3>
          <p className="text-start fw-normal text-muted">Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</p>

          <Link onClick={onConfrim} to={'/login'} className="text-decoration-none">
            <div className="d-grid">
              <button className="btn DashbuttonLogin fw-bold colorWhite text-decoration-none">Login Now</button>
            </div>
          </Link>

        </Col>
      </Row>
    </>
  )
}

export default PinSuccess