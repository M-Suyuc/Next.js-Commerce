import { useEffect } from 'react'
import { Container } from '../componets/container/Cotainer'
import { useSelector } from 'react-redux'
import { useStore } from '../hooks/useStore'

function CartPage () {
  const products = useSelector((state) => state.cart.productList)
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  const productsCount = useSelector((state) => state.cart.productsCount)
  const { getTotalCart, clearProductsCart, deleteProduct, toggleProductQty } = useStore()

  useEffect(() => {
    getTotalCart()
  }, [products])

  function ProductsMap ({ products }) {
    return (
      products.map(product => {
        const { id, images, title, price, quantity } = product

        return (
          <article key={id} className='my-4 border-b border-gray-300 pb-4'>
            {/* --- */}
            <div className='flex justify-between pb-2'>
              <div className='flex justify-between gap-4'>
                <img className='w-20 object-cover' src={images[0]} alt={title} />
                <div className='flex flex-col justify-between'>
                  <h3 className='font-semibold text-lg'>{title}</h3>
                  <div className='flex gap-1 md:gap-4 items-center'>
                    {/* dispatch(toggleCartQty({ id, option: 'DEC' })) */}
                    <button className='font-semibold px-3 py-1 border border-slate-300 hover:bg-gray-300' onClick={() => toggleProductQty({ id, option: 'DEC' })}>-</button>
                    <span>{quantity}</span>
                    <button className='font-semibold  px-3 py-1 border border-slate-300 hover:bg-gray-300' onClick={() => toggleProductQty({ id, option: 'INC' })}>+</button>
                  </div>
                  <div>
                    <span className='font-semibold text-gray-800'>${price}.00</span>
                  </div>
                </div>
              </div>

              <div className='inline-flex items-end text-shade-600'><h4 className=''>sub Total <span className='font-medium'>${quantity * price}.00</span></h4></div>
            </div>
            {/* --- */}
            <button className='w-20 inline-flex justify-center' onClick={() => deleteProduct({ id })}>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0' />
              </svg>

            </button>
          </article>
        )
      })

    )
  }

  function UiProducts ({ products }) {
    return (
      <>
        <h2 className='text-3xl font-bold text-black pb-8'>MY SHOPPING CART</h2>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='w-full md:w-[60%] lg:w-[65%] min-h-[170px]'>
            <ProductsMap products={products} />
            <button className='bg-red-700 py-1 px-4 text-white font-semibold' onClick={() => clearProductsCart()}>Clear Cart</button>
          </div>

          <div className='bg-white w-full md:w-[40%] lg:w-[35%] p-2 h-[250px] flex flex-col justify-between rounded-sm'>
            <div>
              <header className='border-b border-gray-300 pb-1'><h4>Order summary</h4></header>
              <main className=''>
                <div className='flex justify-between'>
                  <h4>selected <span>{productsCount}</span> item(s) price  </h4>
                  <span>${totalAmount}.00</span>
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
            <footer className='w-full  pt-1'>
              <div className='flex justify-between border-t border-gray-300 py-1'>
                <h4 className='font-semibold'>Total</h4>
                <span className='font-medium'>${totalAmount}.00</span>
              </div>
              <button className='bg-blue-600 w-full py-2 rounded-md text-white font-medium'>Proceed to checkout</button>
            </footer>
          </div>
        </div>
      </>
    )
  }

  return (
    <Container>
      <section className='min-h-[80vh] px-4 lg:px-4 bg-slate-100  pt-4 pb-16'>
        {
            products?.length > 0
              ? <UiProducts products={products} />
              : <h4 className='text-3xl text-center font-medium'>No products</h4>
        }
      </section>
    </Container>
  )
}
export default CartPage
