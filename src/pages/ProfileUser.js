import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import {  FiArrowRight, FiEdit2 } from 'react-icons/fi'
// import { Link } from 'react-router-dom'
import ButtonProfile from '../components/ButtonProfile'

// image
import ProfilePic from '../assets/images/picProfile.png'
// image

function ProfileUser() {
    return (
        <>
        <body className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
            <ComMenu />
            <Col md={9} className='d-flex flex-column gap-4 rounded shadow-sm p-4 bg-white'>
                <div class="col-12 d-flex flex-column text-center gap-3">
                    <div class="d-flex flex-column gap-2">
                        <img class="mx-auto" src={ProfilePic} alt="rofile" width="80px" height="80px" />
                        <button class="btn mx-auto d-flex flex-row gap-2 align-middle align-items-center btnEditProfile">
                                <FiEdit2 />
                                Edit
                        </button>
                    </div>
                    <div class="d-flex flex-column gap-2">
                        <span class="fw-bold profileName fontSize-24">Robert Chandler</span>
                        <span class="fw-normal fontSize-16">+62 813-9387-7946 </span>
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
        </body>
        </>
    )
}   

export default ProfileUser