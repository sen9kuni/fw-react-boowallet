import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col, Alert} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import ListHistoryIncome from '../components/ListHistoryIncome'
import ListHistoryExpense from '../components/ListHistoryExpense'
import {Helmet} from 'react-helmet'

// image
import {FiPlus, FiArrowUp, FiArrowDown} from 'react-icons/fi'
import GraphicPic from '../assets/images/graphic.svg'
import ProfileSam from '../assets/images/sam.png'
import { Link, useLocation } from 'react-router-dom'
import ComMenuMobile from '../components/ComMenuMobile'
// image

function Home() {
  const location = useLocation()
  const [data, setdata] = React.useState(true)
  React.useEffect(()=>{
    window.setTimeout(()=>{
      setdata(false)
    }, 2000)
  })
  return (
    <>
      <Helmet>
        <title>BooWallet - Home</title>
      </Helmet>
      {location.state?.errorMsg && (
        <Alert show={data} className='m-0 text-center sticky-top' variant="danger">{location.state.errorMsg}</Alert>
      )}
      <div className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row py-5 gap-3'>
          <ComMenuMobile />
          <ComMenu />
          <Col md={9} className='d-flex flex-column colorWhite gap-3'>
            <Col className='d-flex flex-row justify-content-between align-items-center balance-wrap p-4 rounded background-primary'>
              <div className="d-flex flex-column gap-1">
                <span className="fw-normal fontSize-18 color-Thrid">Balance</span>
                <span className="fs-1 fw-bold fontWhite">Rp120.000</span>
                <span className="fontMid fontSize-14 color-Thrid">+62 813-9387-7946</span>
              </div>
              <div className="d-flex flex-column gap-2">
                <Link to={'/searchreciver'} className='d-grid text-decoration-none'>
                  <button className="btn btn-lg btn-outline-light bg-f3 d-flex align-items-center">
                    <FiArrowUp size={25} />
                    <span className="fw-bold fontSize-18 ">Transfer</span>
                  </button>
                </Link>
                <Link to={'/topup'} className='d-grid text-decoration-none'>
                  <button className="btn btn-lg btn-outline-light bg-f3 d-flex align-items-center">
                    <FiPlus size={25} />
                    <span className="fw-bold fontSize-18 ">Top Up</span>
                  </button>
                </Link>
              </div>
            </Col>

            <Col className='colorSecondary d-flex flex-column flex-md-row gap-3'>
              <Col md={7} className='rounded shadow-sm p-4 bg-white'>
                <div className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-column gap-2">
                    <FiArrowDown size={28} className='colorIn' />
                    <span className="fw-normal fontSize-14">Income</span>
                    <span className="fw-bold fontSize-18">Rp2.120.000</span>
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <FiArrowUp size={28} className='colorOut' />
                    <span className="fw-normal fontSize-14">Expense</span>
                    <span className="fw-bold fontSize-18">Rp1.560.000</span>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-5">
                  <img className='img-fluid' src={GraphicPic} alt="graphic"/>
                </div>
              </Col>

              <Col md={5} className='rounded shadow-sm p-3 bg-white'>
                <div className="d-flex flex-row justify-content-between p-3">
                  <span className="fw-bold fontSize-18">Transaction History</span>
                  <Link to={'/history'} className="d-grid text-decoration-none">
                    <span className='font-med fontSize-14 colorPrimary'>See all</span>
                  </Link> 
                </div>
                <ListHistoryIncome image={ProfileSam} alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
                <ListHistoryExpense image={ProfileSam} alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
                <ListHistoryIncome image={ProfileSam} alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
                <ListHistoryExpense image={ProfileSam} alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
              </Col>
            </Col>
          </Col>
        </Container>
        <ComFooter />
      </div>
    </>
  )
}

export default Home