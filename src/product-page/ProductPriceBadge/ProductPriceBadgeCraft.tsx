import { UserComponent, useNode } from '@craftjs/core'
import { ProductPriceBadgeSetting } from './ProductPriceBadgeSetting'
import { ProductPriceBadgeProps } from './types'

const ProductPriceBadge: UserComponent<Partial<ProductPriceBadgeProps>> = ({
  className
}) => {
  const {
    connectors: { connect, drag }
  } = useNode()

  const discount = 17

  return (
    <div
      className={`${className}`}
      ref={(dom) => {
        connect(drag(dom))
      }}
    >
      Save {discount}%
    </div>
  )
}

const ProductPriceBadgeDefaultProps: Partial<ProductPriceBadgeProps> = {
  className:
    'bg-orange-500 btm-bg-primary text-[18px] px-1 rounded-md text-white font-normal'
}

ProductPriceBadge.craft = {
  displayName: 'Product Compare Price',
  defaultProps: ProductPriceBadgeDefaultProps,
  related: {
    settings: ProductPriceBadgeSetting
  },
  rules: {}
}

export { ProductPriceBadge }
