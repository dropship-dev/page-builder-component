import { api } from '@dropship-dev/client-api/api/store'
import { useProductStore } from '../store/product-page'

// Product Page
export const loadProductPageData = async (
  storeId: string,
  productId?: number
) => {
  const products = await api.product.getAllProduct({
    storeId,
    isActive: true
  })
  const productData = products.data.find(
    (p) => p.id === (productId ? productId : 882)
  )

  const product = await api.product.getProductByPermalink({
    storeId,
    permalink: productData?.permalink ?? ''
  })

  useProductStore.setState({
    product: product,
    textPlaceholders: {
      productName: product.name
    }
  })
}

export const unloadProductPageData = () => {
  useProductStore.setState({
    product: undefined,
    textPlaceholders: {}
  })
}
