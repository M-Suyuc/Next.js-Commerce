'use client'
import { useAppDispatch } from '@/hooks/store'
import {
  DeleteProduct,
  clearCart,
  getCartTotal,
  getProductsCart,
  toggleCartQty
} from '@/slices/cartSlice'
import { type ProdcustWithQ } from '@/types/interface.d'
import { Options } from '@/types/enum.d'

import { useEffect } from 'react'
import { DeleteSVG } from '@/components/IconSVG'
import Image from 'next/image'
import { useStateCart } from '@/hooks/useStatecart'

const CartPage = () => {
  const dispatch = useAppDispatch()
  const { cartProducts, cartProductsCount, cartTotalAmount } = useStateCart()

  const toggleProductQty = ({ id, option }: { id: number; option: string }) =>
    dispatch(toggleCartQty({ id, option }))

  const deleteProduct = ({ id }: { id: number }) => dispatch(DeleteProduct(id))

  useEffect(() => {
    dispatch(getCartTotal())
    dispatch(getProductsCart())
  }, [cartProducts, dispatch])

  function ProductsMap({ cartProducts }: { cartProducts: ProdcustWithQ[] }) {
    return cartProducts.map(({ id, images, title, price, quantity }) => {
      const quantityValue = quantity ?? 0

      return (
        <article key={id} className='my-4 border-b border-gray-300 pb-4'>
          {/* --- */}
          <div className='flex justify-between pb-2'>
            <div className='flex justify-between gap-4'>
              <Image
                className='object-contain'
                width={80}
                height={130}
                src={images[0]}
                alt={title}
              />
              <div className='flex flex-col justify-between'>
                <h3 className='font-semibold text-lg'>{title}</h3>
                <div className='flex gap-1 md:gap-4 items-center'>
                  <button
                    className='font-semibold px-3 py-1 border border-slate-300 hover:bg-gray-300'
                    onClick={() =>
                      toggleProductQty({ id, option: Options.DEC })
                    }
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    className='font-semibold  px-3 py-1 border border-slate-300 hover:bg-gray-300'
                    onClick={() =>
                      toggleProductQty({ id, option: Options.INC })
                    }
                  >
                    +
                  </button>
                </div>
                <div>
                  <span className='font-semibold text-gray-800'>
                    ${price}.00
                  </span>
                </div>
              </div>
            </div>

            <div className='inline-flex items-end text-shade-600'>
              <h4 className=''>
                sub Total
                <span className='font-medium'>${quantityValue * price}.00</span>
              </h4>
            </div>
          </div>
          {/* --- */}
          <button
            className='w-20 inline-flex justify-center'
            onClick={() => deleteProduct({ id })}
          >
            <DeleteSVG />
          </button>
        </article>
      )
    })
  }

  function UiProducts({ cartProducts }: { cartProducts: ProdcustWithQ[] }) {
    return (
      <>
        <h2 className='text-3xl font-bold text-black pb-8'>MY SHOPPING CART</h2>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='w-full md:w-[60%] lg:w-[65%] min-h-[170px]'>
            <ProductsMap cartProducts={cartProducts} />
            <button
              className='bg-red-700 py-1 px-4 text-white font-semibold'
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>

          <div className='bg-white w-full md:w-[40%] lg:w-[35%] p-2 h-[250px] flex flex-col justify-between rounded-sm'>
            <div>
              <header className='border-b border-gray-300 pb-1'>
                <h4>Order summary</h4>
              </header>
              <main className=''>
                <div className='flex justify-between'>
                  <h4>
                    selected <span>{cartProductsCount}</span> item(s) price
                  </h4>
                  <span>${cartTotalAmount}.00</span>
                </div>
                <div className='flex justify-between'>
                  <h4>Discount</h4>
                  <span>$0.00</span>
                </div>
                <div className='flex justify-between'>
                  <h4>Delivery Cost</h4>
                  <span>$0.00</span>
                </div>
              </main>
            </div>
            <aside className='w-full  pt-1'>
              <div className='flex justify-between border-t border-gray-300 py-1'>
                <h4 className='font-semibold'>Total</h4>
                <span className='font-medium'>${cartTotalAmount}.00</span>
              </div>
              <button className='bg-blue-600 w-full py-2 rounded-md text-white font-medium'>
                Proceed to checkout
              </button>
            </aside>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <section className='min-h-[80vh] section bg-slate-100  pt-4 pb-16'>
        {cartProducts?.length > 0 ? (
          <UiProducts cartProducts={cartProducts} />
        ) : (
          <h4 className='text-3xl text-center font-medium'>No products</h4>
        )}
      </section>
    </>
  )
}

export default CartPage
