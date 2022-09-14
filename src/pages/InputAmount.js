import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col, Form, Button} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
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
import { useDispatch, useSelector } from 'react-redux'
import { resetMsg, setDataTrans } from '../redux/reducers/transactionUser'
import ListProfileWoutLink from '../components/ListProfileWoutLink'

const loginSechema  = Yup.object().shape({
  amount: Yup.number().min(10000, 'minimal 10.000').max(5000000, 'max 5.000.000').required('must fill amount'),
})

const numberFormat = (value) =>
  new Intl.NumberFormat('id-IN', {
    style: 'currency',
    currency: 'IDR'
  }).format(value);

const AuthForm = ({errors, handleSubmit, handleChange})=>{
  const profile = useSelector((state) => state.profile.dataprofile);
  const balanceFinal = numberFormat(parseInt(profile.balance))
  const [btnSub, setBtnSub] = React.useState(false)
  const [data, setData] = React.useState({})
  return (
    <Form noValidate onSubmit={handleSubmit} className='d-flex flex-column gap-5 text-center justify-content-center'>
      <p className='text-start color-7a'>Type the amount you want to transfer and then <br/> press continue to the next steps.</p>
      <Form.Group className="flex-nowrap amoutWarp text-center" onChange={handleChange}>
        <Form.Control onChange={(event)=> {
          if (event.target.value > profile?.balance ) {
            setBtnSub(true)
          } else {
            setBtnSub(false)
          }
        }} name='amount' className='border-0 shadow-none' type="number" placeholder="0.00" isInvalid={!!errors.amount} />
        <Form.Control.Feedback type='invalid'>{errors.amount}</Form.Control.Feedback>
      </Form.Group>
      <div>
        <span className="fw-bold fontSize-16">{balanceFinal} Available</span>
      </div>

      <div className=' d-flex justify-content-center '>
        {/* <Form.Group className="mb-3 input-group w-50">
          <span className="input-group-text iconLogin">
            <FiEdit2 size={24} className='colorA9Trans'/>
          </span>
          <Form.Control name='notes' onChange={(e)=>{dispatch(costomNotes(e.target.value))}}  className='inputLogin' type="text" placeholder="Add some notes" />
        </Form.Group> */}
        <Form.Group className="mb-3 input-group w-50">
          <span className="input-group-text iconLogin">
            <FiEdit2 size={24} className='colorA9Trans'/>
          </span>
          <Form.Control name='note' onChange={handleChange} className='inputLogin' type="text" placeholder="Add some notes" />
        </Form.Group>
      </div>

      <div className="d-flex justify-content-end">
        <Button disabled={btnSub || errors.amount} type="submit" className="btn btn-lg DashbuttonLogin fw-bold colorWhite shadow-none">
          Continue
        </Button>
      </div>
    </Form>
  )
}
// , pin: ['']
// onChange={(e)=>{dispatch(costomNotes(e.target.value))}} 
function InputAmount() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const dataChoseprofile = useSelector((state) => state.transactionUser.dataChoseprofile)
  const dataTrans = useSelector((state) => state.transactionUser.dataTrans)
  const token = useSelector((state) => state.auth.token)
  const loginReqFill = (param)=>{
    // if (param.note === undefined || param.note === '') {
    //   dispatch(setDataTrans({amount: param.amount, note: '-'}))
    //   navigate('/confirmation')
    // } else {
    //   dispatch(setDataTrans({amount: param.amount, note: param.note}))
    //   navigate('/confirmation')
    // }
    const value = {
      token: token,
      note: param.note === '' ? '-' : param.note,
      amount: parseInt(param.amount, 10),
      user_id: parseInt(dataChoseprofile.user_id, 10),
      time: new Date().toISOString(),
    };
    dispatch(resetMsg())
    dispatch(setDataTrans(value))
    navigate('/confirmation')
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
              <span className='fw-bold font-Size-18 color-3a'>Transfer Money</span>
            </div>
            <ListProfileWoutLink image={dataChoseprofile.picture !== null ? dataChoseprofile.picture : ProfileSam} alt={dataChoseprofile.first_name} nameUser={`${dataChoseprofile.first_name} ${dataChoseprofile.last_name}`} phone={dataChoseprofile.phonenumber !== null ? dataChoseprofile.phonenumber : '-'} />

            <Formik initialValues={{amount: '', note: ''}} validationSchema={loginSechema} onSubmit={loginReqFill}>
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