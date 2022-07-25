import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col, Button} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import { Link } from 'react-router-dom'
import PinInput from '../components/PinInput'

function OldPin() {
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
                <div className='d-flex flex-column gap-5 mx-auto'>
                    <PinInput />
                    <Link to={'/changepinnew'} className='d-grid text-decoration-none mb-5'>
                        <Button className='d-flex background-primary p-3 justify-content-center border-unset fw-bold fontSize-16 colorWhite'>
                            Continue
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

export default OldPin