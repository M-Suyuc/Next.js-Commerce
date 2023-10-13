'use client'
import Link from 'next/link'

const Footer = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <footer className='bg-slate-800'>
      <div className='flex flex-col pt-12 px-8 lg:px-0 md:flex-row section'>
        {/* left */}
        <div className=''>
          <Link href='/'>
            <h1 className='text-xl lg:text-2xl font-bold bg-blue-600 text-white py-1 px-4 rounded-tl-2xl rounded-br-2xl inline-block'>
              MARLOS&apos;TORE
            </h1>
          </Link>
          <div>
            <h3 className='text-white text-2xl font-semibold mb-7'>
              ¿Necesitas ayuda con algo?
            </h3>
            <p className=' text-gray-600 w-full md:w-3/4 text-lg mb-4'>
              Reciba actualizaciones, ofertas especiales, tutoriales, descuentos
              enviados directamente en su bandeja de entrada todos los meses
            </p>
            <form onSubmit={handleSubmit}>
              <input
                className='mb-3 md:mb-0 rounded-lg px-2 py-2 w-64 mr-1 focus:outline-none placeholder:text-gray-600'
                type='text'
                placeholder='Correo electrónico'
              />
              <button className='bg-blue-700 rounded-lg px-6 py-2 font-bold text-white hover:bg-blue-600'>
                Suscribir
              </button>
            </form>
          </div>
        </div>
        {/* right */}
        <div className='hidden md:flex md:gap-8 lg:gap-24 '>
          <div>
            <ul className='text-gray-300'>
              <h3 className='text-lg font-bold'>Menú</h3>
              <li className=''>
                <Link
                  href=''
                  className='text-gray-600 text-lg hover:text-gray-400'
                >
                  Inicio
                </Link>
              </li>
              <li className=''>
                <Link
                  href=''
                  className='text-gray-600 text-lg hover:text-gray-400'
                >
                  Categorias
                </Link>
              </li>
            </ul>
          </div>
          <div className=''>
            <ul className='text-gray-300'>
              <h3 className='text-xl font-bold'>Categorias</h3>
              <li className=''>
                <Link
                  className='text-gray-600 text-lg hover:text-gray-400'
                  href=''
                >
                  Todo
                </Link>
              </li>
              <li className=''>
                <Link
                  className=' text-gray-600 text-lg hover:text-gray-400'
                  href='category/smartphones'
                >
                  Phones
                </Link>
              </li>
              <li className=''>
                <Link
                  className='text-gray-600 text-lg hover:text-gray-400'
                  href='category/laptops'
                >
                  Laptops
                </Link>
              </li>
              <li className=''>
                <Link
                  className='text-gray-600 text-lg hover:text-gray-400'
                  href='category/fragrances'
                >
                  Fragrances
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='pb-2 pt-6 text-gray-500 font-medium flex justify-center gap-4 items-center'>
        <span className='uppercase'>Marlon Suyuc</span>
        <a
          href='https://github.com/M-Suyuc/Ecommerce'
          className='w-8 h-8'
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z' />
          </svg>
        </a>
      </div>
    </footer>
  )
}

export default Footer
