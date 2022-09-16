import React from 'react'
import LogoDashboard from '../components/LogoDashboard'
import DasboardRight from '../components/DasboardRight'
import {Row, Col, Form, Button, Alert} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {Helmet} from 'react-helmet'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { register } from '../redux/asyncActions/auth'

// image etc
import {FiMail, FiLock, FiUser} from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { setEmail } from '../redux/reducers/auth'
// image etc

const signUpSechema  = Yup.object().shape({
  first_name: Yup.string().min(3).required(),
  last_name: Yup.string().min(3).required(),
  email: Yup.string().email('Invalid email address format').required(),
  password: Yup.string().min(8).required()
})

const AuthForm = ({errors, handleSubmit, handleChange})=> {
  const navigate = useNavigate();
  const successMsg = useSelector((state) => state.auth.successMsg)
  const errorMsg = useSelector((state) => state.auth.errorMsg);

  React.useEffect(() => {
    if (successMsg) {
      navigate('/pin', { state: { successMsg } });
    }
  }, [navigate, successMsg]);
  return(
    <Form noValidate onSubmit={handleSubmit} className='gap-4 px-md-5 d-flex flex-column gap-md-5'>
      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
      <Form.Group className="mb-3 input-group">
        <span className="input-group-text iconLogin">
          <FiUser size={24} className='colorA9Trans'/>
        </span>
        <Form.Control name='first_name' className='inputLogin' onChange={handleChange} type="text" placeholder="Enter your first name" isInvalid={!!errors.first_name} />
        <Form.Control.Feedback type='invalid'>{errors.first_name}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3 input-group">
        <span className="input-group-text iconLogin">
          <FiUser size={24} className='colorA9Trans'/>
        </span>
        <Form.Control name='last_name' className='inputLogin' onChange={handleChange} type="text" placeholder="Enter your last name" isInvalid={!!errors.last_name} />
        <Form.Control.Feedback type='invalid'>{errors.last_name}</Form.Control.Feedback>
      </Form.Group>

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

      <Button variant="primary" type="submit" className="btn DashbuttonLogin fw-bold colorWhite">
      Sign Up
      </Button>
    </Form>
  )
}

function SignUp() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSignUp = (value) => {
    dispatch(register(value))
    dispatch(setEmail(value.email))
    navigate('/pin')
  }
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
          <Formik initialValues={{username: '',email: '', password: ''}} validationSchema={signUpSechema} onSubmit={onSignUp}>
            {(props)=><AuthForm {...props}/>}
          </Formik>

          <div className="text-center">
                Already have an account? Let's <Link className="fw-bold colorPrimary text-decoration-none" to={'/login'}>Login</Link>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default SignUp