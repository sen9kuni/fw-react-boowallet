import React from 'react'
import { FiArrowDown } from 'react-icons/fi'

const numberFormat = (value) =>
  new Intl.NumberFormat('id-IN', {
    style: 'currency',
    currency: 'IDR'
  }).format(value);

function NotifIn({text, amount}) {
  return (
    <div className="d-flex flex-row justify-content-between p-3 align-items-center listHomeWarp shadow-sm">
      <div className="d-flex flex-row gap-3">
        <FiArrowDown className="colorIn" size={24} />
        <div className="d-flex flex-column">
          <span className="colorSecondaryTrans fontSize-14">{text}</span>
          <span className="fw-bold colorSecondary fontSize-18">{numberFormat(amount)}</span>
        </div>
      </div>
    </div>
  )
}

export default NotifIn