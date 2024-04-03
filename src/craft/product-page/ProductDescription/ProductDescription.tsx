import parse from 'html-react-parser'
import { get } from 'lodash'
import { useProductStore } from '../../store/product-page'
import { ProductDescriptionProps } from './types'

const ProductDescription: React.FC<Partial<ProductDescriptionProps>> = ({
  className
}) => {
  const product = useProductStore((state) => state.product)
  const details = get(product, 'details', null)

  if (!details) return null

  return <div className={`ck-content ${className}`}>{parse(details)}</div>
}

export { ProductDescription }
