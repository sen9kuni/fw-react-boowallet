import React from 'react'
import { Alert, Button, Form, Modal } from 'react-bootstrap'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { deleteImage, resetMsgProfile, uploadImage } from '../redux/reducers/profile'

function ModalChangeFirstName(props) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const successMsg = useSelector((state) => state.profile.successMsg)
  const errorMsg = useSelector((state) => state.profile.errorMsg)
  const [file, setFile] = React.useState()
  const hendleChange = (value) => {
    console.log(value.first_name);
  }
  const editProfileBtn = (value) => {
    if(file) {
      dispatch(uploadImage({token: token, file:file}))
    }
  }
  const handleChange = (event) => {
    setFile(event.target.files[0])
  }
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit your first name
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
        Enter first name, and click<br/> Change First Name
        </p>
        {successMsg === 'Profile updated' && <Alert className='text-center' variant="success">{successMsg}</Alert>}
        {errorMsg === 'Error: File too large' && <Alert className='text-center' variant="danger">{errorMsg}</Alert>}
        <Form onSubmit={editProfileBtn}>
          <Form.Group controlId="formFile" className="mb-3 w-75 mx-auto">
            <Form.Label>Upload your image profile</Form.Label>
            <Form.Control onChange={handleChange} type="file" name='image' />
          </Form.Group>
        </Form>
        <div className='d-flex justify-content-end'>
          <Button className="btn btn-lg fw-bold background-primary colorWhite border-0 shadow-none" onClick={editProfileBtn}>
            Change profile picture
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function ModalEditImage() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const successMsg = useSelector((state) => state.profile.successMsg)
  const [modalShow, setModalShow] = React.useState(false)
  const onModalBtn = () => {
    dispatch(resetMsgProfile())
    setModalShow(true)
  }
  const onDelete = () => {
    dispatch(deleteImage({token: token}))
  }
  return (
    <>
      {successMsg === 'your picture is deleted' && <Alert className='text-center' variant="success">{successMsg}</Alert>}
      <div className='d-flex flex-column'>
        <button className="btn mx-auto d-flex flex-row gap-2 align-middle align-items-center btnEditProfile mb-2" onClick={onModalBtn}>
          <FiEdit2 />
          Edit
        </button>
        <button onClick={onDelete} className="btn mx-auto d-flex flex-row gap-2 align-middle align-items-center btnEditProfile">
          <FiTrash2 />
          delete
        </button>

      </div>
      <ModalChangeFirstName show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  )
}

export default ModalEditImage