import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col, Button} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import { Link } from 'react-router-dom'
import { FiPhone } from 'react-icons/fi'

function AddPhone() {
    return (
        <>
        <div className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
            <ComMenu />
            <Col md={9} className='d-flex flex-column gap-5 rounded shadow-sm p-4 bg-white'>
                <div className='d-flex flex-column gap-3'>
                    <span className='fw-bold fontSize-22 color-3a'>Change PIN</span>
                    <p className='text-start fontSize-16 color-7a'>Enter your current 6 digits Zwallet PIN below to<br/> continue to the next steps.</p>
                </div>
                <div className='d-flex flex-column gap-5 w-50 mx-auto'>
                <div className="input-group flex-nowrap">
                        <span className="input-group-text iconLogin d-flex flex-row gap-3">
                            <FiPhone size={24} className='colorA9Trans'/>
                            <span className="font-med color-3a fontSize-16">+62</span>
                        </span>
                        <input type="teext" className="form-control inputLogin" placeholder="Add Phone Number"/>
                    </div>
                    <Link to={'/'} className='d-grid text-decoration-none mb-5'>
                        <Button className='d-flex background-primary p-3 justify-content-center border-unset fw-bold fontSize-16 colorWhite'>
                            Change PIN
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