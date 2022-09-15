import React from 'react'
import { Alert, Button, Form, Modal } from 'react-bootstrap'
import {FiArrowUp} from 'react-icons/fi'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { topUp } from '../redux/asyncActions/transactions'
import { resetMsg } from '../redux/reducers/transactionUser'
import { countNotif } from '../redux/asyncActions/notifications'

const topupSechema  = Yup.object().shape({
  amount: Yup.number('input must be number').min(10000, 'minimal 10.000').max(5000000, 'max 5.000.000').required('must fill amount'),
})

const TopUpForm = ({ errors, handleSubmit, handleChange}) => {
  return (
    <Form noValidate onSubmit={handleSubmit} className='d-flex flex-column gap-md-5'>
      <Form.Group className="mb-3 input-group">
        <Form.Control name='amount' className='inputLogin' onChange={handleChange} type='number' placeholder='input amount here' isInvalid={!!errors.amount} />
        <Form.Control.Feedback type='invalid'>{errors.amount}</Form.Control.Feedback>
      </Form.Group>
      <div className='d-flex justify-content-end'>
        <Button className="btn btn-lg fw-bold background-primary colorWhite border-0 shadow-none" type='submit'>
          Top Up
        </Button>
      </div>
    </Form>
  )
}

function ModalMenuTopUp(props) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const successMsg = useSelector((state) => state.transactionUser.successMsg)
  const hendleTopup = async (value) => {
    await dispatch(topUp({token: token, amount: value.amount}))
    dispatch(countNotif({token: token}));
    // window.alert(successMsg)
  }
  // const onClose = () => {
  //   dispatch(resetMsg())
  //   props.onHide
  // }
  return (
    <Modal
      {...props}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Topup
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <p>
        Enter the amount of money, and click<br/> submit
        </p>
        {successMsg && <Alert variant="success">{successMsg}</Alert>}
        <Formik initialValues={{amount: ''}} validationSchema={topupSechema} onSubmit={hendleTopup}>
          {(props)=><TopUpForm {...props}/>}
        </Formik>
        {/* <div className='d-flex justify-content-end'>
          <Button className="btn btn-lg fw-bold bg-danger colorWhite border-0 shadow-none mt-2" onClick={props.onHide}>
            Close
          </Button>
        </div> */}
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

const ModalTopup = () => {
  const dispatch = useDispatch()
  const [modalShow, setModalShow] = React.useState(false)
  const onModalBtn = () => {
    dispatch(resetMsg())
    setModalShow(true)
  }
  return (
    <>
      <Button onClick={onModalBtn} className='d-flex justify-content-center align-self-center align-items-center flex-row px-3 py-2 text-white background-primary topupButton border-0 shadow-none'>
        <FiArrowUp size={25} />
        <span className='fontSize-22 fontMid'>Top Up</span>
      </Button>
      <ModalMenuTopUp show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  )
}

export default ModalTopup