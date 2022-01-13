const AddClientForm = () => {
  const date = new Date()
  const dateFormated = date.toISOString().split('T')[0]

  return (

        <div className='grid place-content-center h-screen pl-16 pt-16'>
            <section className='shadow-lg p-6 rounded-lg bg-rose-100'>
            <header className='font-medium text-3xl'>Introducir nuevo cliente</header>

            <div className='flex flex-col mt-5'>
            <span>Nombre</span>
            <input className='outline-green-400 shadow-md rounded p-2' type='text' maxLength='20'/>
            </div>

            <div className='flex flex-col mt-5'>
            <span>Cantidad de Perros</span>
            <input className='outline-green-400 shadow-md rounded p-2' defaultValue='1' type='number' min='1' max='20'/>
            </div>

            <div className='flex flex-col mt-5'>
            <span>Sector</span>
            <select className='outline-green-400 shadow-md rounded p-2'>

                <option defaultValue='Quilpue'>Quilpue</option>
                <option defaultValue='Villa alemana'>Villa alemana</option>
                <option defaultValue='Belloto'>Belloto</option>
                <option defaultValue='Limache'>Limache</option>
                <option defaultValue='Viña del mar'>Viña del mar</option>
                <option defaultValue='Olmue'>Olmue</option>
                <option defaultValue='Valparaiso'>Valparaiso</option>

            </select>
            </div>

            <div className='flex flex-col mt-5'>
            <span>Direccion</span> <span className='text-sm'><strong>Solo colocar la direccion especifica</strong></span>
            <input className='outline-green-400 shadow-md rounded p-2' type='text' maxLength='30'/>
            </div>

            <div className='flex flex-col mt-5'>
            <span>Fono</span>
            <input className='outline-green-400 shadow-md rounded p-2 invalid:outline-red-500' type='text' maxLength='30' pattern="[0-9]+"/>
            </div>

            <div className='flex flex-col mt-5'>
            <span>Fono</span>
            <input className='outline-green-400 shadow-md rounded p-2 invalid:outline-red-500' type='date' min={dateFormated} defaultValue={dateFormated} />
            </div>

            </section>
        </div>

  )
}

export default AddClientForm
