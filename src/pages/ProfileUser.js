import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import {  FiArrowRight, FiEdit2 } from 'react-icons/fi'
// import { Link } from 'react-router-dom'
import ButtonProfile from '../components/ButtonProfile'
import {Helmet} from 'react-helmet'

// image
import ProfilePic from '../assets/images/picProfile.png'
import ComMenuMobile from '../components/ComMenuMobile'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../redux/asyncActions/profile'
import ModalEditImage from '../components/ModalEditImage'
// image

function ProfileUser() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const profile = useSelector((state) => state.profile.dataprofile);

  React.useEffect(()=>{
    dispatch(getProfile(token))
  },[])
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
          <ComMenuMobile />
          <ComMenu />
          <Col md={9} className='d-flex flex-column gap-4 rounded shadow-sm p-4 bg-white'>
            <div className="col-12 d-flex flex-column text-center gap-3">
              <div className="d-flex flex-column gap-2">
                <div className='image-frame-profile-user rounded-2 overflow-hidden mx-auto'>
                  <img className="img-fluid" src={profile?.picture ? profile?.picture : ProfilePic} alt="rofile" width="80px" height="80px" />
                </div>
                {/* <button className="btn mx-auto d-flex flex-row gap-2 align-middle align-items-center btnEditProfile">
                  <FiEdit2 />
                    Edit
                </button> */}
                <ModalEditImage />
              </div>
              <div className="d-flex flex-column gap-2">
                <span className="fw-bold profileName fontSize-24">{`${profile?.first_name} ${profile?.last_name}`}</span>
                <span className="fw-normal fontSize-16">{profile?.phonenumber === null ? '-' : profile?.phonenumber}</span>
              </div>
            </div>
            <div className='d-flex flex-column gap-4 w-50 mx-auto'>
              <ButtonProfile target='/personalinformation' text='Personal Information' logo={<FiArrowRight size={25} className='color-7e' />}  />
              <ButtonProfile target='/changepassword' text='Change Password' logo={<FiArrowRight size={25} className='color-7e' />}  />
              <ButtonProfile target='/changepinold' text='Change PIN' logo={<FiArrowRight size={25} className='color-7e' />}  />
              <ButtonProfile target='/' text='Logout' />
            </div>
          </Col>
        </Container>
        <ComFooter />
      </div>
    </>
  )
}   

export default ProfileUser