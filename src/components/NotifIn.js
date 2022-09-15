import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { FiArrowDown } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux';
import { countNotif, readNotif } from '../redux/asyncActions/notifications';
import ListInfo from './ListInfo';
import ListProfileWoutLink from './ListProfileWoutLink';

const numberFormat = (value) =>
  new Intl.NumberFormat('id-IN', {
    style: 'currency',
    currency: 'IDR'
  }).format(value);

function NotifIn({text, amount, data}) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onRead = async () => {
    await dispatch(readNotif({token: token, id: data.id}));
    dispatch(countNotif({token: token}));
    setShow(false)
  }

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <>
      <div className="d-flex flex-row justify-content-between p-3 align-items-center listHomeWarp shadow-sm">
        <div className="d-flex flex-row gap-3">
          <FiArrowDown className="colorIn" size={24} />
          <div className="d-flex flex-column">
            <span className="colorSecondaryTrans fontSize-14">{text}</span>
            <span className="fw-bold colorSecondary fontSize-18">{numberFormat(amount)}</span>
          </div>
        </div>
        <div>
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
          <span className='fw-bold fontSize-18 color-3a mb-1'>Receiver</span>
          <ListProfileWoutLink image={data.imgreceiver} alt={data.receiverfirstname} nameUser={`${data.receiverfirstname} ${data.receiverlastname}`} phone={data.receiverphonenumber} />
          <div className='mb-3' />
          <ListInfo titleInfo='type' info={data.type} />
          <div className='mb-1' />
          <ListInfo titleInfo='Amount' info={numberFormat(data.amount)} />
          <div className='mb-1' />
          <ListInfo titleInfo='Date & Time' info={new Date(data.created_at).toLocaleDateString(undefined, options)} />
        </Modal.Body>
        <Modal.Footer className='border-top-0 background-primary-transparant2'>
          <Button className='bg-danger text-white border-0 shadow-none fw-bold' onClick={onRead}>Read</Button>
          <Button className='background-primary text-white border-0 shadow-none fw-bold' onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default NotifIn