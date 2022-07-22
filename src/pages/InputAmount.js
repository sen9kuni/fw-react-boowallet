import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import ListProfile from '../components/ListProfile'

// image
import ProfileSam from '../assets/images/sam.png'
import { FiEdit2 } from 'react-icons/fi'
// image

function InputAmount() {
    return (
        <>
        <body className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
            <ComMenu />
            <Col md={9} className='d-flex flex-column gap-5 rounded shadow-sm p-3 bg-white'>
                <div>
                    <span className='fw-bold font-Size-18 color-3a'>Transaction History</span>
                </div>
                <ListProfile image={ProfileSam} alt='aaaaa' nameUser='Sam' phone='89458752147' />
                <div className='d-flex flex-column gap-5 text-center justify-content-center'>
                    <p className='text-start'>Type the amount you want to transfer and then <br/> press continue to the next steps.</p>
                    <div class="input-group flex-nowrap amoutWarp text-center">
                        <input type="number" class="form-control inputSearch fw-bold mx-auto" placeholder="0.00"/>
                    </div>
                    <div>
                        <span class="fw-bold fontSize-16">Rp120.000 Available</span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <div className="input-group flex-nowrap w-50">
                            <span className="input-group-text iconLogin">
                            <FiEdit2 size={19} className='colorA9Trans'/>
                            </span>
                            <input type="email" className="form-control inputLogin" placeholder="Add some notes"/>
                        </div>
                    </div>

                    <div class="d-flex justify-content-end">
                        <button onclick="document.location='/Dashboard/confirmationTransfer.html'" class="btn btn-lg fw-bold background-primary colorWhite">Continue</button>
                    </div>
                </div>
            </Col>
        </Container>
        <ComFooter />
        </body>
        </>
    )
}

export default InputAmount