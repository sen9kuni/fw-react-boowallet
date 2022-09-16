import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import ListProfile from '../components/ListProfile'
import ListInfo from '../components/ListInfo'
import {Helmet} from 'react-helmet'

// image
import ProfileSam from '../assets/images/sam.png'
import ModalTransfer from '../components/ModalTransfer'
import ComMenuMobile from '../components/ComMenuMobile'
// image

// redux
import { useSelector } from 'react-redux';
// redux

export const numberFormat = (value) =>
  new Intl.NumberFormat('id-IN', {
    style: 'currency',
    currency: 'IDR'
  }).format(value);

function ConfirmationTransfer() {
  const dataTrans = useSelector((state) => state.transactionUser.dataTrans)
  const profile = useSelector((state) => state.profile.dataprofile);
  const dataChoseprofile = useSelector((state) => state.transactionUser.dataChoseprofile)
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const date = new Date(dataTrans.time).toLocaleDateString(undefined, options);
  const formatMoney = numberFormat(dataTrans.amount)
  return (
    <>
      <Helmet>
        <title>Confirmation Transfer</title>
      </Helmet>
      <div className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
          <ComMenuMobile />
          <ComMenu />
          <Col md={9} className='d-flex flex-column gap-5 rounded shadow-sm p-3 bg-white'>
            <div>
              <span className='fw-bold font-Size-18 color-3a'>Transfer To</span>
            </div>
            <ListProfile image={dataChoseprofile.picture !== null ? dataChoseprofile.picture : ProfileSam} alt={dataChoseprofile.first_name} nameUser={`${dataChoseprofile.first_name} ${dataChoseprofile.last_name}`} phone={dataChoseprofile.phonenumber !== null ? dataChoseprofile.phonenumber : '-'} />
            <div>
              <span className='fw-bold font-Size-18 color-3a'>Details</span>
            </div>
            <div className='d-flex flex-column gap-3'>
              <ListInfo titleInfo='Amount' info={formatMoney} />
              <ListInfo titleInfo='Balance Left' info={numberFormat(profile.balance - dataTrans.amount)} />
              <ListInfo titleInfo='Date & Time' info={date} />
              <ListInfo titleInfo='Notes' info={dataTrans.note} />
            </div>

            <div className="d-flex justify-content-end">
              <ModalTransfer />
            </div>
          </Col>
        </Container>
        <ComFooter />
      </div>
    </>
  )
}

export default ConfirmationTransfer