import { ProductPriceBadgeProps } from './types'

const ProductPriceBadge: React.FC<Partial<ProductPriceBadgeProps>> = ({
  className
}) => {
  const discount = 17

  return <div className={`${className}`}>Save {discount}%</div>
}

export { ProductPriceBadge }
