import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col, Button} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import { Link } from 'react-router-dom'
import { FiPhone } from 'react-icons/fi'
import ComMenuMobile from '../components/ComMenuMobile'
import {Helmet} from 'react-helmet'

function AddPhone() {
    return (
        <>
        <Helmet>
            <title>Phone Management - Add Phone</title>
        </Helmet>
        <div className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
            <ComMenuMobile />
            <ComMenu />
            <Col md={9} className='d-flex flex-column gap-5 rounded shadow-sm p-4 bg-white'>
                <div className='d-flex flex-column gap-3'>
                    <span className='fw-bold fontSize-22 color-3a'>Add Phone Number</span>
                    <p className='text-start fontSize-16 color-7a'>Add at least one phone number for the transfer<br/> ID so you can start transfering your money to<br/> another user.</p>
                </div>
                <div className='d-flex flex-column gap-5 w-50 mx-auto'>
                <div className="input-group flex-nowrap">
                        <span className="input-group-text iconLogin d-flex flex-row gap-3">
                            <FiPhone size={24} className='colorA9Trans'/>
                            <span className="font-med color-3a fontSize-16">+62</span>
                        </span>
                        <input type="teext" className="form-control inputLogin" placeholder="Add Phone Number"/>
                    </div>
                    <Link to={'/profileuser'} className='d-grid text-decoration-none mb-5'>
                        <Button className='d-flex background-primary p-3 justify-content-center border-unset fw-bold fontSize-16 colorWhite'>
                            Add Phone Number
                        </Button>
                    </Link>
                </div>
            </Col>
        </Container>
        <ComFooter />
        </div>
        </>
    )
}

export default AddPhone