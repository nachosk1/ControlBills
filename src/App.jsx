import { useState } from 'react'
import Header from './components/Header'
import iconNewSpent from './img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false)

  return (
    <div>
      <Header budget={budget} setBudget={setBudget} isValidBudget={isValidBudget} setIsValidBudget={setIsValidBudget} />

      {/* Cuando tenemos un && quiere decir que es un if con solo una condicion permitiendo agregar solo una condicion sin tener que agregar de más*/}
      {isValidBudget && (
        <div className='nuevo-gasto'>
          <img src={iconNewSpent} alt="Icono nuevo gasto" />
        </div>
      )}

    </div>
  )
}

export default App
