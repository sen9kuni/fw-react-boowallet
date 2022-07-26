import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import ListProfile from '../components/ListProfile'
import ListInfo from '../components/ListInfo'
import {Helmet} from 'react-helmet'

// image
import ProfileSam from '../assets/images/sam.png'
import { FiCheck, FiDownload, FiShare2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ComMenuMobile from '../components/ComMenuMobile'
// image

function TransferSuccess() {
    return (
        <>
        <Helmet>
            <title>Transaction Success</title>
        </Helmet>
        <div className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
            <ComMenuMobile />
            <ComMenu />
            <Col md={9} className='d-flex flex-column gap-5 rounded shadow-sm p-4 bg-white'>
                <div className='d-flex flex-column mx-auto gap-4'>
                    <div className='rounded-circle background-in cricle-dot text-center mx-auto d-flex align-items-center justify-content-center'>
                            <FiCheck size={28} color='white' />
                    </div>
                    <span className='fw-bold fontSize-22 color-3a'>Transfer Success</span>
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
                <div className="d-flex flex-row justify-content-center justify-content-md-end gap-3">
                    <button className="btn background-dash-primary-trans color-3a"><FiShare2 size={24} /></button>
                    <button className="btn btn-lg background-dash-primary-trans d-flex align-items-center flex-row gap-3 fw-bold colorPrimary"><FiDownload size={22} />Download PDF</button>
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

export default TransferSuccess