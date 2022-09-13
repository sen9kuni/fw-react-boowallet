import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import ListInfo from '../components/ListInfo'
import ListInfoWLink from '../components/ListInfoWLink'
import ComMenuMobile from '../components/ComMenuMobile'
import {Helmet} from 'react-helmet'
// redux data profile user
import { useDispatch, useSelector } from 'react-redux'
import { getProfileUser } from '../redux/asyncActions/getProfile'
import { getProfile } from '../redux/asyncActions/profile'
import ModalFirstName from '../components/ModalFirstName'
import ModalLastName from '../components/ModalLastName'
// redux data profile user

function PersonalInformation() {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile.dataprofile);
  const token = useSelector((state) => state.auth.token)

  React.useEffect(()=>{
    dispatch(getProfile(token))
  },[]) // kalau tidak pakai [] akan looping hingga over load
  return (
    <>
      <Helmet>
        <title>Profile Information</title>
      </Helmet>
      <div className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
          <ComMenuMobile />
          <ComMenu />
          <Col md={9} className='d-flex flex-column gap-4 rounded shadow-sm p-4 bg-white'>
            <div className='d-flex flex-column gap-3'>
              <span className='fw-bold fontSize-22 color-3a'>Personal Information</span>
              <p className='text-start fontSize-16 color-7a'>We got your personal information from the sign<br/> up proccess. If you want to make changes on<br/> your information, contact our support.</p>
            </div>
            <div className='d-flex flex-column gap-4'>
              <ListInfo titleInfo='First Name' info={profile.first_name !== null ? profile.first_name : '-'} linkTo={<ModalFirstName />} />
              <ListInfo titleInfo='Last Name' info={profile.last_name !== null ? profile.last_name : '-'} linkTo={<ModalLastName />} />
              <ListInfo titleInfo='Verified E-mail' info={profile.email !== null ? profile.email : '-'} />
              <ListInfoWLink titleInfo='Phone Number' info={profile.phonenumber !== null ? profile.phonenumber : '-'} target='/managephone' targetName='Manage' />
            </div>
          </Col>
        </Container>
        <ComFooter />
      </div>
    </>
  )
}

export default PersonalInformation