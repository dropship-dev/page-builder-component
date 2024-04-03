import { ProductAddToCartButtonProps } from './types'

const ProductAddToCartButton: React.FC<
  Partial<ProductAddToCartButtonProps>
> = ({ width, height, borderRadius, text, backgroundColor, textColor }) => {
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
      className="flex items-center justify-center font-semibold"
      style={style}
    >
      {text}
    </button>
  )
}

export { ProductAddToCartButton }
