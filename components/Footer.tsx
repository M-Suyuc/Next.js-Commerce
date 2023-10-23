'use client'
import Link from 'next/link'
import { GitHubSVG } from './IconSVG'

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
              Do you need help with something?
            </h3>
            <p className=' text-gray-600 w-full md:w-3/4 text-lg mb-4'>
              Receive updates, special offers, tutorials, discounts sent
              directly to your email every month
            </p>
            <form onSubmit={handleSubmit}>
              <input
                className='mb-3 md:mb-0 rounded-lg px-2 py-2 w-64 mr-1 focus:outline-none placeholder:text-gray-600'
                type='text'
                placeholder='email@gmail.com'
              />
              <button className='bg-blue-700 rounded-lg px-6 py-2 font-bold text-white hover:bg-blue-600'>
                Send
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
                  href='/'
                  className='text-gray-600 text-lg hover:text-gray-400'
                >
                  Inicio
                </Link>
              </li>
              <li className=''>
                <Link
                  href='#'
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
                  href='#'
                >
                  Todo
                </Link>
              </li>
              <li className=''>
                <Link
                  href='category/smartphones'
                  className=' text-gray-600 text-lg hover:text-gray-400'
                >
                  Phones
                </Link>
              </li>
              <li className=''>
                <Link
                  href='category/laptops'
                  className='text-gray-600 text-lg hover:text-gray-400'
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
          <GitHubSVG />
        </a>
      </div>
    </footer>
  )
}

export default Footer
