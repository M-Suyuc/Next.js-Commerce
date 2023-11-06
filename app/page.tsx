import Hero from '@/components/Hero'
import Pagination from '@/components/Pagination'
import { ProductsList } from '@/components/ProductsList'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Hero />
      <main className='py-16  md:py-4 section w-full' id='categorias'>
        <ProductsList />
        <section className='flex justify-center'>
          <Pagination />
        </section>
      </main>
    </main>
  )
}
