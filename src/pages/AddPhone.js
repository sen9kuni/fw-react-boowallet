import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col, Button, Form, Alert} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import { useNavigate } from 'react-router-dom'
import { FiPhone } from 'react-icons/fi'
import ComMenuMobile from '../components/ComMenuMobile'
import {Helmet} from 'react-helmet'
import { Formik } from 'formik'
import * as Yup from 'yup'
import 'yup-phone';
import { useDispatch, useSelector } from 'react-redux'
import { editPhone } from '../redux/asyncActions/profile'

const addPhoneSchema  = Yup.object().shape({
  phone: Yup.string().phone('ID').required()
})

const AuthPhoneForm = ({errors, handleSubmit, handleChange}) => {
  return (
    <Form noValidate onSubmit={handleSubmit} className='d-flex flex-column gap-5 w-50 mx-auto'>
      <Form.Group className="flex-nowrap input-group">
        <span className="input-group-text iconLogin d-flex flex-row gap-3">
          <FiPhone size={24} className='colorA9Trans'/>
          <span className="font-med color-3a fontSize-16">+62</span>
        </span>
        <Form.Control name='phone' className='inputLogin shadow-none' onChange={handleChange} type="text" placeholder="Enter your phone number" isInvalid={!!errors.phone} />
      </Form.Group>
      <span>{errors.phone}</span>
      <Button type="submit" className='d-flex background-primary p-3 justify-content-center border-unset fw-bold fontSize-16 colorWhite'>
        Edit Phone Number
      </Button>
    </Form>
  )
}

function AddPhone() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const successMsg = useSelector((state) => state.profile.successMsg)
  const addNumberProfile = (param) => {
    dispatch(editPhone({token: token, phonenumber: param.phone}))
  }
  return (
    <>
      <Helmet>
        <title>Phone Management - Edit Phone</title>
      </Helmet>
      <div className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
          <ComMenuMobile />
          <ComMenu />
          <Col md={9} className='d-flex flex-column gap-5 rounded shadow-sm p-4 bg-white'>
            <div className='d-flex flex-column gap-3'>
              <span className='fw-bold fontSize-22 color-3a'>Edit Phone Number</span>
              <p className='text-start fontSize-16 color-7a'>Edit at least one phone number for the transfer<br/> ID so you can start transfering your money to<br/> another user.</p>
            </div>
            {successMsg === 'Edit phonenumber successfully' && <Alert className='text-center' variant="success">{successMsg}</Alert>}
            <Formik initialValues={{phone: ''}} validationSchema={addPhoneSchema} onSubmit={addNumberProfile}>
              {(props)=><AuthPhoneForm {...props}/>}
            </Formik>
          </Col>
        </Container>
        <ComFooter />
      </div>
    </>
  )
}

export default AddPhone