import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='min-h-[90vh] flex justify-center items-center text-center'>
      <div>
        <h1 className='text-red-800 text-xl font-semibold'>404</h1>
        <p className='mb-2'>Página no encontrada</p>
        <Link href='/' className='bg-blue-600 py-2 px-4 text-white'>
          Vover
        </Link>
      </div>
    </div>
  )
}
