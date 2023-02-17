import { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

function ControlBudget({budget, bills, setBudget, setBills, setIsValidBudget}) {

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

    const handledResetApp = () => {
        const result = confirm("¿Desea reiniciar presupuesto y gastos?")
        if(result){
            setBills([])
            setBudget(0)
            setIsValidBudget(false)
        }
    }
    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar value={percentage} styles={buildStyles({
                    pathColor: percentage > 100 ? '#DC2626' : '#3b82F6',
                    trailColor: '#F5F5F5',
                    textColor: percentage > 100 ? '#DC2626' : '#3b82F6'
                })} text={`${percentage}% Gastado`}/>
            </div>
            <div className='contenido-presupuesto'>
                <button type='button' className='reset-app' onClick={handledResetApp}>
                    Resetear App
                </button>
                <p>
                    <span>Presupuesto:</span> {formatAmount(budget)}
                </p>
                <p className={`${available < 0 ? 'negativo' : ''}`}>
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
