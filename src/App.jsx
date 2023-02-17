import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListBills from './components/ListBills'
import Modal from './components/Modal'
import { generateId } from './helpers'
import iconNewSpent from './img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [bills, setBills] = useState([])

  const [modal, setModal] = useState(false)
  const [animationModal, setAnimationModal] = useState(false)

  const [billEdit, setBillEdit] = useState({})

  useEffect(() => {
    if (Object.keys(billEdit).length > 0) {
      setModal(true)

      setTimeout(() => {
        setAnimationModal(true)
      }, 500)
    }
  }, [billEdit])

  const changeBill = bill => {
    if(bill.id){
      //Actualizar
      const billUpdate = bills.map(billState => billState.id === bill.id ? bill : billState)
      setBills(billUpdate)
      setBillEdit({})
    }else{
      //Nuevo Gasto
      bill.id = generateId()
      bill.date = Date.now()
      setBills([...bills, bill])
    }
    
    setAnimationModal(false)
    setModal(false)
  }

  const handleNewSpent = () => {
    setModal(true)
    setBillEdit({})

    setTimeout(() => {
      setAnimationModal(true)
    }, 500)
  }

  const deleteBill = id => {
    const billsUpdate = bills.filter( bill => bill.id !== id )
    setBills(billsUpdate)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header budget={budget} setBudget={setBudget} isValidBudget={isValidBudget} setIsValidBudget={setIsValidBudget} bills={bills} />

      {/* Cuando tenemos un && quiere decir que es un if con solo una condicion permitiendo agregar solo una condicion sin tener que agregar de más*/}
      {isValidBudget && (
        <>
          <main>
            <ListBills bills={bills} setBillEdit={setBillEdit} deleteBill={deleteBill}/>
          </main>
          <div className='nuevo-gasto'>
            <img src={iconNewSpent} alt="Icono nuevo gasto" onClick={handleNewSpent} />
          </div>
        </>
      )}
      {modal && <Modal setModal={setModal} animationModal={animationModal} setAnimationModal={setAnimationModal} changeBill={changeBill} billEdit={billEdit} setBillEdit={setBillEdit}/>}
    </div>
  )
}

export default App
