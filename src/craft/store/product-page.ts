// import {
//   Campaign,
//   Discount,
//   PlatformVariant,
//   Product,
//   ProductVariant,
//   Review,
//   Tag,
//   VariantCombo,
//   VariantOptions
// } from '@dropship-dev/client-api/api/store'
import { create } from 'zustand'

// type ProductData = Product & {
//   Campaign: Campaign & {
//     listDiscount: Array<Discount>
//   }
//   VariantCombo: Array<VariantCombo>
//   ProductVariant: Array<
//     ProductVariant & {
//       PlatformVariant: PlatformVariant
//     }
//   >
//   Review: Array<Review>
//   GoogleAnalytic: Array<{
//     measurementId: string
//   }>
//   TiktokPixel: Array<{
//     pixelId: string
//   }>
//   FbPixel: Array<{
//     pixelId: string
//   }>
//   Tag: Array<Tag>
//   PlatformProduct: {
//     variantOption: VariantOptions
//     id: number
//   }
// }

interface ProductState {
  textPlaceholders: {
    [key: string]: string
  }
  product?: any
}

export const useProductStore = create<ProductState>((set) => ({
  textPlaceholders: {}
}))
