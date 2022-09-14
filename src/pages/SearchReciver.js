import React from 'react'
import ComHeader from '../components/ComHeader'
import ComFooter from '../components/ComFooter'
import {Container, Col, Button, Form, Alert} from 'react-bootstrap'
import ComMenu from '../components/ComMenu'
import ListProfile from '../components/ListProfile'
import {Helmet} from 'react-helmet'

// image
import ProfileSam from '../assets/images/sam.png'
import { FiSearch } from 'react-icons/fi'
import ComMenuMobile from '../components/ComMenuMobile'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../redux/asyncActions/transactions'
import { Formik } from 'formik'
import { Link } from 'react-router-dom'
// image

function SearchReciver() {
  const dispatch = useDispatch()
  const [data, setdata] = React.useState({})
  const dataUsers = useSelector((state) => state.transactionUser.dataUsers);
  const errorMsg = useSelector((state) => state.transactionUser.errorMsg);
  const token = useSelector((state) => state.auth.token)
  const [search, setSearch] = React.useState('');

  React.useEffect(()=> {
    if (search) {
      dispatch(getAllUsers({page: 1, token: token, search: search}));
    } else {
      dispatch(getAllUsers({page: 1, token: token, search: ''}));
    }

    // if (errorMsg === 'resource not found') {
    //   window.alert('user not found')
    // }
  }, [dispatch, search, token])

  const onNextPage = ()=>{
    const param = {token: token, page: dataUsers.pageInfo.nextPage, search: search}
    dispatch(getAllUsers(param))
  }

  const onPrevPage = ()=>{
    const param = {token: token, page: dataUsers.pageInfo.prevPage, search: search}
    dispatch(getAllUsers(param))
  }

  const onSearch = value => {
    // console.log(value.search);
    setSearch(value.search);
    // console.log(search);
  };

  return (
    <>
      <Helmet>
        <title>Search Receiver</title>
      </Helmet>
      <div className='body-dashboard'>
        <ComHeader />
        <Container className='d-flex flex-column flex-md-row gap-3 container-wrap py-5'>
          <ComMenuMobile />
          <ComMenu />
          <Col md={9} className='d-flex flex-column gap-4 rounded shadow-sm p-4 bg-white'>
            <div>
              <span className="fw-bold fontSize fontSize-18 color-3a">Search Receiver</span>
            </div>

            <Formik initialValues={{search: ''}} onSubmit={onSearch}>
              {({errors, handleSubmit, handleChange}) => (
                // <div className="input-group flex-nowrap rounded background-dash-3a3 p-3 search-reciver-input">
                //   <span className="input-group-text iconSearch">
                //     <FiSearch className='color-a9' size={24} />
                //   </span>
                //   <input name='search' type="email" onChange={onSearch} className="form-control inputSearch" placeholder="Search receiver here"/>
                // </div>
                <Form onSubmit={handleSubmit} noValidate className="input-group flex-nowrap rounded background-dash-3a3 p-3 search-reciver-input">
                  <Button type='submit' className="input-group-text iconSearch shadow-none">
                    <FiSearch className='color-a9' size={24} />
                  </Button>
                  <input name='search' type="email" onChange={handleChange} className="form-control inputSearch" placeholder="Search receiver here"/>
                </Form>
              )}
            </Formik>
            <div className="d-flex flex-column gap-3 hight-search-wrap">
              {/* <ListProfile image={ProfileSam} alt='aaaaa' nameUser='Sam' phone='89458752147' />
                        <ListProfile image={ProfileSam} alt='aaaaa' nameUser='Sam' phone='89458752147' />
                        <ListProfile image={ProfileSam} alt='aaaaa' nameUser='Sam' phone='89458752147' />
                        <ListProfile image={ProfileSam} alt='aaaaa' nameUser='Sam' phone='89458752147' /> */}
              {/* {data?.result?.map(user =>{
                return(
                  <ListProfile image={ProfileSam} alt={user.picture} nameUser={user.fullname} phone={user.phonenumber} />
                )
              })} */}
              {dataUsers.results === null || dataUsers.results === undefined ? null : dataUsers?.results?.map(user => {
                return (
                  <Link key={`${user.id}${user.phonenumber}${user.first_name}`} to={'/inputamount'} className="text-decoration-none">
                    <ListProfile id={user.user_id} image={user.picture} alt={user.picture + user.id} nameUser={`${user.first_name} ${user.last_name}`} phone={user.phonenumber} />
                  </Link>
                )
              })}
              {/* {dataUsers?.results?.map(user => {
                return (
                  <ListProfile key={user.id + user.phonenumber} image={user.picture} alt={user.picture + user.id} nameUser={`${user.first_name} ${user.last_name}`} phone={user.phonenumber} />
                )
              })} */}
            </div>

            <div className='d-flex flex-row justify-content-between'>
              <Button className='col-5 background-primary border-0 shadow-none' disabled={dataUsers?.pageInfo?.prevPage === null || errorMsg === 'resource not found'} onClick={onPrevPage} >Prev</Button>
              <Button className='col-5 background-primary border-0 shadow-none' disabled={dataUsers?.pageInfo?.nextPage === null || errorMsg === 'resource not found'} onClick={onNextPage} >Next</Button>
            </div>
          </Col>
        </Container>
        <ComFooter />
      </div>
    </>
  )
}

export default SearchReciver