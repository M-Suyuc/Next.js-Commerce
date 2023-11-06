import { Product } from '@/types/interface'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  product: Product
}

export const Card = ({ product }: Props) => {
  const { id, images, title, price, description, rating } = product

  return (
    <article
      className='border border-solid border-zinc-200 shadow-sm flex flex-col justify-between overflow-hidden relative max-h-64'
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
          <p className='text-zinc-500 line-clamp-2 text-sm'>{description}</p>
          <div className='flex justify-between items-center pt-2'>
            <span className='font-light text-xs'>rating: {rating} </span>
            <span className='font-semibold'>$ {price}.00 </span>
          </div>
        </section>
      </Link>
    </article>
  )
}
