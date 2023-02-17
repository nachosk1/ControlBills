import React from 'react'
import Bill from './Bill'

function ListBills({bills, setBillEdit, deleteBill}) {
  return (
    <div className='listado-gastos contenedor'>
      <h2>{bills.length ? 'Gastos' : 'No hay gastos aún'}</h2>

      {bills.map( bill => (
        <Bill bill={bill} key={bill.id} setBillEdit={setBillEdit} deleteBill={deleteBill}/>
      ))}
    </div>
  )
}

export default ListBills
