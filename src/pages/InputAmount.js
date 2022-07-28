import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col, Form, Button} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import ListProfile from '../components/ListProfile'
import {Helmet} from 'react-helmet'
import ComMenuMobile from '../components/ComMenuMobile'
import { Formik } from 'formik'
import * as Yup from 'yup'

// image
import ProfileSam from '../assets/images/sam.png'
import { FiEdit2 } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
// image

// redux etc
import { costomAmount, costomNotes } from '../redux/reducers/CostomValue'
import { useDispatch } from 'react-redux'
// redux etc

const loginSechema  = Yup.object().shape({
  amount: Yup.number().min(10000, 'minimal 10.000').max(5000000, 'max 5.000.000').required('must fill amount'),
  notes: Yup.string()
})

const AuthForm = ({errors, handleSubmit, handleChange})=>{
  return (
    <Form noValidate onSubmit={handleSubmit} className='d-flex flex-column gap-5 text-center justify-content-center'>
      <p className='text-start color-7a'>Type the amount you want to transfer and then <br/> press continue to the next steps.</p>
      <Form.Group className="flex-nowrap amoutWarp text-center">
        <Form.Control name='amount' className='border-0 shadow-none' onChange={handleChange} type="number" placeholder="0.00" isInvalid={!!errors.amount} />
        <Form.Control.Feedback type='invalid'>{errors.amount}</Form.Control.Feedback>
      </Form.Group>
      <div>
        <span className="fw-bold fontSize-16">Rp120.000 Available</span>
      </div>

      <div className=' d-flex justify-content-center '>
        <Form.Group className="mb-3 input-group w-50">
          <span className="input-group-text iconLogin">
            <FiEdit2 size={24} className='colorA9Trans'/>
          </span>
          <Form.Control name='notes' className='inputLogin' type="text" placeholder="Add some notes" />
        </Form.Group>
      </div>

      <div className="d-flex justify-content-end">
        <Button type="submit" className="btn btn-lg DashbuttonLogin fw-bold colorWhite">
        Continue
        </Button>
      </div>
    </Form>
  )
}


function InputAmount() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const loginReqFill = (param)=>{
    console.log(param.notes);
    if (param.amount === '') {
      window.alert('amount cant empty')
    }else {
      dispatch(costomAmount((param.amount)))
      dispatch(costomNotes((param.notes)))
      console.log(param.notes);
      navigate('#')
    }
  }
  return (
    <>
      <Helmet>
        <title>Form transaction</title>
      </Helmet>
      <div className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
          <ComMenuMobile />
          <ComMenu />
          <Col md={9} className='d-flex flex-column gap-5 rounded shadow-sm p-3 bg-white'>
            <div>
              <span className='fw-bold font-Size-18 color-3a'>Transaction History</span>
            </div>
            <ListProfile image={ProfileSam} alt='aaaaa' nameUser='Sam' phone='89458752147' />

            <Formik initialValues={{amount: '', notes:''}} validationSchema={loginSechema} onSubmit={loginReqFill}>
              {(props)=><AuthForm {...props}/>}
            </Formik>

            {/* <div className='d-flex flex-column gap-5 text-center justify-content-center'>
              <p className='text-start color-7a'>Type the amount you want to transfer and then <br/> press continue to the next steps.</p>
              <div className="input-group flex-nowrap amoutWarp text-center">
                <input type="number" className="form-control inputSearch fw-bold mx-auto" placeholder="0.00"/>
              </div>
              <div>
                <span className="fw-bold fontSize-16">Rp120.000 Available</span>
              </div>
              <div className="d-flex justify-content-center">
                <div className="input-group flex-nowrap w-50">
                  <span className="input-group-text iconLogin">
                    <FiEdit2 size={19} className='colorA9Trans'/>
                  </span>
                  <input type="text" className="form-control inputLogin" placeholder="Add some notes"/>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <Link to={'/confirmation'} className="text-decoration-none">
                  <button className="btn btn-lg fw-bold background-primary colorWhite">Continue</button>
                </Link>
              </div>

            </div> */}
          </Col>
        </Container>
        <ComFooter />
      </div>
    </>
  )
}

export default InputAmount