import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col, Button, Form } from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import { useNavigate } from 'react-router-dom'
import {Helmet} from 'react-helmet'
import { Formik } from 'formik'
import * as Yup from 'yup'

// image
import {  FiLock } from 'react-icons/fi'
import ComMenuMobile from '../components/ComMenuMobile'
// image

const createNewPassSechema  = Yup.object().shape({
  currentPassword: Yup.string().min(8).required('Current passwordis a required field'),
  newPassword: Yup.string().min(8).required('New password is a required field'),
  repeatNewPassword: Yup.string().min(8).required('Repeat new password is a required field')
})

const AuthForm = ({errors, handleSubmit, handleChange})=> {
  return(
    <Form noValidate onSubmit={handleSubmit} className='gap-4 px-md-5 d-flex flex-column gap-md-5'>
      <Form.Group className="mb-3 input-group">
        <span className="input-group-text iconLogin">
          <FiLock size={24} className='colorA9Trans'/>
        </span>
        <Form.Control name='currentPassword' className='inputLogin' onChange={handleChange} type="password" placeholder="Enter your new password" isInvalid={!!errors.currentPassword} />
        <Form.Control.Feedback type='invalid'>{errors.currentPassword}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3 input-group">
        <span className="input-group-text iconLogin">
          <FiLock size={24} className='colorA9Trans'/>
        </span>
        <Form.Control name='newPassword' className='inputLogin' onChange={handleChange} type="password" placeholder="Repeat your password" isInvalid={!!errors.newPassword} />
        <Form.Control.Feedback type='invalid'>{errors.newPassword}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3 input-group">
        <span className="input-group-text iconLogin">
          <FiLock size={24} className='colorA9Trans'/>
        </span>
        <Form.Control name='repeatNewPassword' className='inputLogin' onChange={handleChange} type="password" placeholder="Repeat your password" isInvalid={!!errors.repeatNewPassword} />
        <Form.Control.Feedback type='invalid'>{errors.repeatNewPassword}</Form.Control.Feedback>
      </Form.Group>


      {/* <Link to={'/home'} className="d-grid text-decoration-none"> */}
      <Button type="submit" className='d-flex background-primary p-3 justify-content-center border-unset fw-bold fontSize-16 colorWhite'>
        Change Password
      </Button>
      {/* </Link> */}
    </Form>
  )
}

function ChangePassword() {
  const navigate = useNavigate()
  const changePasswordFill = (param)=>{
    if (param.currentPassword === '' && param.newPassword === '' && param.repeatNewPassword === '') {
      window.alert('brah brah brah')
    }else {
      navigate('/profileuser')
    }
  }
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
              {/* <div className="input-group flex-nowrap">
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
              </Link> */}
              <Formik initialValues={{currentPassword: '', newPassword: '', repeatNewPassword: ''}} validationSchema={createNewPassSechema} onSubmit={changePasswordFill}>
                {(props)=><AuthForm {...props}/>}
              </Formik>
            </div>
          </Col>
        </Container>
        <ComFooter />
      </div>
    </>
  )
}

export default ChangePassword