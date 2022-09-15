import React from 'react'
import { Row, Col, Dropdown, Button } from 'react-bootstrap'

// image
import ProfilePic from '../assets/images/picProfile.png'
import {FiBell, FiArrowDown, FiArrowUp} from 'react-icons/fi'
import { Link } from 'react-router-dom'
// image

// redux data profile user
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../redux/asyncActions/profile'
import NotifIn from './NotifIn'
import NotifOut from './NotifOut'
import { countNotif, getAllNotif, readAllNotif } from '../redux/asyncActions/notifications'
import Cookies from 'js-cookie'
// redux data profile user

export default function ComHeader() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const profile = useSelector((state) => state.profile.dataprofile);
  const dataNotif = useSelector((state) => state.notificationUser.dataNotif);
  const countNotifVal = useSelector(state => state.notificationUser.countHomeNotif);
  const [notif, setNotif] = React.useState(false);
  const id = Cookies.get('id')

  React.useEffect(()=>{
    dispatch(getProfile(token))
    dispatch(countNotif({token: token}));
    if (parseInt(countNotifVal, 10) > 0) {
      setNotif(true);
    } else {
      setNotif(false);
    }
  },[countNotifVal, dispatch, token])
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
              <div className='image-frame-profile-header rounded-2 overflow-hidden'>
                <Link to={'/profileuser'} className="text-decoration-none">
                  <img className='img-fluid' src={profile?.picture ? profile?.picture : ProfilePic} alt="profile pic" width="80px" />
                </Link>
              </div>
              <div className="d-flex flex-column px-2">
                <span className="fw-bold textProfileName">{`${profile?.first_name} ${profile?.last_name}`}</span>
                <span className="fw-normal textProfileNumber">{profile?.phonenumber === null ? '-' : profile?.phonenumber}</span>
              </div>
            </div>

            <Dropdown>
              <Dropdown.Toggle>
                <FiBell onClick={() => dispatch(getAllNotif({token: token, sort_by: ''}))} size={24} className='colorSecondary' />
                {notif && (
                  <div className='d-flex justify-content-center top-0 end-0 position-absolute circle-notif bg-danger rounded-circle'>
                    <span className='fw-bold fontSize-14 text-white text-center'>
                      {countNotifVal > 10 ? '10+' : countNotifVal}
                    </span>
                  </div>
                )}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {/* <div className="d-flex flex-column gap-3 p-3">
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
                </div> */}
                {dataNotif.length > 0 ? (
                  <div className="d-flex flex-column gap-3 p-3 hight-notif-warp overflow-auto">
                    {dataNotif.map((o) => {
                      if (o.receiverid !== parseInt(id, 10)) {
                        return (
                          <NotifOut data={o} key={'notification' + o.id + o.created_at} amount={o.amount} text={`Transfer to ${o.receiverfirstname} ${o.receiverlastname}`} />
                        )
                      } else {
                        if (o.type === 'transfer') {
                          return (
                            <NotifIn data={o} key={'notification' + o.id + o.created_at} amount={o.amount} text={`Get Transfered from ${o.senderfirstname} ${o.senderlastname}`} />
                          )
                        } else {
                          return (
                            <NotifIn data={o} key={'notification' + o.id + o.created_at} amount={o.amount} text={`Top up to ${o.receiverfirstname} ${o.receiverlastname}`} />
                          )
                        }
                      }
                    })}
                  </div>
                ) : (
                  <div className='d-flex p-1'>
                    <div className='d-flex w-100 justify-content-center border-1 border shadow-sm rounded-2'>
                      <span className='fw-bold fontSize-18'>Notification empty</span>
                    </div>
                  </div>
                )}
                <div className='d-flex flex-row justify-content-end px-3'>
                  {/* <Button variant="link" className='text-decoration-none fw-bold fontSize-16 colorPrimary p-0 shadow-none'>sorting: news</Button> */}
                  <Button disabled={dataNotif.length === 0} onClick={() => dispatch(readAllNotif({token: token}))} variant="link" className='text-decoration-none fw-bold fontSize-16 colorPrimary p-0 shadow-none'>read all</Button>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>

        </Col>
      </Row>
    </>
  )
}
