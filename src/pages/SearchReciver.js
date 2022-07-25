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
    const [data, setdata] = React.useState({})

    React.useEffect(()=> {
        setdata({
                "success": true,
                "message": "List all Profile search",
                "pageInfo": {
                    "totalData": 3,
                    "totalPage": 1,
                    "currentPage": 1,
                    "nextPage": null,
                    "prevPage": null
                },
                "result": [
                    {
                        "id": 1,
                        "fullname": "ramdhan",
                        "phonenumber": "089547214467",
                        "balance": "650000",
                        "picture": "1657600418186.jpeg",
                        "user_id": 1
                    },
                    {
                        "id": 2,
                        "fullname": "galih",
                        "phonenumber": null,
                        "balance": "910000",
                        "picture": null,
                        "user_id": 2
                    },
                    {
                        "id": 3,
                        "fullname": "dummy budi uwb",
                        "phonenumber": "089547214469",
                        "balance": "1250000",
                        "picture": "1658377640832.png",
                        "user_id": 5
                    },
                    {
                        "id": 4,
                        "fullname": "dummy budi uwb",
                        "phonenumber": "089547214469",
                        "balance": "1250000",
                        "picture": "1658377640832.png",
                        "user_id": 5
                    }
                ]
        })
    }, [])

    return (
        <>
        <div className='body-dashboard'>
            <ComHeader />
            <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
                <ComMenu />
                <Col md={9} className='d-flex flex-column gap-4 rounded shadow-sm p-4 bg-white'>
                    <div>
                        <span className="fw-bold fontSize fontSize-18 color-3a">Search Receiver</span>
                    </div>

                    <div className="input-group flex-nowrap rounded background-dash-3a3 p-3 search-reciver-input">
                        <span className="input-group-text iconSearch">
                            <FiSearch className='color-a9' size={24} />
                        </span>
                        <input type="email" className="form-control inputSearch" placeholder="Search receiver here"/>
                    </div>
                    <div className="d-flex flex-column gap-3">
                        {/* <ListProfile image={ProfileSam} alt='aaaaa' nameUser='Sam' phone='89458752147' />
                        <ListProfile image={ProfileSam} alt='aaaaa' nameUser='Sam' phone='89458752147' />
                        <ListProfile image={ProfileSam} alt='aaaaa' nameUser='Sam' phone='89458752147' />
                        <ListProfile image={ProfileSam} alt='aaaaa' nameUser='Sam' phone='89458752147' /> */}
                        {data?.result?.map(user =>{
                            return(
                                <ListProfile image={ProfileSam} alt={user.picture} nameUser={user.fullname} phone={user.phonenumber} />
                            )
                        })}
                    </div>
                </Col>
            </Container>
            <ComFooter />
        </div>
        </>
    )
}

export default SearchReciver