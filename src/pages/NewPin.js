import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col, Button, Form, Alert} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import { useNavigate } from 'react-router-dom'
// import PinInput from '../components/PinInput'
import ComMenuMobile from '../components/ComMenuMobile'
import {Helmet} from 'react-helmet'
import { Formik } from 'formik'
import * as Yup from 'yup'
import PinInputOne from '../components/PinInputOne'
import { useDispatch, useSelector } from 'react-redux'
import { changePin } from '../redux/asyncActions/profile'

const changePinNew = Yup.object().shape({
  pin: Yup.array().of(
    Yup.string()
      .matches(/[0-9]{1}/, 'Must number value')
      .required('Needed Pin')
  )
})

const ChangePinForm = ({errors, handleSubmit, handleChange}) => {
  return(
    <Form noValidate onSubmit={handleSubmit} onChange={handleChange} className='d-flex flex-column gap-3'>
      <div className='d-flex flex-row justify-content-center gap-1 mw-100 h-auto'>
        <PinInputOne name={`pin[${0}]`} type='text' />
        <PinInputOne name={`pin[${1}]`} type='text' />
        <PinInputOne name={`pin[${2}]`} type='text' />
        <PinInputOne name={`pin[${3}]`} type='text' />
        <PinInputOne name={`pin[${4}]`} type='text' />
        <PinInputOne name={`pin[${5}]`} type='text' />
      </div>
      <span>{errors.pin}</span>
      <Button type="submit" className='d-flex background-primary p-3 justify-content-center border-unset fw-bold fontSize-16 colorWhite'>
        Confirm
      </Button>
    </Form>
  )
}


function NewPin() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const CurrentPin = useSelector((state) => state.profile.CurrentPin)
  const successMsg = useSelector((state) => state.profile.successMsg)
  const errorMsg = useSelector((state) => state.profile.errorMsg)
  const navigate = useNavigate()
  const submitNewPin = (param)=>{
    const fullPin = param.pin.join('')
    console.log(fullPin);
    console.log(CurrentPin);
    dispatch(changePin({token: token, currentPin: CurrentPin, newPin: fullPin}))
    // navigate('/profileuser')
  }
  return (
    <>
      <Helmet>
        <title>Change Pin</title>
      </Helmet>
      <div className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
          <ComMenuMobile />
          <ComMenu />
          <Col md={9} className='d-flex flex-column gap-5 rounded shadow-sm p-4 bg-white'>
            <div className='d-flex flex-column gap-3'>
              <span className='fw-bold fontSize-22 color-3a'>Change PIN</span>
              <p className='text-start fontSize-16 color-7a'>Enter your current 6 digits Zwallet PIN below to<br/> continue to the next steps.</p>
            </div>
            <div className='d-flex flex-column gap-5 mx-auto'>
              {/* <PinInput />
              <Link to={'/profileuser'} className='d-grid text-decoration-none mb-5'>
                <Button className='d-flex background-primary p-3 justify-content-center border-unset fw-bold fontSize-16 colorWhite'>
                            Change PIN
                </Button>
              </Link> */}
              {successMsg === 'Change Pin successfully' && <Alert className='text-center' variant="success">{successMsg}</Alert>}
              {errorMsg === 'Current Pin is wrong' && <Alert className='text-center' variant="danger">{errorMsg}</Alert>}
              <Formik onSubmit={submitNewPin} initialValues={{pin: ['']}} validationSchema={changePinNew} >
                {(props)=><ChangePinForm {...props}/>}
              </Formik>
            </div>
          </Col>
        </Container>
        <ComFooter />
      </div>
    </>
  )
}

export default NewPin