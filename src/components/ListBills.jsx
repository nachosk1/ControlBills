import React from 'react'
import Bill from './Bill'

function ListBills({bills}) {
  return (
    <div className='listado-gastos contenedor'>
      <h2>{bills.length ? 'gastos' : 'no hay gastos'}</h2>

      {bills.map( bill => (
        <Bill bill={bill} key={bill.id}/>
      ))}
    </div>
  )
}

export default ListBills
