import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ButtonProfile({target, text, logo }) {
  return (
    <Link to={target} className='d-grid text-decoration-none'>
      <Button className='d-flex flex-row background-e5 p-3 justify-content-between align-items-center border-unset'>
        <span className='fw-bold fontSize-16 color-4d'>{text}</span>
        {logo}
      </Button>
    </Link>
  )
}
