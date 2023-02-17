import { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

function ControlBudget({budget, bills}) {

    const [available, setAvailable] = useState(0)  //disponible
    const [spent, setSpent] = useState(0) //gastado
    const [percentage, setPercentage] = useState(0)  //porcentaje

    useEffect(() => {
        const totalSpent = bills.reduce((total, bill) => bill.amount + total, 0)
        const totalAvailable = budget - totalSpent

        // Calcular el porcentaje gastado
        const newPercentage = (((budget - totalAvailable) / budget ) * 100).toFixed(2)
        
        setTimeout(() => {
            setPercentage(newPercentage)
        }, 500)

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
                <CircularProgressbar value={percentage} styles={buildStyles({
                    pathColor: '#3b82F6',
                    trailColor: '#F5F5F5',
                    textColor: '#3b82F6'
                })} text={`${percentage}% Gastado`}/>
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
