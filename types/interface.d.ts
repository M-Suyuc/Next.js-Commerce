export interface TypesData {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export interface ProdcustWithQ extends Product {
  quantity: number
  totalPrice: number
}

export interface ToggleCartQtyAction {
  id: number
  option: string
}
