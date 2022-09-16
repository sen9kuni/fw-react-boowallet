import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik'
import * as Yup from 'yup'
import PinInputOne from '../components/PinInputOne'
import { useDispatch, useSelector } from 'react-redux';
import { transfer } from '../redux/asyncActions/transactions';

const pinTransfer = Yup.object().shape({
  pin: Yup.array().of(
    Yup.string()
      .matches(/[0-9]{1}/, 'Must number value')
      .required('Needed Pin')
  )
})

const PinForm = ({errors, handleSubmit, handleChange}) => {
  return(
    <>
      <Modal.Body className='d-flex flex-column gap-5'>
        <p className='color-3a fw-normal font-Size-16'>
            Enter your 6 digits PIN for confirmation to<br/> continue transferring money. 
        </p>
        <Form noValidate onSubmit={handleSubmit} onChange={handleChange} className='d-flex flex-column gap-4'>
          <div className='d-flex flex-row justify-content-center gap-1 mw-100 h-auto'>
            <PinInputOne name={`pin[${0}]`} type='text' />
            <PinInputOne name={`pin[${1}]`} type='text' />
            <PinInputOne name={`pin[${2}]`} type='text' />
            <PinInputOne name={`pin[${3}]`} type='text' />
            <PinInputOne name={`pin[${4}]`} type='text' />
            <PinInputOne name={`pin[${5}]`} type='text' />
          </div>
          <span>{errors.pin}</span>
          <div className="d-flex justify-content-end">
            <Button type="submit" className='btn btn-lg fw-bold background-primary colorWhite border-0 shadow-none'>
            Continue
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </>
  )
}

function MyVerticallyCenteredModal(props) {
  const dispatch = useDispatch();
  const dataTrans = useSelector((state) => state.transactionUser.dataTrans)
  const successMsg = useSelector((state) => state.transactionUser.successMsg)
  const errorMsg = useSelector((state) => state.transactionUser.errorMsg)
  const token = useSelector((state) => state.auth.token)
  const navigate = useNavigate()
  const submitPin = (param)=>{
    const fullPin = param.pin.join('')
    const data = {
      amount: dataTrans.amount,
      note: dataTrans.note,
      recipient_id: dataTrans.user_id,
      pin: fullPin,
      time: dataTrans.time,
      token: token,
    };
    dispatch(transfer(data))
  }
  React.useEffect(()=>{
    if (successMsg === 'Transaction is successfully') {
      navigate('/transfersuccess')
    } else if (errorMsg === 'Wrong input Pin') {
      navigate('/transferfailed')
    }
  },[errorMsg, navigate, successMsg])
  return (
    <Modal
      {...props}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className='border-bottom-0'>
        <Modal.Title id="contained-modal-title-vcenter" className='fw-bold font-Size-18'>
                Enter PIN to Transfer
        </Modal.Title>
      </Modal.Header>
      <Formik onSubmit={submitPin} initialValues={{pin: ['']}} validationSchema={pinTransfer} >
        {(props)=><PinForm {...props}/>}
      </Formik>
    </Modal>
  );
}

export default function ModalTransfer() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button className="btn btn-lg fw-bold background-primary colorWhite border-0 shadow-none" onClick={() => setModalShow(true)}>
            Continue
      </Button>
    
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}
