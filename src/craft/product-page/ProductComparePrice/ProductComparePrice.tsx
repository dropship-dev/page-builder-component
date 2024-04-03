import { ProductComparePriceProps } from './types'

const ProductComparePrice: React.FC<Partial<ProductComparePriceProps>> = ({
  className
}) => {
  const price = 24

  return <div className={`${className}`}>${price}</div>
}

export { ProductComparePrice }
