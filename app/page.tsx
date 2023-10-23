import Hero from '@/components/Hero'
import { ProductsList } from '@/components/ProductsList'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Hero />
      <main className='py-16  md:py-4 section' id='categorias'>
        <ProductsList />
      </main>
    </main>
  )
}
