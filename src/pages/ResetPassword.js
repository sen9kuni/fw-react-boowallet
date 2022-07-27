import React from 'react'
import LogoDashboard from '../components/LogoDashboard'
import DasboardRight from '../components/DasboardRight'
import {Row, Col, Button, Form} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {Helmet} from 'react-helmet'

// image etc
import {FiMail} from 'react-icons/fi'
// image etc

const resetPasswordSechema  = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required(),
})

const ResetPaswordForm = ({errors, handleSubmit, handleChange})=> {
  return(
    <Form noValidate onSubmit={handleSubmit} className='gap-4 px-md-5 d-flex flex-column gap-md-5'>
      <Form.Group className="mb-3 input-group">
        <span className="input-group-text iconLogin">
          <FiMail size={24} className='colorA9Trans'/>
        </span>
        <Form.Control name='email' className='inputLogin' onChange={handleChange} type="email" placeholder="Enter your e-mail" isInvalid={!!errors.email} />
        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
      </Form.Group>

      {/* <Link to={'/createnewpassword'} className="d-grid text-decoration-none"> */}
      <Button variant="primary" type="submit" className="btn DashbuttonLogin fw-bold colorWhite">
      Confirm
      </Button>
      {/* </Link> */}
    </Form>
  )
}

function ResetPassword() {
  const navigate = useNavigate()
  const loginReqFill = (param)=>{
    if (param.email === '') {
      window.alert('brah brah brah')
    }else {
      navigate('/createnewpassword')
    }
  }
  return (
    <>
      <Helmet>
        <title>Reset Password - input email</title>
      </Helmet>
      <LogoDashboard />
      <Row className='min-vh-100 mw-100'>
        <DasboardRight />
        <Col md={5} className='p-5 gap-4 px-md-5 p-5 d-flex flex-column gap-md-5'>
          <h3 className="text-start fs-3 fw-bold colorSecondary">Did You Forgot Your Password? Don't Worry, You Can Reset Your Password In a Minutes.</h3>
          <p className="text-start fw-normal text-muted">To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>

          {/* <div className="input-group flex-nowrap">
                    <span className="input-group-text iconLogin">
                    <FiMail size={24} className='colorA9Trans'/>
                    </span>
                    <input type="email" className="form-control inputLogin" placeholder="Enter your e-mail"/>
                </div>

                <Link to={"/createnewpassword"} className="text-decoration-none">
                <div className="d-grid">
                        <button className="btn DashbuttonLogin fw-bold colorWhite text-decoration-none">Confirm</button>
                </div>
                </Link> */}

          <Formik initialValues={{email: ''}} validationSchema={resetPasswordSechema} onSubmit={loginReqFill}>
            {(props)=><ResetPaswordForm {...props}/>}
          </Formik>
        </Col>
      </Row>
    </>
  )
}

export default ResetPassword