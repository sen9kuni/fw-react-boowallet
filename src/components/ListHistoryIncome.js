import React from 'react'
import { Button, Col, Modal } from 'react-bootstrap'
import ListInfo from './ListInfo';
import ListProfileWoutLink from './ListProfileWoutLink';

const numberFormat = (value) =>
  new Intl.NumberFormat('id-IN', {
    style: 'currency',
    currency: 'IDR'
  }).format(value);
  
export default function ListHistory({image, alt, nameUser, typeTransfer, amount, data}) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <Col className='d-flex flex-row justify-content-between p-3 align-items-center listHomeWarp'>
      <div className="d-flex flex-row gap-3">
        <div className='image-frame-profile-history rounded-2 overflow-hidden'>
          <img className='img-fluid h-100' src={image} alt={alt}/>
        </div>
        <div className="d-flex flex-column">
          <span className="fw-bold color-4d">{nameUser}</span>
          <span className="color-thrid-sub">{typeTransfer}</span>
        </div>
      </div>
      <div className='d-flex flex-column'>
        <span className="fw-bold colorIn">+{amount}</span>
        <div className='d-flex justify-content-end'>
          <Button onClick={handleShow} variant="link" className="fw-bold text-decoration-none colorIn px-0 py-0 color-3a border-0 shadow-none">Detail</Button>
        </div>
      </div>
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className='border-bottom-0 background-primary-transparant2'>
          <Modal.Title className='fw-bold' id="contained-modal-title-vcenter">
          Detail Transaction
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='background-primary-transparant2'>
          {data.type !== 'top up' && 
          <>
            <span className='fw-bold fontSize-18 color-3a mb-1'>Sender</span>
            <ListProfileWoutLink image={data.imgsender} alt={data.senderfirstname} nameUser={`${data.senderfirstname} ${data.senderlastname}`} phone={data.phonenumbersender} />
          </>
          }
          {/* <span className='fw-bold fontSize-18 color-3a mb-1'>Sender</span>
          <ListProfileWoutLink image={data.imgsender} alt={data.senderfirstname} nameUser={`${data.senderfirstname} ${data.senderlastname}`} phone={data.phonenumbersender} /> */}
          <span className='fw-bold fontSize-18 color-3a mb-1'>Receiver</span>
          <ListProfileWoutLink image={data.imgreceiver} alt={data.receiverfirstname} nameUser={`${data.receiverfirstname} ${data.receiverlastname}`} phone={data.phonenumberreceiver} />
          <div className='mb-3' />
          <ListInfo titleInfo='type' info={typeTransfer} />
          <div className='mb-1' />
          <ListInfo titleInfo='Amount' info={numberFormat(data.amount)} />
          <div className='mb-1' />
          <ListInfo titleInfo='Date & Time' info={new Date(data.time).toLocaleDateString(undefined, options)} />
          <div className='mb-1' />
          <ListInfo titleInfo='Notes' info={data.note} />
        </Modal.Body>
        <Modal.Footer className='border-top-0 background-primary-transparant2'>
          <Button className='background-primary text-white border-0 shadow-none fw-bold' onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Col>
  )
}
