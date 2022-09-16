import React from 'react'
import LogoDashboard from '../components/LogoDashboard'
import DasboardRight from '../components/DasboardRight'
import {Row, Col, Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {Helmet} from 'react-helmet'
import { Formik } from 'formik'
import PinInputOne from '../components/PinInputOne'
import { useDispatch, useSelector } from 'react-redux'
import { createPin } from '../redux/asyncActions/auth'

const CreatePinForm = ({errors, handleSubmit, handleChange}) => {
  return(
    <Form noValidate onSubmit={handleSubmit} onChange={handleChange} className='d-flex flex-column gap-3'>
      <div className='d-flex flex-row justify-content-center gap-1 mw-100 h-auto'>
        <PinInputOne name='pin1' type='text' />
        <PinInputOne name='pin2' type='text' />
        <PinInputOne name='pin3' type='text' />
        <PinInputOne name='pin4' type='text' />
        <PinInputOne name='pin5' type='text' />
        <PinInputOne name='pin6' type='text' />
      </div>
      <span>{errors.pin}</span>
      <Button type="submit" className='d-flex background-primary p-3 justify-content-center border-unset fw-bold fontSize-16 colorWhite'>
      Continue
      </Button>
    </Form>
  )
}


function CreatePin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const email = useSelector((state) => state.auth.email)

  const onSubmitPin = (value) => {
    const fullPin = value.pin1 + value.pin2 + value.pin3 + value.pin4 + value.pin5 + value.pin6
    const data = {email: email, pin: fullPin}
    dispatch(createPin(data))
    navigate('/pinsuccess')
  }
  return (
    <>
      <Helmet>
        <title>Create Pin</title>
      </Helmet>
      <LogoDashboard />
      <Row className='min-vh-100 mw-100'>
        <DasboardRight />

        <Col md={5} className='p-5 gap-4 px-md-5 p-5 d-flex flex-column gap-md-5'>
          <h3 className="text-start fs-3 fw-bold colorTextPrimary">Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</h3>
          <p className="text-start fw-normal text-muted">Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don't tell anyone about your Zwallet account password and the PIN.</p>

          <Formik onSubmit={onSubmitPin} initialValues={{pin1:'',pin2:'',pin3:'',pin4:'',pin5:'',pin6:'',}} >
            {(props)=><CreatePinForm {...props}/>}
          </Formik>
        </Col>
      </Row>
    </>
  )
}

export default CreatePin