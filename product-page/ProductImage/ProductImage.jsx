import { get } from 'lodash';
import { useState } from 'react';
import { useProductStore } from '../../store/product-page';
// Swiper
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './product-image.scss';
const ProductImage = ({ className }) => {
    const product = useProductStore((state) => state.product);
    // const [mainSwiper, setMainSwiper] = useState<SwiperClass | null>(null)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const photos = get(product, 'photos', []);
    const productImages = photos.map((data, index) => ({
        url: data,
        id: index + 1
    }));
    return (<div className="w-[540px] max-w-full p-2">
      <Swiper 
    // onSwiper={setMainSwiper}
    modules={[Autoplay, Navigation, Pagination, FreeMode, Thumbs]} 
    // autoplay={{
    //   delay: 2500,
    //   disableOnInteraction: true
    // }}
    navigation={true} pagination={{
            type: 'fraction'
        }} 
    // loop={true}
    thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }} slidesPerView={1} scrollbar={{ draggable: true }} className="mb-2 aspect-square h-[400px] w-[500px] max-w-full">
        {productImages.map((data, index) => (<SwiperSlide key={index}>
            <img src={data.url} alt="" className="rounded object-contain"/>
          </SwiperSlide>))}
      </Swiper>
      <div className="Collection">
        <Swiper onSwiper={(e) => {
            setThumbsSwiper(e);
        }} loop={true} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="box-border h-fit w-[300px] px-0 py-[10px]">
          {productImages.map((data, index) => (<SwiperSlide key={index} className="h-full w-1/4 max-[640px]:h-[64px] max-[640px]:w-[64px]">
              <div className="items-center justify-center max-[640px]:flex max-[640px]:h-[64px] max-[640px]:w-[64px]">
                <img src={data.url} alt="" className="rounded object-contain"/>
              </div>
            </SwiperSlide>))}
        </Swiper>
      </div>
    </div>);
};
export { ProductImage };
