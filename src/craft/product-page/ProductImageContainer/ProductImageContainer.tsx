import { UserComponent, useNode } from '@craftjs/core'
import React from 'react'
import { useProductStore } from '../../store/product-page'

interface ProductImageContainerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'is'> {}

const ProductImageContainerDefaultProps: Partial<ProductImageContainerProps> =
  {}

const ProductImageContainer: UserComponent<
  Partial<ProductImageContainerProps>
> = ({ children }) => {
  const {
    connectors: { connect, drag }
  } = useNode()

  const product = useProductStore((state) => state.product)
  if (!product) return null

  return (
    <div
      ref={(dom) => {
        connect(drag(dom))
      }}
      className={`p-4 max-[640px]:pt-0 md:py-0`}
    >
      {children}
    </div>
  )
}

ProductImageContainer.craft = {
  displayName: 'Container',
  props: ProductImageContainerDefaultProps,
  rules: {
    canMoveIn: (canMoveIn, self, helpers) => {
      console.log('Self node', self)
      return (
        self.data.nodes.length === 0 &&
        canMoveIn.every((node) => {
          return node.data.name === 'ProductImage'
        })
      )
    }
  },
  related: {}
}

export { ProductImageContainer }
