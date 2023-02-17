import React from 'react'
import Bill from './Bill'

function ListBills({ bills, setBillEdit, deleteBill, filter, billsFilters }) {
  return (
    <div className='listado-gastos contenedor'>
      

      {
        filter ? (
          <>
            <h2>{billsFilters.length ? 'Gastos' : 'No hay gastos en esta categoría'}</h2>
            {billsFilters.map(bill => (
              <Bill bill={bill} key={bill.id} setBillEdit={setBillEdit} deleteBill={deleteBill} />
            ))}
          </>
          
        ) : (
          <>
            <h2>{bills.length ? 'Gastos' : 'No hay gastos aún'}</h2>
            {bills.map(bill => (
              <Bill bill={bill} key={bill.id} setBillEdit={setBillEdit} deleteBill={deleteBill} />
            ))}
          </>
          
        )
      }

    </div>
  )
}

export default ListBills
