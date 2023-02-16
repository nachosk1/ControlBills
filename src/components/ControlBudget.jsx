import { useEffect, useState } from 'react'

function ControlBudget({budget, bills}) {

    const [available, setAvailable] = useState(0)  //disponible
    const [spent, setSpent] = useState(0) //gastado

    useEffect(() => {
        const totalSpent = bills.reduce((total, bill) => bill.amount + total, 0)
        const totalAvailable = budget - totalSpent
        setAvailable(totalAvailable)
        setSpent(totalSpent)
    }, [bills])

    const formatAmount = (amount) => {
        return Number(amount).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Grafica Aqui</p>
            </div>
            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto:</span> {formatAmount(budget)}
                </p>
                <p>
                    <span>Disponible:</span> {formatAmount(available)}
                </p>
                <p>
                    <span>Gastado:</span> {formatAmount(spent)}
                </p>
            </div>

        </div>
    )
}

export default ControlBudget
