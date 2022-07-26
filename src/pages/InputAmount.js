import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import ListProfile from '../components/ListProfile'
import {Helmet} from 'react-helmet'

// image
import ProfileSam from '../assets/images/sam.png'
import { FiEdit2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ComMenuMobile from '../components/ComMenuMobile'
// image

function InputAmount() {
    return (
        <>
        <Helmet>
            <title>Form transaction</title>
        </Helmet>
        <div className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
            <ComMenuMobile />
            <ComMenu />
            <Col md={9} className='d-flex flex-column gap-5 rounded shadow-sm p-3 bg-white'>
                <div>
                    <span className='fw-bold font-Size-18 color-3a'>Transaction History</span>
                </div>
                <ListProfile image={ProfileSam} alt='aaaaa' nameUser='Sam' phone='89458752147' />
                <div className='d-flex flex-column gap-5 text-center justify-content-center'>
                    <p className='text-start color-7a'>Type the amount you want to transfer and then <br/> press continue to the next steps.</p>
                    <div className="input-group flex-nowrap amoutWarp text-center">
                        <input type="number" className="form-control inputSearch fw-bold mx-auto" placeholder="0.00"/>
                    </div>
                    <div>
                        <span className="fw-bold fontSize-16">Rp120.000 Available</span>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="input-group flex-nowrap w-50">
                            <span className="input-group-text iconLogin">
                            <FiEdit2 size={19} className='colorA9Trans'/>
                            </span>
                            <input type="email" className="form-control inputLogin" placeholder="Add some notes"/>
                        </div>
                    </div>

                    <div className="d-flex justify-content-end">
                        <Link to={"/confirmation"} className="text-decoration-none">
                            <button className="btn btn-lg fw-bold background-primary colorWhite">Continue</button>
                        </Link>
                    </div>
                </div>
            </Col>
        </Container>
        <ComFooter />
        </div>
        </>
    )
}

export default InputAmount