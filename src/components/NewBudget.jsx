import { useState } from 'react'
import Message from './Message'

function NewBudget({budget, setBudget, setIsValidBudget}) {
    const [message, setMessage] = useState('')


    // Acción del boton Añadir
    const handleBudget = (e) => {
        e.preventDefault()

        if(!budget || budget < 0){
            setMessage("No es un presupuesto válido")
            return
        }
        setMessage('')
        setIsValidBudget(true)
    }   


    return (
        <div className='contenedor-presuepuesto contenedor sombra'>
            <form onSubmit={handleBudget} className='formulario'>
                <div className='campo'>
                    <label htmlFor="">Definir Presupuesto</label>
                    <input type="number" className='nuevo-presupuesto' placeholder='Añade tu Presupuesto' value={budget} onChange={e => setBudget(e.target.value)}/>
                </div>
                <input type="submit" value='Añadir' />
                {message && <Message type="error">{message}</Message>}
            </form>

        </div>
    )
}

export default NewBudget
