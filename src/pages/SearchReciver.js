import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import ListProfile from '../components/ListProfile'

// image
import ProfileSam from '../assets/images/sam.png'
import { FiSearch } from 'react-icons/fi'
// image

function SearchReciver() {
    return (
        <>
        <body className='body-dashboard'>
            <ComHeader />
            <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
                <ComMenu />
                <Col md={9} className='d-flex flex-column gap-4 rounded shadow-sm p-4 bg-white'>
                    <div>
                        <span class="fw-bold fontSize fontSize-18 color-3a">Search Receiver</span>
                    </div>

                    <div class="input-group flex-nowrap rounded background-dash-3a3 p-3 search-reciver-input">
                        <span class="input-group-text iconSearch">
                            <FiSearch className='color-a9' size={24} />
                        </span>
                        <input type="email" class="form-control inputSearch" placeholder="Search receiver here"/>
                    </div>
                    <div class="d-flex flex-column gap-3">
                        <ListProfile image={ProfileSam} alt='aaaaa' nameUser='Sam' phone='89458752147' />
                        <ListProfile image={ProfileSam} alt='aaaaa' nameUser='Sam' phone='89458752147' />
                        <ListProfile image={ProfileSam} alt='aaaaa' nameUser='Sam' phone='89458752147' />
                        <ListProfile image={ProfileSam} alt='aaaaa' nameUser='Sam' phone='89458752147' />
                    </div>
                </Col>
            </Container>
            <ComFooter />
        </body>
        </>
    )
}

export default SearchReciver