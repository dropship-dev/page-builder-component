import Rating from './Rating';
export const ReviewItem = ({ data }) => {
    return (<div className="flex h-fit w-full border-b-[1px] border-gray-300 px-6 pb-6 pt-[16px] lg:px-0">
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-row gap-3">
          <div />
          <div>
            <div className="mb-1 text-textXS font-medium text-gray-900">
              {data.name}
            </div>
            <Rating />
            <div className="mt-2 text-textXS font-medium text-gray-500">
              {data.createdAt}
            </div>
            <div className="mb-2 mt-4 w-full text-textSM font-normal text-gray-900">
              {data.comment}
            </div>
            <div className="flex flex-row flex-wrap gap-3">
              {data.photos
            .filter((i) => i !== '')
            .map((item) => {
            return (<div key={item} className="flex h-[80px] w-[80px] items-center justify-center overflow-hidden">
                      <img src={item} alt="image product" width={80} height={80} className="object-cover"/>
                    </div>);
        })}
            </div>
          </div>
        </div>
      </div>
    </div>);
};
