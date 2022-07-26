import React from 'react'
import LogoDashboard from '../components/LogoDashboard'
import DasboardRight from '../components/DasboardRight'
import {Row, Col, Form, Button} from 'react-bootstrap'
import {Helmet} from 'react-helmet'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'

// image etc
import {FiMail, FiLock} from 'react-icons/fi'
// image etc

const loginSechema  = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required(),
  password: Yup.string().min(8).required()
})

const AuthForm = ({errors, handleSubmit, handleChange})=> {
  return(
    <Form noValidate onSubmit={handleSubmit} className='gap-4 px-md-5 d-flex flex-column gap-md-5'>
      <Form.Group className="mb-3 input-group">
        <span className="input-group-text iconLogin">
          <FiMail size={24} className='colorA9Trans'/>
        </span>
        <Form.Control name='email' className='inputLogin' onChange={handleChange} type="email" placeholder="Enter your e-mail" isInvalid={!!errors.email} />
        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3 input-group">
        <span className="input-group-text iconLogin">
          <FiLock size={24} className='colorA9Trans'/>
        </span>
        <Form.Control name='password' className='inputLogin' onChange={handleChange} type="password" placeholder="Enter your password" isInvalid={!!errors.password} />
        <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
      </Form.Group>

      <div className="text-end">
        <Link to={'/resetpassword'} className="link-secondary text-decoration-none fontMid">Forgot password?</Link>
      </div>

      <Link to={'/home'} className="d-grid text-decoration-none">
        <Button variant="primary" type="submit" className="btn DashbuttonLogin fw-bold colorWhite">
        Login
        </Button>
      </Link>

      <div className="text-center">
        Don't have an account? Let's <Link className="fw-bold colorPrimary text-decoration-none" to={'/signup'}>Sign Up</Link>
      </div>
    </Form>
  )
}

function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LogoDashboard />
      <Row className='min-vh-100 mw-100'>
        <DasboardRight />
        <Col md={5} className='p-5 gap-4 px-md-5 p-5 d-flex flex-column gap-md-5'>
          <h3 className="text-start fs-3 fw-bold colorSecondary">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h3>
          <p className="text-start fw-normal text-muted">Transfering money is eassier than ever, you can access <br/> Zwallet wherever you are. Desktop, laptop, mobile phone? <br/> we cover all of that for you!</p>

          {/* <div className="input-group flex-nowrap">
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
                </div> */}

          <Formik initialValues={{email: ''}} validationSchema={loginSechema}>
            {(props)=><AuthForm {...props}/>}
          </Formik>

          {/* <div className="text-end">
                    <Link to={"/resetpassword"} className="link-secondary text-decoration-none fontMid">Forgot password?</Link>
                </div>

                <Link to={'/home'} className="d-grid text-decoration-none">
                    <button className="btn DashbuttonLogin fw-bold colorWhite">Login</button>
                </Link>

                <div className="text-center">
                    Don't have an account? Let's <Link className="fw-bold colorPrimary text-decoration-none" to={"/signup"}>Sign Up</Link>
                </div> */}
        </Col>
      </Row>
    </>
  )
}

export default Login