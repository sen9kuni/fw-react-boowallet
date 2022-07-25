import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import ListProfile from '../components/ListProfile'
import ListInfo from '../components/ListInfo'

// image
import ProfileSam from '../assets/images/sam.png'
import { FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
// image

function TransferFailed() {
    return (
        <>
        <div className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
            <ComMenu />
            <Col md={9} className='d-flex flex-column gap-5 rounded shadow-sm p-4 bg-white'>
                <div className='d-flex flex-column mx-auto gap-4 text-center'>
                    <div className='rounded-circle background-out cricle-dot text-center mx-auto d-flex align-items-center justify-content-center'>
                            <FiX size={28} color='white' />
                    </div>
                    <span className='fw-bold fontSize-22 color-3a'>Transfer Failed</span>
                    <p className='fontSize-16 color-7a'>We can't transfer your money at the moment, we recommend you to check your<br/> internet connection and try again.</p>
                </div>
                <div className='d-flex flex-column gap-3'>
                    <ListInfo titleInfo='Amount' info='Rp100.000' />
                    <ListInfo titleInfo='Balance Left' info='Rp20.000' />
                    <ListInfo titleInfo='Date & Time' info='May 11, 2020 - 12.20' />
                    <ListInfo titleInfo='Notes' info='For buying some socks' />
                </div>
                <div className='d-flex flex-column gap-3'>
                    <span className='fw-bold font-Size-18 color-3a'>Transfer To</span>
                    <ListProfile image={ProfileSam} alt='aaaaa' nameUser='Sam' phone='89458752147' />
                </div>
                <div className="d-flex flex-row justify-content-end gap-3">
                    <Link to={'/history'} className="d-grid text-decoration-none">
                        <button className="btn btn-lg fw-bold background-primary colorWhite px-4">Continue</button>
                    </Link>
                </div>
            </Col>
        </Container>
        <ComFooter />
        </div>
        </>
    )
}

export default TransferFailed