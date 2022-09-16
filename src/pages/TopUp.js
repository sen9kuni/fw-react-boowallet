import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import ListTopup from '../components/ListTopup'
import ComMenuMobile from '../components/ComMenuMobile'
import {Helmet} from 'react-helmet'
import ModalTopup from '../components/ModalTopup'


function TopUp() {
  return (
    <>
      <Helmet>
        <title>Top Up</title>
      </Helmet>
      <div className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
          <ComMenuMobile />
          <ComMenu />
          <Col md={9} className='d-flex flex-column gap-4 rounded shadow-sm p-4 bg-white'>
            <span className='fw-bold fontSize-22 color-3a'>How To Top Up</span>
            <ModalTopup />
            <div className='d-flex flex-column gap-4'>
              <ListTopup number={1} info='Go to the nearest ATM or you can use E-Banking.' />
              <ListTopup number={2} info='Type your security number on the ATM or E-Banking.' />
              <ListTopup number={3} info='Select “Transfer” in the menu' />
              <ListTopup number={4} info='Type the virtual account number that we provide you at the top.' />
              <ListTopup number={5} info='Type the amount of the money you want to top up.' />
              <ListTopup number={6} info='Read the summary details' />
              <ListTopup number={7} info='Press transfer / top up' />
              <ListTopup number={8} info='You can see your money in Zwallet within 3 hours.' />
            </div>
          </Col>
        </Container>
        <ComFooter />
      </div>
    </>
  )
}

export default TopUp