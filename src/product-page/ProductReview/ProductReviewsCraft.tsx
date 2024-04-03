import { UserComponent } from '@craftjs/core'
import { Review } from '@dropship-dev/client-api/api/store'
import { get } from 'lodash'
import { useProductStore } from '~/src/craft/store/product-page'
import { ReviewItem } from './ReviewItem'

const ProductReviews: UserComponent = ({}) => {
  const product = useProductStore((state) => state.product)
  const reviews = get(product, 'Review', [])

  return (
    <div className="w-full overflow-y-auto">
      {reviews.length === 0 && <div>No review avaiable</div>}
      {reviews.map((item: Review) => {
        return <ReviewItem data={item} key={item.id} />
      })}
    </div>
  )
}

ProductReviews.craft = {
  name: 'Product Reviews',
  related: {}
}

export { ProductReviews }
