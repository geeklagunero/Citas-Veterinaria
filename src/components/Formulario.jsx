import React from 'react'

const Formulario = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
        <p className='text-lg mt-5 text-center mb-10'>Añade Pacientes y {''} <span className='text-indigo-600 font-bold text-lg'>Administralos</span></p>

        <form action="" className='bg-white shadow-md rounded-xl py-10 px-5 mb-10'>
          <div className='mb-5'>
            <label htmlFor="mascota" className='block text-gray-700 uppercase'>Nombre Mascota</label>
            <input type="text" id='mascota'
            placeholder='Nombre de la Mascota' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>

          <div className='mb-5'>
            <label htmlFor="propetario" className='block text-gray-700 uppercase'>Nombre Propietario</label>
            <input type="text" id='propetario'
            placeholder='Nombre del Propetario' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>

        <div className='mb-5'>
            <label htmlFor="email" className='block text-gray-700 uppercase'>Email</label>
            <input type="email" id='email'
            placeholder='Contacto Propietario' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>

          <div className='mb-5'>
            <label htmlFor="alta" className='block text-gray-700 uppercase'>Email</label>
            <input type="date" id='alta'
            placeholder='Contacto Propietario' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>

          <div className='mb-5'>
            <label htmlFor="sintomas" className='block text-gray-700 uppercase'>Email</label>
            <textarea id='sintomas'
            placeholder='Describe los sintomas' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>

          <input type="submit" value=""
                 className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                 value="Agregar Paciente" />
        </form>
    </div>
  )
}

export default Formulario