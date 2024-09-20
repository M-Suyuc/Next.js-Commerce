'use client'
import Link from 'next/link'
import { useState } from 'react'
import { CloseSVG, MenuSVG } from '../IconSVG'
import { useStateCategories } from '@/hooks/useStateCategories'

export function MobileNavigation() {
  const [navbar, setNavbar] = useState(false)
  const { categories } = useStateCategories()

  const handleClick = () => {
    setNavbar(!navbar)
  }

  return (
    <>
      <button className='inline-block lg:hidden' onClick={handleClick}>
        <MenuSVG />
      </button>

      <div
        className={
          navbar
            ? 'left-0 top-0 min-h-screen h-screen z-10 fixed bg-white overflow-y-auto overflow-x-hidden pb-8'
            : undefined
        }
      >
        <div className={navbar ? 'relative flex flex-col text-lg' : 'hidden'}>
          <header className='flex justify-around py-4 items-center bg-white z-10 sticky top-0 left-0 '>
            <h4 className='text-2xl font-medium text-black'>Categorias</h4>
            {/* icon X */}
            <button onClick={handleClick}>
              <CloseSVG />
            </button>
          </header>
          {categories!.map((category, index) => (
            <ul key={index} className=''>
              <li className='cursor-pointer border-b border-solid hover:translate-x-2 transition ease-out pl-4'>
                <Link
                  href={`/category/${category.name}`}
                  className='py-2 pr-12 capitalize w-full h-full inline-block text-black'
                >
                  {category.name}
                </Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  )
}
