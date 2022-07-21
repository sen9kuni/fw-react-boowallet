import React from 'react'
import {Col} from 'react-bootstrap'
// image
import PhoneTwo from '../assets/images/phonetwo.svg'
// image

export default function DasboardRight() {
    return (
        <Col md={7} className='d-none auth-background d-md-flex flex-md-column gap-md-5 p-5'>

            <div className="d-flex flex-column m-auto">
                <div className='d-flex justify-content-start'>
                    <span className="fs-2 fw-bold colorWhite">Zwallet</span>
                </div>
                <div>
                    <img className='responsiveImg' src={PhoneTwo} alt="auth-phone"/>
                </div>

                <div className="d-flex flex-column gap-5">
                    <span className="fs-3 fw-bold colorWhite">App that Covering Banking Needs.</span>
                    <p className="fw-normal colorWhite">Zwallet is an application that focussing in banking needs for all users <br/> in the world. Always updated and always following world trends.<br/> 5000+ users registered in Zwallet everyday with worldwide<br/> users coverage.</p>
                </div>
            </div>
        </Col>
    )
}
