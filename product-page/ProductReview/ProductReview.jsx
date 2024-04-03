import { get } from 'lodash';
import { useProductStore } from '~/src/craft/store/product-page';
import { ReviewItem } from './ReviewItem';
const ProductReviews = ({}) => {
    const product = useProductStore((state) => state.product);
    const reviews = get(product, 'Review', []);
    return (<div className="w-full overflow-y-auto">
      {reviews.length === 0 && <div>No review avaiable</div>}
      {reviews.map((item) => {
            return <ReviewItem data={item} key={item.id}/>;
        })}
    </div>);
};
export { ProductReviews };
