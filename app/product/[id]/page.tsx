'use client'
import { useAppDispatch, useAppSelector } from '@/hooks/store'
import { addCart } from '@/slices/cartSlice'
import { fetchSingleProduct } from '@/slices/productsSlice'
import { Product } from '@/types/interface.d'
import { STATUS } from '@/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface ProductPageProps {
  params: {
    id: string
  }
}

const ProductSinglePage: React.FC<ProductPageProps> = ({ params: { id } }) => {
  const dispatch = useAppDispatch()

  const singleProduct = useAppSelector((state) => state.products.singleProduct)
  const status = useAppSelector((state) => state.products.singleProductStatus)
  const error = useAppSelector((state) => state.products.errorSingleProduct)

  const { images, title, description, brand, price, rating, category } =
    singleProduct
  const imageUrl = images && images.length > 0 ? images[0] : ''

  const [qty, setQty] = useState(1)
  const [showMessage, setShowMessage] = useState(false)

  const Increment = () => {
    setQty((prevQty) => {
      const tempQty = prevQty + 1
      return tempQty
    })
  }

  const Decrement = () => {
    setQty((prevQty) => {
      let tempQty = prevQty - 1
      if (tempQty < 1) tempQty = 1
      return tempQty
    })
  }

  const handleAddCart = (singleProduct: Product) => {
    setQty(1)
    const totalPrice = qty * singleProduct.price
    dispatch(addCart({ ...singleProduct, quantity: qty, totalPrice }))
    setShowMessage(true)

    setTimeout(() => {
      setShowMessage(false)
    }, 600)
  }

  useEffect(() => {
    ;(async () => await dispatch(fetchSingleProduct({ id })))()
  }, [id, dispatch])

  function Message() {
    return (
      <div className='absolute w-full h-full grid place-items-center backdrop-blur-[10px]'>
        <h1 className='text-center text-2xl bg-shade-600 py-3 px-6 text-white font-medium'>
          Added to cart ✅
        </h1>
      </div>
    )
  }

  return (
    <>
      {/* <h1>{JSON.stringify(singleProduct, null, 2)}</h1> */}
      {status === STATUS.LOADING && (
        <div className='text-center text-3xl font-bold'>Loading...</div>
      )}

      {status === STATUS.FAILED && <div>{error}</div>}

      {showMessage && <Message />}

      <div className='section min-h-[90vh] bg-slate-50 grid md:grid-cols-2 overflow-hidden justify-center items-center py-10 md:py-0 md:gap-x-8 gap-y-0'>
        <section className='w-full  overflow-hidden'>
          <div className='w-full aspect-video overflow-hidden'>
            <img
              src={imageUrl}
              alt={`imagen-${title}`}
              className='w-full h-full object-contain'
            />
          </div>
        </section>
        <section className='text-shade-500 pr-2 mt-8 md:mt-0'>
          <h4 className='text-3xl font-bold text-shade-500 mb-4'>{title}</h4>
          <p className='mb-2'>{description}</p>
          <div className='mb-2 flex gap-4'>
            <span className='text-shade-500 font-medium'>
              Rating
              <span className='text-slate-500 font-normal'>{rating}</span>
            </span>
            |
            <span className='text-shade-500 font-medium'>
              Brand <span className='text-slate-500 font-normal'>{brand}</span>
            </span>
            |
            <span className='text-shade-  font-medium'>
              Categoty
              <span className='text-slate-500 font-normal'>{category}</span>
            </span>
          </div>
          <span className='mb-2 inline-block text-2xl font-bold text-shade-500'>
            $ {price}.00
          </span>
          <div>
            <div className='mb-4 flex gap-3 items-center'>
              <button
                className='font-semibold px-3 py-1 border border-slate-300 hover:bg-gray-300'
                onClick={Decrement}
              >
                -
              </button>
              <span className='font-semibold px-2'>{qty}</span>
              <button
                className='font-semibold px-3 py-1 border border-slate-300 hover:bg-gray-300'
                onClick={Increment}
              >
                +
              </button>
            </div>
            <div className='flex gap-4'>
              <button
                onClick={() => {
                  handleAddCart(singleProduct)
                }}
                className='bg-blue-600 rounded-sm px-6 py-2 font-medium text-white hover:bg-blue-600/90 border border-bbg-blue-600'
              >
                Add to Cart
              </button>
              <Link
                href='/'
                className='bg-white rounded-sm px-6 py-2 font-medium text-bbg-blue-600 border border-bbg-blue-600 hover:bg-blue-600/10'
              >
                Add More Items
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProductSinglePage
