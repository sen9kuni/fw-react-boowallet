import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import ListInfoWLink from '../components/ListInfoWLink'
import {   FiTrash } from 'react-icons/fi'
import ComMenuMobile from '../components/ComMenuMobile'
import {Helmet} from 'react-helmet'

function ManagePhone() {
  return (
    <>
      <Helmet>
        <title>Manage Phone</title>
      </Helmet>
      <div className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
          <ComMenuMobile />
          <ComMenu />
          <Col md={9} className='d-flex flex-column gap-4 rounded shadow-sm p-4 bg-white'>
            <div className='d-flex flex-column gap-3'>
              <span className='fw-bold fontSize-22 color-3a'>Manage Phone Number</span>
              <p className='text-start fontSize-16 color-7a'>You can only delete the phone number and then<br/> you must add another phone number.</p>
            </div>
            <div className='d-flex flex-column gap-4'>
              <ListInfoWLink titleInfo='Phone Number' info='+62 813-9387-7946' target='/addphonenumber' targetName={<FiTrash size={28} className='color-7a' />} />
            </div>
          </Col>
        </Container>
        <ComFooter />
      </div>
    </>
  )
}

export default ManagePhone