import React from 'react'
import { Col, Nav, Row } from 'react-bootstrap'
import { FiArrowUp, FiGrid, FiLogOut, FiPlus, FiUser } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../redux/reducers/auth'

export default function ComMenuMobile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onLogout = () => {
    dispatch(logout(()=>{
      navigate('/login')
    }))
  };
  return (
    <Nav className='d-md-none background-primary w-100 rounded'>
      <Row className='d-flex w-100 h-auto p-3 mx-auto justify-content-around gap-2 align-items-center'>
        <Col className='rounded-pill text-center circle-menu d-flex align-items-center justify-content-center shadow-sm background-dash-white'>
          <Link to={'/home'} className="text-decoration-none">
            <FiGrid size={20} className='colorPrimary' />
          </Link>
        </Col>
        <Col className='rounded-pill text-center circle-menu d-flex align-items-center justify-content-center shadow-sm background-dash-white'>
          <Link to={'/searchreciver'} className="text-decoration-none">
            <FiArrowUp size={20} className='colorPrimary' />
          </Link>
        </Col>
        <Col className='rounded-circle text-center circle-menu-big d-flex align-items-center justify-content-center shadow-sm background-dash-white'>
          <Link to={'/topup'} className="text-decoration-none">
            <FiPlus size={20} className='colorPrimary' />
          </Link>
        </Col>
        <Col className='rounded-pill text-center circle-menu d-flex align-items-center justify-content-center shadow-sm background-dash-white'>
          <Link to={'/profileuser'} className="text-decoration-none">
            <FiUser size={20} className='colorPrimary' />
          </Link>
        </Col>
        <Col className='rounded-pill text-center circle-menu d-flex align-items-center justify-content-center shadow-sm background-dash-white'>
          <Link to={'/'} onClick={onLogout} className="text-decoration-none">
            <FiLogOut size={20} className='colorPrimary' />
          </Link>
        </Col>
      </Row>
    </Nav>
  )
}
