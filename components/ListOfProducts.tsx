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
        {products.map(({ id, images, title, category, price }) => (
          <article
            className=' lg:h-[250px] border border-solid border-zinc-300 shadow flex flex-col justify-between overflow-hidden gap-4 relative'
            key={id}
          >
            <Link href={`/product/${id}`}>
              <span className='absolute top-4 left-0 bg-shade-600 p-1 text-slate-100 font-medium text-sm px-2 '>
                {category.replace('-', ' ')}
              </span>
              <div className='h-[50%] w-full overflow-hidden aspect-square'>
                <Image
                  src={images[0]}
                  alt={title}
                  className='w-full h-full object-contain'
                  width={200}
                  height={200}
                />
              </div>
              <section className='h-[40%] w-full p-1 text-center bg-slate-100'>
                <h4 className='font-medium text-blue-600/70 w-full overflow-hidden h-6'>
                  {title}
                </h4>
                <span className='font-semibold'>$ {price}.00</span>
              </section>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
