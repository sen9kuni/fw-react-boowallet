import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import ListProfile from '../components/ListProfile'
import ListInfo from '../components/ListInfo'

// image
import ProfileSam from '../assets/images/sam.png'
import ModalTransfer from '../components/ModalTransfer'
import ComMenuMobile from '../components/ComMenuMobile'
// image

function ConfirmationTransfer() {
    return (
        <>
        <div className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
            <ComMenuMobile />
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

                <div className="d-flex justify-content-end">
                    {/* <button className="btn btn-lg fw-bold background-primary colorWhite">Continue</button> */}
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