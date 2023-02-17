import React from 'react'
import ControlBudget from './ControlBudget'
import NewBudget from './NewBudget'

function Header({ budget, setBudget, isValidBudget, setIsValidBudget , bills, setBills}) {
    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {isValidBudget ? (
                <ControlBudget budget={budget} bills={bills} setBills={setBills} setBudget={setBudget} setIsValidBudget={setIsValidBudget} />
            ) : (
                <NewBudget budget={budget} setBudget={setBudget} setIsValidBudget={setIsValidBudget} />
            )}
        </header>
    )
}

export default Header
