import React from 'react';
import clsx from 'clsx';
const Rating = ({ size, color = '#ffc866', maxRate = 5, ratingHalf = false }) => {
    return (<div className={clsx('rating', size, { 'rating-half': ratingHalf })}>
      {[...Array(maxRate)].map((_, index) => (<input value={4} key={index} type="radio" name="rating-2" className="mask mask-star-2 h-[14px] w-[14px] bg-[#ffc866] disabled:cursor-auto" disabled/>))}
    </div>);
};
export default Rating;
