import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import ListProfile from '../components/ListProfile'
import ListInfo from '../components/ListInfo'

// image
import ProfileSam from '../assets/images/sam.png'
// image

function ConfirmationTransfer() {
    return (
        <>
        <body className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
            <ComMenu />
            <Col md={9} className='d-flex flex-column gap-5 rounded shadow-sm p-3 bg-white'>
                <div>
                    <span className='fw-bold font-Size-18 color-3a'>Transfer To</span>
                </div>
                <ListProfile image={ProfileSam} alt='aaaaa' nameUser='Sam' phone='89458752147' />
                <div>
                    <span className='fw-bold font-Size-18 color-3a'>Details</span>
                </div>
                <div className='d-flex flex-column gap-3'>
                <ListInfo titleInfo='Amount' info='Rp100.000' />
                <ListInfo titleInfo='Balance Left' info='Rp20.000' />
                <ListInfo titleInfo='Date & Time' info='May 11, 2020 - 12.20' />
                <ListInfo titleInfo='Notes' info='For buying some socks' />
                </div>

                <div class="d-flex justify-content-end">
                    <button onclick="document.location='/Dashboard/confirmationTransfer.html'" class="btn btn-lg fw-bold background-primary colorWhite">Continue</button>
                </div>
            </Col>
        </Container>
        <ComFooter />
        </body>
        </>
    )
}

export default ConfirmationTransfer