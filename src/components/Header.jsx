import React from 'react'
import ControlBudget from './ControlBudget'
import NewBudget from './NewBudget'

function Header({ budget, setBudget, isValidBudget, setIsValidBudget , bills}) {
    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {isValidBudget ? (
                <ControlBudget budget={budget} bills={bills}/>
            ) : (
                <NewBudget budget={budget} setBudget={setBudget} setIsValidBudget={setIsValidBudget} />
            )}
        </header>
    )
}

export default Header
