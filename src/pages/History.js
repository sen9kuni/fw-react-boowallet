import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col, Button} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import ListHistoryIncome from '../components/ListHistoryIncome'
import ListHistoryExpense from '../components/ListHistoryExpense'
import {Helmet} from 'react-helmet'
import Cookies from 'js-cookie'

// image
import ProfileSam from '../assets/images/sam.png'
import ComMenuMobile from '../components/ComMenuMobile'
// image

// redux data profile user
import { useDispatch, useSelector } from 'react-redux'
import { getHistory } from '../redux/asyncActions/historyTransactions'
import { getProfile } from '../redux/asyncActions/profile'
// redux data profile user

export const numberFormat = (value) =>
  new Intl.NumberFormat('id-IN', {
    style: 'currency',
    currency: 'IDR'
  }).format(value);

function History() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const history = useSelector((state) => state.history.data);
  const param = {token: token, page: 1}
  const profile = useSelector((state) => state.profile.data);

  const id = Cookies.get('id')

  const onNextPage = ()=>{
    const param = {token: token, page: history.pageInfo.nextPage}
    dispatch(getHistory(param))
  }

  const onPrevPage = ()=>{
    const param = {token: token, page: history.pageInfo.prevPage}
    dispatch(getHistory(param))
  }

  React.useEffect(()=>{
    dispatch(getHistory(param))
    dispatch(getProfile(token))
  },[])
  return (
    <>
      <Helmet>
        <title>History Transactions</title>
      </Helmet>
      <div className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
          <ComMenuMobile />
          <ComMenu />
          <Col md={9} className='d-flex flex-column gap-3 rounded shadow-sm p-3 bg-white'>
            <span className='fw-bold font-Size-18 color-3a'>Transaction History</span>
            {/* <div>
              <span className='color-7a font-Size-16'>This Week</span>
              <ListHistoryIncome image={ProfileSam} alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
              <ListHistoryExpense image={ProfileSam} alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
            </div>
            <div>
              <span className='color-7a font-Size-16'>This Month</span>
              <ListHistoryIncome image={ProfileSam} alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
              <ListHistoryExpense image={ProfileSam} alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
            </div> */}
            <div>
              {/* {history?.results?.map((o) => {
                if(o.type === 'transfer' && o.sender === 'dummy') {
                  return (
                    <ListHistoryExpense image={ProfileSam} alt='profile pic' nameUser={o.receiver} typeTransfer={o.type} amount={numberFormat(o.amount)} />
                  )
                } else if (o.type === 'transfer' && o.receiver === 'dummy') {
                  return (
                    <ListHistoryIncome image={ProfileSam} alt='profile pic' nameUser={o.sender} typeTransfer={o.type} amount={numberFormat(o.amount)} />
                  )
                } else if (o.type === 'top up') {
                  return (
                    <ListHistoryIncome image={ProfileSam} alt='profile pic' nameUser={o.receiver} typeTransfer={o.type} amount={numberFormat(o.amount)} />
                  )
                } else {
                  return (
                    <ListHistoryIncome image={ProfileSam} alt='profile pic' nameUser={o.receiver} typeTransfer={o.type} amount={numberFormat(o.amount)} />
                  )
                }
              })} */}

              {history?.results?.map((o) => {
                if(o.receiverid !== parseInt(id, 10)) {
                  return (
                    <ListHistoryExpense key={o.id + o.time} image={o.imgreceiver} alt='profile pic' nameUser={`${o.receiverfirstname} ${o.receiverlastname}`} typeTransfer={o.type} amount={numberFormat(o.amount)} />
                  )
                } else {
                  if (o.type === 'transfer') {
                    return (
                      <ListHistoryIncome key={o.id + o.time} image={o.imgsender} alt='profile pic' nameUser={`${o.senderfirstname} ${o.senderlastname}`} typeTransfer={o.type} amount={numberFormat(o.amount)} />
                    )
                  } else {
                    return (
                      <ListHistoryIncome key={o.id + o.time} image={o.imgreceiver} alt='profile pic' nameUser={`${o.receiverfirstname} ${o.receiverlastname}`} typeTransfer={o.type} amount={numberFormat(o.amount)} />
                    )
                  }
                }
              })}
            </div>
            <div className='d-flex flex-row justify-content-between'>
              <Button className='col-5 background-primary border-0 shadow-none' disabled={history?.pageInfo?.prevPage === null} onClick={onPrevPage} >Prev</Button>
              <Button className='col-5 background-primary border-0 shadow-none' disabled={history?.pageInfo?.nextPage === null} onClick={onNextPage} >Next</Button>
            </div>
          </Col>
        </Container>
        <ComFooter />
      </div>
    </>
  )
}

export default History