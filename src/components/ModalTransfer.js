import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PinInput from './PinInput';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className='border-bottom-0'>
        <Modal.Title id="contained-modal-title-vcenter" className='fw-bold font-Size-18'>
                Enter PIN to Transfer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <p className='color-3a fw-normal font-Size-16'>
                Enter your 6 digits PIN for confirmation to<br/> continue transferring money. 
        </p>
        <PinInput />
      </Modal.Body>
      <Modal.Footer className='border-top-0'>
        <Link to={'/transferfailed'} className="d-grid text-decoration-none">
          <Button className="btn btn-lg fw-bold background-primary colorWhite">cancel</Button>
        </Link>
        <Link to={'/transfersuccess'} className="d-grid text-decoration-none">
          <Button className="btn btn-lg fw-bold background-primary colorWhite">Continue</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default function ModalTransfer() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button className="btn btn-lg fw-bold background-primary colorWhite border-0" onClick={() => setModalShow(true)}>
            Continue
      </Button>
    
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}
