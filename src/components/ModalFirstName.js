import { Formik } from 'formik'
import React from 'react'
import { Alert, Button, Form, Modal } from 'react-bootstrap'
import { FiEdit2 } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { editProfileName, resetMsgProfile } from '../redux/reducers/profile'
import * as Yup from 'yup'

const changeSechema  = Yup.object().shape({
  first_name: Yup.string()
    .min(3, 'first name min 3')
    .required('first name is required field'),
})

const TopUpForm = ({ errors, handleSubmit, handleChange}) => {
  return (
    <Form noValidate onSubmit={handleSubmit} className='d-flex flex-column gap-md-5'>
      <Form.Group className="mb-3 input-group">
        <Form.Control name='first_name' className='inputLogin text-center' onChange={handleChange} type='text' placeholder='input first name here' isInvalid={!!errors.first_name} />
        <Form.Control.Feedback className='text-center' type='invalid'>{errors.first_name}</Form.Control.Feedback>
      </Form.Group>
      <div className='d-flex justify-content-end'>
        <Button className="btn btn-lg fw-bold background-primary colorWhite border-0 shadow-none" type='submit'>
          Change First Name
        </Button>
      </div>
    </Form>
  )
}

function ModalChangeFirstName(props) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const successMsg = useSelector((state) => state.profile.successMsg)
  const hendleChange = (value) => {
    console.log(value.first_name);
    dispatch(editProfileName({token: token, first_name: value.first_name}))
  }
  return (
    <Modal
      {...props}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit your first name
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <p>
        Enter first name, and click<br/> Change First Name
        </p>
        {successMsg === 'Profile name updated' && <Alert variant="success">{successMsg}</Alert>}
        <Formik initialValues={{first_name: ''}} validationSchema={changeSechema} onSubmit={hendleChange}>
          {(props)=><TopUpForm {...props}/>}
        </Formik>
      </Modal.Body>
    </Modal>
  );
}

function ModalFirstName() {
  const dispatch = useDispatch()
  const [modalShow, setModalShow] = React.useState(false)
  const onModalBtn = () => {
    dispatch(resetMsgProfile())
    setModalShow(true)
  }
  return (
    <>
      <Button onClick={onModalBtn} className='d-flex justify-content-center align-self-center align-items-center flex-row px-2 py-2 text-white background-primary border-0 shadow-none'>
        <FiEdit2 size={25} />
      </Button>
      <ModalChangeFirstName show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  )
}

export default ModalFirstName