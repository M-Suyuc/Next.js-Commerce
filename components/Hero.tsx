'use client'
import imgHero from '@/public/img3.png'
import { Button } from '@/components/Button'

const Hero = () => {
  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.error(`No se encontró ninguna sección con el ID ${sectionId}`)
    }
  }
  return (
    <section
      style={{ backgroundImage: `url(${imgHero.src})` }}
      className='w-full min-h-[85vh] overflow-hidden flex items-center pb-10 lg:pb-0 relative bg-contain sm:bg-right-top section bg-left-bottom bg-no-repeat bg-blue-50 px-4'
    >
      <div className='w-[100%] max-w-xl px-8 lg:px-0 backdrop-blur-[5px] sm:backdrop-blur-none py-10'>
        <h1 className='text-3xl md:text-4xl lg:text-4xl uppercase font-bold mb-4 text-shade-500'>
          Explore our incredible selection of products!
        </h1>
        <p className='mb-8 text-lg md:text-lg  md:text-zinc-700 w-[90%]'>
          In our store, you will find a wide variety of high-quality products at
          competitive prices. From cutting-edge electronics to elegant fashion
          and home goods, we have everything you need!
        </p>
        <Button
          txt='Buy Now'
          styles='bg-blue-600 rounded-md px-8 py-3 font-medium text-white hover:bg-blue-500'
          sectionId='categorias'
          fn={scrollToSection}
        />
      </div>
    </section>
  )
}

export default Hero
