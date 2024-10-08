'use client'
import Link from 'next/link'
import { MobileNavigation } from './MobileNavigation'
import { SearchForm } from './SearchForm'
import { CartSVG } from '../IconSVG'
import { useAppDispatch } from '@/hooks/store'
import { getProductsCart } from '@/slices/cartSlice'
import { useEffect } from 'react'
import { useStateCategories } from '@/hooks/useStateCategories'
import { useStateCart } from '@/hooks/useStatecart'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const { categories } = useStateCategories()
  const { cartProducts, cartProductsCount } = useStateCart()

  useEffect(() => {
    dispatch(getProductsCart())
  }, [cartProducts, dispatch])

  return (
    <header className='section'>
      <nav className='py-3 md:py-4'>
        <div className='flex justify-between items-start'>
          <div className='flex items-end gap-[2px] grow lg:grow-0'>
            <MobileNavigation />
            <Link href='/' className='flex-grow inline-flex justify-center'>
              <div className=''>
                <h1 className='text-xl lg:text-2xl font-bold bg-blue-600 text-white py-1 px-4 rounded-tl-2xl rounded-br-2xl'>
                  MARLOS&apos;TORE
                </h1>
              </div>
            </Link>
          </div>

          <div className='hidden lg:flex grow px-8'>
            <SearchForm />
          </div>

          <div className='inline-block py-[.40rem] relative pr-[1.3rem]'>
            <span className='absolute top-[-.30rem] right-[0rem] bg-red-700 w-6 h-6 rounded-[100%] text-white text-xs inline-grid place-items-center'>
              {cartProductsCount}
            </span>
            <Link href='/cart'>
              <CartSVG />
            </Link>
          </div>
        </div>
      </nav>

      <div className='hidden gap-7 py-3 lg:flex justify-between px-4 bg-blue-600 rounded-t-md w-full overflow-x-hidden'>
        {categories.slice(0, 9).map((category, index) => (
            <ul key={index} className='flex flex-row'>
              <li className='cursor-pointer'>
                <Link
                  href={`/category/${category.slug}`}
                  className='font-light capitalize text-shade-500 text-white'
                >
                  {category.name.replace('-', ' ')}
                </Link>
              </li>
            </ul>
          )
        )}
      </div>

      <div className='lg:hidden'>
        <SearchForm />
      </div>
    </header>
  )
}

export default Navbar
