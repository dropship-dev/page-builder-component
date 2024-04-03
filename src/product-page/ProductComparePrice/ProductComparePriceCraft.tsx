import { UserComponent, useNode } from '@craftjs/core'
import { ProductComparePriceSetting } from './ProductComparePriceSetting'
import { ProductComparePriceProps } from './types'

const ProductComparePrice: UserComponent<Partial<ProductComparePriceProps>> = ({
  className
}) => {
  const {
    connectors: { connect, drag }
  } = useNode()

  const price = 24

  return (
    <div
      className={`${className}`}
      ref={(dom) => {
        connect(drag(dom))
      }}
    >
      ${price}
    </div>
  )
}

const ProductComparePriceDefaultProps: Partial<ProductComparePriceProps> = {
  className: 'font-light line-through'
}

ProductComparePrice.craft = {
  displayName: 'Product Compare Price',
  defaultProps: ProductComparePriceDefaultProps,
  related: {
    settings: ProductComparePriceSetting
  },
  rules: {}
}

export { ProductComparePrice }
