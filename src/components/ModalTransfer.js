import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import PinTest from './PinTest';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Enter PIN to Transfer
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {/* <h4>Centered Modal</h4> */}
            <p>
                Enter your 6 digits PIN for confirmation to<br/> continue transferring money. 
            </p>
            <PinTest />
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function ModalTransfer() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
            Continue
            </Button>
    
            <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
        </>
    )
}
