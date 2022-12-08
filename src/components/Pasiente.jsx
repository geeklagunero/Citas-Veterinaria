import React from 'react'

const Pasiente = () => {
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
          <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {' '}
            <span className='font-normal normal-case'>Hook</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'>propetario: {' '}
            <span className='font-normal normal-case'>Juan</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {' '}
            <span className='font-normal normal-case'>juan@gmail.com</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {' '}
            <span className='font-normal normal-case'>10 diciembre de 2022</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {' '}
            <span className='font-normal normal-case'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum debitis sed ut cupiditate dicta consequatur. Eius unde explicabo voluptatibus aspernatur exercitationem ullam, aut veritatis dolor laudantium nesciunt, animi dignissimos tenetur.</span>
          </p>

        </div>
  )
}

export default Pasiente