import { UserComponent, useNode } from '@craftjs/core'
import parse from 'html-react-parser'
import { get } from 'lodash'
import { useProductStore } from '../../store/product-page'
import { ProductDescriptionProps } from './types'

const ProductDescription: UserComponent<Partial<ProductDescriptionProps>> = ({
  className
}) => {
  const product = useProductStore((state) => state.product)
  const details = get(product, 'details', null)

  const {
    connectors: { connect, drag }
  } = useNode()

  if (!details) return null

  return (
    <div
      ref={(dom) => {
        connect(drag(dom))
      }}
      className={`ck-content ${className}`}
    >
      {parse(details)}
    </div>
  )
}

const ProductDescriptionDefaultProps: Partial<ProductDescriptionProps> = {}

ProductDescription.craft = {
  displayName: 'ProductDescription',
  defaultProps: ProductDescriptionDefaultProps,
  related: {
    // settings: ProductDescriptionSettings
  }
}

export { ProductDescription }
