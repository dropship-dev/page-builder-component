import { UserComponent, useNode } from '@craftjs/core'
import { ProductPriceSetting } from './ProductPriceSetting'
import { ProductPriceProps } from './types'

const ProductPrice: UserComponent<Partial<ProductPriceProps>> = ({
  className
}) => {
  const {
    connectors: { connect, drag }
  } = useNode()

  const price = 20

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

const ProductPriceDefaultProps: Partial<ProductPriceProps> = {
  className: 'text-2xl font-medium text-green-500'
}

ProductPrice.craft = {
  displayName: 'Product Price',
  defaultProps: ProductPriceDefaultProps,
  related: {
    settings: ProductPriceSetting
  },
  rules: {}
}

export { ProductPrice }
