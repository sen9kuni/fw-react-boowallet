import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import ListInfo from '../components/ListInfo'
import ListInfoWLink from '../components/ListInfoWLink'

function PersonalInformation() {
    return (
        <>
        <div className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
            <ComMenu />
            <Col md={9} className='d-flex flex-column gap-4 rounded shadow-sm p-4 bg-white'>
                <div className='d-flex flex-column gap-3'>
                    <span className='fw-bold fontSize-22 color-3a'>Personal Information</span>
                    <p className='text-start fontSize-16 color-7a'>We got your personal information from the sign<br/> up proccess. If you want to make changes on<br/> your information, contact our support.</p>
                </div>
                <div className='d-flex flex-column gap-4'>
                    <ListInfo titleInfo='First Name' info='Robert' />
                    <ListInfo titleInfo='Last Name' info='Chandler' />
                    <ListInfo titleInfo='Verified E-mail' info='pewdiepie1@gmail.com' />
                    <ListInfoWLink titleInfo='Phone Number' info='+62 813-9387-7946' target='/managephone' targetName='Manage' />
                </div>
            </Col>
        </Container>
        <ComFooter />
        </div>
        </>
    )
}

export default PersonalInformation