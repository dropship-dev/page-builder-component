import { ProductPriceProps } from './types'

const ProductPrice: React.FC<Partial<ProductPriceProps>> = ({ className }) => {
  const price = 20

  return <div className={`${className}`}>${price}</div>
}

export { ProductPrice }
