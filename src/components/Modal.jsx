import { useState } from 'react'
import Message from './Message'
import closeImgModal from '../img/cerrar.svg'


function Modal({ setModal, animationModal, setAnimationModal, changeBill}) {
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')


  const closeModal = () => {
    setAnimationModal(false)
    setModal(false)
  }

  const handledSubmit = (e) => {
    e.preventDefault()
    //el include es metodo de los arreglos, la cual pregunta si el campo esta vacío
    if([name, amount, category].includes('')){
      setMessage('Todos los campos son obligatorios')
      return
    }
    changeBill({name, amount, category})
  }

  return (
    <div className='modal'>
      <form className={`formulario ${animationModal ? "animar" : "cerrar"}`} onSubmit={handledSubmit}>
        <div className='cerrar-modal'>
          <img src={closeImgModal} alt="Cerrar modal" onClick={closeModal} />
        </div>
        <div className='contenedor-modal'>
          <legend>Nuevo Gasto</legend>
          {message && <Message type="error">{message}</Message>}
          <div className='campo'>
            <label htmlFor="nombre">Nombre Gasto</label>
            <input type="text" id='nombre' placeholder='Añade el Nombre del Gasto' value={name} onChange={e => setName(e.target.value)}/>
          </div>
          <div className='campo'>
            <label htmlFor="cantidad">Cantidad</label>
            <input type="number" id='cantidad' placeholder='Añade la cantidad de gasto: Ej. 300' value={amount} onChange={e => setAmount(Number(e.target.value))}/>
          </div>
          <div className='campo'>
            <label htmlFor="categoria">Categoría</label>
            <select id="categoria" value={category} onChange={e => setCategory(e.target.value)}>
              <option value="">-- Seleccione Categoría --</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
              <option value="gastos">Gastos Varios</option>
              <option value="ocio">Ocio</option>
              <option value="salud">Salud</option>
              <option value="suscripciones">Suscripciones</option>
            </select>
          </div>
          <input type="submit" value="Añadir Gasto" />
        </div>
      </form>
    </div>
  )
}

export default Modal
