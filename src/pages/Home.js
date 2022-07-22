import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col, Row} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'

// image
import {FiPlus, FiArrowUp} from 'react-icons/fi'
import GraphicPic from '../assets/images/graphic.svg'
// image

function Home() {
    return (
        <>
            <body className='body-dashboard'>
                <ComHeader />
                <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
                    <ComMenu />
                    <Col md={9} className='d-flex flex-column gap-3 colorWhite'>
                        <div className='d-flex flex-row justify-content-between align-items-center balance-wrap p-4 rounded'>
                            <div className="d-flex flex-column gap-1">
                                <span className="fw-normal balanceTitle">Balance</span>
                                <span className="fs-1 fw-bold fontWhite">Rp120.000</span>
                                <span className="fontMid balancePhone">+62 813-9387-7946</span>
                            </div>
                            <div className="d-flex flex-column gap-2">
                                <button onclick="document.location='/Dashboard/searchReceiver.html'" className="btn btn-lg btn-outline-light bg-f3 d-flex align-items-center">
                                    <FiArrowUp size={25} />
                                    <span className="fw-bold fontSize-18 ">Transfer</span>
                                </button>
                                <button onclick="document.location='/Dashboard/topup.html'" className="btn btn-lg btn-outline-light bg-f3 d-flex align-items-center">
                                    <FiPlus size={25} />
                                    <span className="fw-bold fontSize-18 ">Top Up</span>
                                </button>
                            </div>
                        </div>
                        <Row className='colorSecondary'>
                            <Col md={7} className='rounded shadow-sm p-3'>
                                <div className="d-flex flex-row justify-content-between">
                                    <div className="d-flex flex-column gap-2">
                                        <i className="colorIn" data-feather="arrow-down"></i>
                                        <span className="fw-normal incomeTitle">Income</span>
                                        <span className="fw-bold incomeVal">Rp2.120.000</span>
                                    </div>
                                    <div className="d-flex flex-column gap-2">
                                        <i className="colorOut" data-feather="arrow-up"></i>
                                        <span className="fw-normal incomeTitle">Expense</span>
                                        <span className="fw-bold incomeVal">Rp1.560.000</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <img className='img-fluid' src={GraphicPic} alt="graphic"/>
                                </div>
                            </Col>
                            <Col md={5} className='rounded shadow-sm p-3'>a</Col>
                        </Row>
                    </Col>
                </Container>
                <ComFooter />
            </body>
        </>
    )
}

export default Home