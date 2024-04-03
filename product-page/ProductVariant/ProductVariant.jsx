const ProductVariant = ({}) => {
    const productVariantOptions = [
        {
            name: 'Color',
            options: ['Light Brown', 'Dark Brown', 'Red', 'Blue']
        },
        {
            name: 'Size',
            options: ['10"', '5"']
        },
        {
            name: 'Template',
            options: ['Bear', 'Bird']
        }
    ];
    return (<div className="mb-5">
      {/* Variant property */}
      <div className="flex flex-col gap-5">
        {productVariantOptions.map((variant, index) => (<div key={index} className="flex flex-col">
            <div className="text-lg mb-2 font-bold text-[#363636]">
              {variant.name}
            </div>
            {<div className="flex flex-wrap gap-2">
                {variant.options.map((option, index) => {
                    if (index === 0) {
                        return (<button key={index} className="cursor-pointer rounded border border-[#dbdbdb] bg-orange-300 p-[10px] text-[13px] leading-[18px] transition-[color] duration-300">
                        {option}
                      </button>);
                    }
                    return (<button key={index} className="cursor-pointer rounded border border-[#dbdbdb] p-[10px] text-[13px] leading-[18px] transition-[color] duration-300">
                      {option}
                    </button>);
                })}
              </div>}
          </div>))}
      </div>
    </div>);
};
export { ProductVariant };
