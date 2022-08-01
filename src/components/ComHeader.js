import React from 'react'
import { Row, Col, Dropdown } from 'react-bootstrap'

// image
import ProfilePic from '../assets/images/picProfile.png'
import {FiBell, FiArrowDown, FiArrowUp} from 'react-icons/fi'
import { Link } from 'react-router-dom'
// image

// redux data profile user
import { useDispatch, useSelector } from 'react-redux'
import { getProfileUser } from '../redux/asyncActions/getProfile'
// redux data profile user

export default function ComHeader() {
  const dispatch = useDispatch()
  const profile = useSelector((state)=> state?.profileUser?.results)

  React.useEffect(()=>{
    dispatch(getProfileUser())
  },[])
  return (
    <>
      <Row className='d-flex flex-column flex-md-row align-items-md-center mw-100 m-0 shadow-sm round-bott bg-white'>
        <Col md={6} className='d-md-flex'>
          <div className="d-flex justify-content-start">
            <Link to={'/home'} className="text-decoration-none">
              <span className="fw-bold fs-3 colorPrimary">BooWallet</span>
            </Link>
          </div>
        </Col>
        <Col md={6}>
          <div className='d-flex p-3 p-md-0 justify-content-md-end align-items-center justify-content-between'>
            <div className="d-flex flex-row">
              <Link to={'/profileuser'} className="text-decoration-none">
                <img className='img-fluid' src={ProfilePic} alt="profile pic"/>
              </Link>
              <div className="d-flex flex-column px-2">
                <span className="fw-bold textProfileName">{profile?.results?.fullname}</span>
                <span className="fw-normal textProfileNumber">{profile?.results?.phonenumber}</span>
              </div>
            </div>

            <Dropdown>
              <Dropdown.Toggle>
                <FiBell size={24} className='colorSecondary' />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div className="d-flex flex-column gap-3 p-3">
                  <span>Today</span>
                  <div className="d-flex flex-row justify-content-between p-3 align-items-center listHomeWarp shadow-sm">
                    <div className="d-flex flex-row gap-3">
                      <FiArrowDown className="colorIn" size={24} />
                      <div className="d-flex flex-column">
                        <span className="colorSecondaryTrans fontSize-14">Transfered from Joshua Lee</span>
                        <span className="fw-bold colorSecondary fontSize-18">Rp220.000</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between p-3 align-items-center listHomeWarp shadow-sm">
                    <div className="d-flex flex-row gap-3">
                      <FiArrowUp className="colorOut" size={24}/>
                      <div className="d-flex flex-column">
                        <span className="colorSecondaryTrans fontSize-14">Netflix subscription</span>
                        <span className="fw-bold colorSecondary fontSize-18">Rp149.000</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-column gap-3 mt-3 p-3">
                  <span>This Week</span>
                  <div className="d-flex flex-row justify-content-between p-3 align-items-center listHomeWarp shadow-sm">
                    <div className="d-flex flex-row gap-3">
                      <FiArrowUp className="colorOut" size={24}/>
                      <div className="d-flex flex-column">
                        <span className="colorSecondaryTrans fontSize-14">Transfer to Jessica Lee</span>
                        <span className="fw-bold colorSecondary fontSize-18">Rp100.000</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between p-3 align-items-center listHomeWarp shadow-sm">
                    <div className="d-flex flex-row gap-3">
                      <FiArrowDown className="colorIn" size={24}/>
                      <div className="d-flex flex-column">
                        <span className="colorSecondaryTrans fontSize-14">Top up from BNI E-Banking</span>
                        <span className="fw-bold colorSecondary fontSize-18">Rp300.000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>

        </Col>
      </Row>
    </>
  )
}
