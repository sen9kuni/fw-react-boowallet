import React from 'react'
import LogoDashboard from '../components/LogoDashboard'
import DasboardRight from '../components/DasboardRight'
import {Row, Col, Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {Helmet} from 'react-helmet'

// image etc
import {FiLock} from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from '../redux/asyncActions/auth'
// image etc

const inputNewPassSechema  = Yup.object().shape({
  password: Yup.string().min(8).required(),
  Repeatpassword: Yup.string().min(8).required()
})

const AuthForm = ({errors, handleSubmit, handleChange})=> {
  return(
    <Form noValidate onSubmit={handleSubmit} className='gap-4 px-md-5 d-flex flex-column gap-md-5'>
      <Form.Group className="mb-3 input-group">
        <span className="input-group-text iconLogin">
          <FiLock size={24} className='colorA9Trans'/>
        </span>
        <Form.Control name='password' className='inputLogin' onChange={handleChange} type="password" placeholder="Enter your new password" isInvalid={!!errors.password} />
        <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3 input-group">
        <span className="input-group-text iconLogin">
          <FiLock size={24} className='colorA9Trans'/>
        </span>
        <Form.Control name='Repeatpassword' className='inputLogin' onChange={handleChange} type="password" placeholder="Repeat your password" isInvalid={!!errors.Repeatpassword} />
        <Form.Control.Feedback type='invalid'>{errors.Repeatpassword}</Form.Control.Feedback>
      </Form.Group>


      <Button type="submit" className="btn DashbuttonLogin fw-bold colorWhite">
      Reset Password
      </Button>
    </Form>
  )
}

function CreateNewPassword() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const email = useSelector((state) => state.auth.email)
  const successMsg = useSelector((state) => state.auth.successMsg)
  const resetReqFill = (value)=>{
    if (value.password === value.Repeatpassword) {
      // dispatch(changePassword({token: token, currentPassword: param.currentPassword, newPassword: param.newPassword}))
      const data = {email: email, newPassword: value.password}
      console.log(data);
      dispatch(resetPassword(data))
    } else {
      window.alert('new password and repeat new password not match')
    }
  }
  React.useEffect(() => {
    if (successMsg === 'Change Password successfully') {
      navigate('/login')
    }
  }, [navigate, successMsg])
  return (
    <>
      <Helmet>
        <title>Reset Password - input new Password</title>
      </Helmet>
      <LogoDashboard />
      <Row className='min-vh-100 mw-100'>
        <DasboardRight />

        <Col md={5} className='p-5 gap-4 px-md-5 p-5 d-flex flex-column gap-md-5'>
          <h3 className="text-start fs-3 fw-bold colorTextPrimary">Did You Forgot Your Password? Don't Worry, You Can Reset Your Password In a Minutes.</h3>
          <p className="text-start fw-normal text-muted">Now you can create a new password for your BooWallet account. Type your password twice so we can confirm your new passsword.</p>
          <Formik initialValues={{password: '', Repeatpassword: '' }} validationSchema={inputNewPassSechema} onSubmit={resetReqFill}>
            {(props)=><AuthForm {...props}/>}
          </Formik>
        </Col>
      </Row>
    </>
  )
}

export default CreateNewPassword