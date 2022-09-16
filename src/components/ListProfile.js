import React from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileById } from '../redux/asyncActions/transactions'

export default function ListProfile({image, alt, nameUser, phone, id}) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const onChoice = () => {
    dispatch(getProfileById({token: token, user_id: id}))
  }
  return (
    <Col>
      <div onClick={onChoice} className="d-flex flex-row justify-content-between align-items-center rounded searchListWrap background-dash-white shadow-sm p-3">
        <div className="d-flex flex-row gap-3">
          <div className='image-frame-profile-search-reciver rounded-2 overflow-hidden'>
            <img className='img-fluid h-100' src={image} alt={alt} width="70px" height="70px" />
          </div>
          <div className="d-flex flex-column gap-2">
            <span className="fw-bold fontSize-18 color-4d">{nameUser}</span>
            <span className="color-7a fontSize-16">+62 {phone}</span>
          </div>
        </div>
      </div>
    </Col>
  )
}
