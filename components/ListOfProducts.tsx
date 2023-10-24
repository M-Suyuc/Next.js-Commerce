import { type Product } from '@/types/interface.d'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  products: Product[]
}

export function ListOfProducts({ products }: Props) {
  return (
    <section className='min-h-screen pb-10'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {products.map(({ id, images, title, price, description, rating }) => (
          <article
            className='border border-solid border-zinc-300 shadow flex flex-col justify-between overflow-hidden relative'
            key={id}
          >
            <Link href={`/product/${id}`}>
              <div className='w-full aspect-video overflow-hidden'>
                <Image
                  src={images[0]}
                  alt={title}
                  className='w-full h-full object-contain'
                  width={200}
                  height={200}
                />
              </div>
              <section className='w-full p-3 text-center bg-blue-500/10'>
                <h4 className='font-medium text-blue-600 w-full overflow-hidden h-6'>
                  {title}
                </h4>
                <p className='text-zinc-500 line-clamp-2 text-sm'>
                  {description}
                </p>
                <div className='flex justify-between items-center pt-2'>
                  <span className='font-light text-xs'>rating: {rating} </span>
                  <span className='font-semibold'>$ {price}.00 </span>
                </div>
              </section>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
