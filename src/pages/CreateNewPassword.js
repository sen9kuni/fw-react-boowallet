import React from 'react'
import LogoDashboard from '../components/LogoDashboard'
import DasboardRight from '../components/DasboardRight'
import {Row, Col, Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {Helmet} from 'react-helmet'

// image etc
import {FiLock} from 'react-icons/fi'
// image etc

const newPasswordSechema  = Yup.object().shape({
    password: Yup.string().min(8).required()
})

const NewPaswordForm = ({errors, handleSubmit, handleChange})=> {
    return(
    <Form noValidate onSubmit={handleSubmit} className='gap-4 px-md-5 d-flex flex-column gap-md-5'>
    <Form.Group className="mb-3 input-group">
    <span className="input-group-text iconLogin">
    <FiLock size={24} className='colorA9Trans'/>
    </span>
        <Form.Control name='password' className='inputLogin' onChange={handleChange} type="password" placeholder="Create new password" isInvalid={!!errors.password} />
        <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3 input-group">
    <span className="input-group-text iconLogin">
    <FiLock size={24} className='colorA9Trans'/>
    </span>
        <Form.Control name='password' className='inputLogin' onChange={handleChange} type="password" placeholder="Create new password" isInvalid={!!errors.password} />
        <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
    </Form.Group>

    <Link to={"/login"} className="d-grid text-decoration-none">
        <Button variant="primary" type="submit" className="btn DashbuttonLogin fw-bold colorWhite">
        Reset Password
        </Button>
    </Link>
    </Form>
    )
}

function CreateNewPassword() {
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

            {/* <div className="input-group flex-nowrap">
                <span className="input-group-text iconLogin">
                <FiLock size={24} className='colorA9Trans'/>
                </span>
                <input type="password" className="form-control inputLogin" placeholder="Create new password"/>
            </div>
            <div className="input-group flex-nowrap">
                <span className="input-group-text iconLogin">
                <FiLock size={24} className='colorA9Trans'/>
                </span>
                <input type="password" className="form-control inputLogin" placeholder="Create new password"/>
            </div>

            <Link to={"/login"} className="text-decoration-none">
                <div className="d-grid">
                        <button className="btn DashbuttonLogin fw-bold colorWhite text-decoration-none">Reset Password</button>
                </div>
            </Link> */}

            <Formik initialValues={{email: ''}} validationSchema={newPasswordSechema}>
                {(props)=><NewPaswordForm {...props}/>}
            </Formik>
        </Col>
        </Row>
        </>
    )
}

export default CreateNewPassword