import { Element, UserComponent } from '@craftjs/core'
import * as components from '~/src/craft/craft'
import { useProductStore } from '../../store/product-page'

const ProductInfoContainer: UserComponent = () => {
  const product = useProductStore((state) => state.product)
  if (!product) return null

  return (
    <>
      <Element
        id="product-title"
        is={components.ProductTitle}
        title={'Hello {{product name}}'}
        className="mb-2 text-2xl font-semibold leading-9 md:text-[32px] md:leading-10"
      />
      <Element
        id="product-price"
        is={components.ProductPrice}
        className="mb-2 text-textMD font-semibold md:text-[32px] md:leading-10"
      />
    </>
  )
}

export { ProductInfoContainer }
