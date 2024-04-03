import { UserComponent, useNode } from '@craftjs/core'
import { ProductPurchaseButtonProps } from './types'

const ProductPurchaseButton: UserComponent<
  Partial<ProductPurchaseButtonProps>
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

const ProductPurchaseButtonDefaultProps: Partial<ProductPurchaseButtonProps> = {
  isFullWidth: false,
  width: 200,
  height: 56,
  borderRadius: 8,
  backgroundColor: '#A5B652',
  textColor: '#ffffff',
  text: 'Buy Now'
}

ProductPurchaseButton.craft = {
  displayName: 'Buy now Button',
  defaultProps: ProductPurchaseButtonDefaultProps,
  related: {
    // settings: ProductPurchaseButtonSetting
  },
  rules: {}
}

export { ProductPurchaseButton }
