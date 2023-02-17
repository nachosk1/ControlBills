import { useState, useEffect } from 'react'

const Filters = ({filter, setFilter}) => {
    return (
        <div className='filtros sombra contenedor'>
            <form action="">
                <div className='campo'>
                    <label>Filtrar Gastos</label>
                    <select value={filter} onChange={e => setFilter(e.target.value)}>
                        <option value="">-- Todas las categorías --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filters
