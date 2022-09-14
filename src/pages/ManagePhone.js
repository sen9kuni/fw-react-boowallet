import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import ListInfoWLink from '../components/ListInfoWLink'
import {   FiEdit2, FiTrash } from 'react-icons/fi'
import ComMenuMobile from '../components/ComMenuMobile'
import {Helmet} from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../redux/asyncActions/profile'

function ManagePhone() {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile.dataprofile);
  const token = useSelector((state) => state.auth.token)

  React.useEffect(()=>{
    dispatch(getProfile(token))
  },[dispatch, token]) // kalau tidak pakai [] akan looping hingga over load
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
              <p className='text-start fontSize-16 color-7a'>You can edit your phone number</p>
            </div>
            <div className='d-flex flex-column gap-4'>
              <ListInfoWLink titleInfo='Phone Number' info={profile.phonenumber !== null ? profile.phonenumber : '-'} target='/addphonenumber' targetName={<FiEdit2 size={28} className='color-7a' />} />
            </div>
          </Col>
        </Container>
        <ComFooter />
      </div>
    </>
  )
}

export default ManagePhone