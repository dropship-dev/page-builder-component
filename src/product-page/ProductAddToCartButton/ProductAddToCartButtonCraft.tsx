import { UserComponent, useNode } from '@craftjs/core'
import { ProductAddToCartButtonProps } from './types'

const ProductAddToCartButton: UserComponent<
  Partial<ProductAddToCartButtonProps>
> = ({ width, height, borderRadius, text, backgroundColor, textColor }) => {
  const {
    connectors: { connect, drag }
  } = useNode()

  const style: React.CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    border: '1px solid #dbdbdb',
    borderRadius: `${borderRadius}px`,
    backgroundColor: backgroundColor,
    color: textColor,
    padding: '14px 20px'
  }

  return (
    <button
      ref={(dom) => {
        connect(drag(dom))
      }}
      className="flex items-center justify-center font-semibold"
      style={style}
    >
      {text}
    </button>
  )
}

const ProductAddToCartButtonDefaultProps: Partial<ProductAddToCartButtonProps> =
  {
    isFullWidth: false,
    width: 200,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#E1E4EA',
    textColor: '#181F39',
    text: 'Add to Cart'
  }

ProductAddToCartButton.craft = {
  displayName: 'Add to cart Button',
  defaultProps: ProductAddToCartButtonDefaultProps,
  related: {
    // settings: ProductAddToCartButtonSetting
  },
  rules: {}
}

export { ProductAddToCartButton }
