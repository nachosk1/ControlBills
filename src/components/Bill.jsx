import React from 'react'
import { formateDate } from '../helpers'

import IconSaving from '../img/icono_ahorro.svg'
import IconHouse from '../img/icono_casa.svg'
import IconFood from '../img/icono_comida.svg'
import IconBills from '../img/icono_gastos.svg'
import IconLeisure from '../img/icono_ocio.svg'
import IconHealth from '../img/icono_salud.svg'
import IconSuscriptions from '../img/icono_suscripciones.svg'

const dictionaryIcon = {
    ahorro : IconSaving,
    casa : IconHouse,
    comida : IconFood,
    gastos : IconBills,
    ocio : IconLeisure,
    salud : IconHealth,
    suscripciones : IconSuscriptions
}

const Bill = ({ bill }) => {
    const { category, name, amount, id , date} = bill
    return (
        <div className='gasto sombra'>
            <div className='contenido-gasto'>
                <img src={dictionaryIcon[category]} alt="Imagenes gastos" />
                <div className='descripcion-gasto'>
                    <p className='categoria'>{category} </p>
                    <p className='nombre-gasto'>{name}</p>
                    <p className='fecha-gasto'>
                        Agregado el: {''}
                        <span>{formateDate(date)}</span>
                    </p>
                </div>
            </div>
            <p className='cantidad-gasto'>${amount}</p>
        </div>
    )
}

export default Bill
