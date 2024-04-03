import { UserComponent, useNode } from '@craftjs/core'
import { VariantOptions } from '@dropship-dev/client-api/api/store'
import { ProductVariantProps } from './types'

const ProductVariant: UserComponent<Partial<ProductVariantProps>> = ({}) => {
  const {
    connectors: { connect, drag }
  } = useNode()

  const productVariantOptions: VariantOptions = [
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
  ]

  return (
    <div
      ref={(dom) => {
        connect(drag(dom))
      }}
      className="mb-5"
    >
      {/* Variant property */}
      <div className="flex flex-col gap-5">
        {productVariantOptions.map((variant, index) => (
          <div key={index} className="flex flex-col">
            <div className="text-lg mb-2 font-bold text-[#363636]">
              {variant.name}
            </div>
            {
              <div className="flex flex-wrap gap-2">
                {variant.options.map((option, index) => {
                  if (index === 0) {
                    return (
                      <button
                        key={index}
                        className="cursor-pointer rounded border border-[#dbdbdb] bg-orange-300 p-[10px] text-[13px] leading-[18px] transition-[color] duration-300"
                      >
                        {option}
                      </button>
                    )
                  }
                  return (
                    <button
                      key={index}
                      className="cursor-pointer rounded border border-[#dbdbdb] p-[10px] text-[13px] leading-[18px] transition-[color] duration-300"
                    >
                      {option}
                    </button>
                  )
                })}
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  )
}

const ProductVariantDefaultProps: Partial<ProductVariantProps> = {}

ProductVariant.craft = {
  displayName: 'Product Variant',
  defaultProps: ProductVariantDefaultProps,
  related: {
    // settings: ProductVariantSetting
  },
  rules: {}
}

export { ProductVariant }
