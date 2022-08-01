import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import ListHistoryIncome from '../components/ListHistoryIncome'
import ListHistoryExpense from '../components/ListHistoryExpense'
import {Helmet} from 'react-helmet'

// image
import ProfileSam from '../assets/images/sam.png'
import profilerec from '../assets/images/1.png'
import ComMenuMobile from '../components/ComMenuMobile'
// image

// redux data profile user
import { useDispatch, useSelector } from 'react-redux'
import { getHistory } from '../redux/asyncActions/historyTransactions'
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

  React.useEffect(()=>{
    dispatch(getHistory(token))
  },[])
  const finalAmount = numberFormat(history[0].amount)
  console.log(finalAmount);
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
              {history.map(o => {
                if(o.type === 'transfer' && o.sender === 'dummy') {
                  return (
                    <ListHistoryExpense image={profilerec} alt='profile pic' nameUser={o.receiver} typeTransfer={o.type} amount={numberFormat(o.amount)} />
                  )
                } else if (o.type === 'transfer' && o.receiver === 'dummy') {
                  return (
                    <ListHistoryIncome image={ProfileSam} alt='profile pic' nameUser={o.sender} typeTransfer={o.type} amount={numberFormat(o.amount)} />
                  )
                } else if (o.type === 'top up') {
                  return (
                    <ListHistoryIncome image={ProfileSam} alt='profile pic' nameUser={o.receiver} typeTransfer={o.type} amount={numberFormat(o.amount)} />
                  )
                }
              })}
            </div>
          </Col>
        </Container>
        <ComFooter />
      </div>
    </>
  )
}

export default History