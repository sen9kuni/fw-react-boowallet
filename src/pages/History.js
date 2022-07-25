import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import ListHistoryIncome from '../components/ListHistoryIncome'
import ListHistoryExpense from '../components/ListHistoryExpense'

// image
import ProfileSam from '../assets/images/sam.png'
// image

function History() {
    return (
        <>
        <div className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
            <ComMenu />
            <Col md={9} className='d-flex flex-column gap-3 rounded shadow-sm p-3 bg-white'>
                <span className='fw-bold font-Size-18 color-3a'>Transaction History</span>
                <div>
                    <span className='color-7a font-Size-16'>This Week</span>
                    <ListHistoryIncome image={ProfileSam} alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
                    <ListHistoryExpense image={ProfileSam} alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
                </div>
                <div>
                    <span className='color-7a font-Size-16'>This Month</span>
                    <ListHistoryIncome image={ProfileSam} alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
                    <ListHistoryExpense image={ProfileSam} alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
                </div>
            </Col>
        </Container>
        <ComFooter />
        </div>
        </>
    )
}

export default History