import React from 'react'
import Bill from './Bill'

function ListBills({bills, setBillEdit}) {
  return (
    <div className='listado-gastos contenedor'>
      <h2>{bills.length ? 'gastos' : 'no hay gastos'}</h2>

      {bills.map( bill => (
        <Bill bill={bill} key={bill.id} setBillEdit={setBillEdit}/>
      ))}
    </div>
  )
}

export default ListBills
