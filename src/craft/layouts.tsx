import { Element, Node, NodeHelpersType, NodeRules } from '@craftjs/core'
import Image from 'next/image'
import * as components from '~/src/craft/craft'

const productImageContainerRules: Partial<NodeRules> = {
  canMoveIn: (
    incomingNodes: Node[],
    dropTargetNode: Node,
    helpers: NodeHelpersType
  ) => {
    if (dropTargetNode.data.nodes.length > 0) {
      // Alert only accept 1 child
      console.error('Only accept 1 child')
      return false
    }

    const acceptNodes = ['ProductImage']

    if (
      !incomingNodes.every((incomingNode) => {
        return acceptNodes.includes(incomingNode.data.name)
      })
    ) {
      // Alert only accept Product Image
      console.error('Only accept Product Image')
      return false
    }
    return true
  },
  canMoveOut(canMoveOut, self, helpers) {
    return false
  }
}

export const productDetailLayout = (
  <Element
    is={components.Layout}
    className="container mx-auto flex flex-col justify-center p-4 md:flex-row md:items-start md:px-0"
    // canvas - if you want to allow swapping 2 containers
  >
    <Element
      is={components.Container}
      canvas
      custom={{
        rules: productImageContainerRules
      }}
      placeHolderText='Drop your "Product Image" here'
      className="flex w-full basis-1/2 justify-center md:max-w-[540px] md:justify-end md:p-3"
    >
      <Element is={components.ProductImage} />
    </Element>
    <Element
      is={components.Container}
      canvas
      className="flex w-full basis-1/2 flex-col md:max-w-[540px] md:p-3"
    >
      <Element
        is={components.ProductTitle}
        title={'{{product name}}'}
        className="mb-2 text-2xl font-semibold leading-9 md:text-[32px] md:leading-10"
      />
      <Element
        is={components.Container}
        canvas
        className="flex flex-wrap items-center gap-2 p-0"
      >
        <Element is={components.ProductComparePrice} />
        <Element is={components.ProductPrice} />
        <Element is={components.ProductPriceBadge} />
      </Element>
      <Element is={components.Line} />
      <div className="mb-4 text-2xl font-normal">
        <span>HURRY! ONLY</span>
        <span className="text-danger-500"> 45 </span>
        <span>LEFT IN STOCK.</span>
      </div>
      <div className={`text-lg mb-4 font-medium italic`}>
        <span className="text-xl font-bold text-danger-500">98%</span>
        <span> customer buy </span>
        <span className="text-xl font-bold text-danger-500"> 2-4 </span>
        <span>items to use daily and gifts for their beloved one</span>
      </div>
      <div className="mb-6 flex flex-row gap-2 max-[640px]:mb-3">
        <div className="w-6 flex-shrink-0 max-[640px]:mt-0">
          <Image
            src="https://cdn.bettamax.com/dev/2023-10-30/global.svg"
            alt=""
            width={24}
            height={24}
          />
        </div>
        <div className="text-[18px] font-normal max-[640px]:text-[14px]">
          Star Seller. This seller consistently earned 5-star reviews, shipped
          on time, and replied quickly to any messages they received
        </div>
      </div>
      <div className="mb-6 flex flex-row gap-2 max-[640px]:mb-3">
        <div className="flex-shrink-0 max-[640px]:mt-0">
          <Image
            src="https://cdn.bettamax.com/dev/2023-10-30/delivery.svg"
            alt=""
            width={24}
            height={24}
          />
        </div>
        <div className="text-[18px] font-normal max-[640px]:text-[14px]">
          Priority is given to delivery after payment.
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex-shrink-0 max-[640px]:mt-0">
          <Image
            src="https://cdn.bettamax.com/dev/2023-10-30/box.svg"
            alt=""
            width={24}
            height={24}
          />
        </div>
        <div className="mb-3 text-[18px] font-normal max-[640px]:text-[14px]">
          In Stock, Ready To Ship.
        </div>
      </div>
      <Element is={components.ProductVariant} />
      <Element
        is={components.Container}
        canvas
        className="flex flex-col items-baseline justify-center gap-2 p-0 md:flex-row md:items-center"
      >
        <Element is={components.ProductQuantityInput} />
        <Element is={components.ProductPurchaseButton} />
        <Element is={components.ProductAddToCartButton} />
      </Element>
    </Element>
  </Element>
)

export const productDescriptionLayout = (
  <Element
    is={components.Layout}
    canvas
    className="container mx-auto flex flex-col justify-center p-4 md:flex-row md:items-start md:px-0"
  >
    <Element
      is={components.Container}
      canvas
      className="flex flex-grow basis-1/3 flex-col p-3 md:items-end"
    >
      <Element
        is={components.Heading}
        content="Description"
        fontSize={30}
        className="mb-2 text-3xl font-bold text-[#1b1b1b]"
      />
    </Element>
    <Element
      is={components.Container}
      canvas
      className="flex flex-grow basis-2/3 flex-col p-3"
    >
      <Element is={components.ProductDescription} />
    </Element>
  </Element>
)

export const productReviewLayout = (
  <Element
    is={components.Layout}
    className="container mx-auto flex flex-col justify-center p-4 md:flex-row md:items-start md:px-0"
    canvas
  >
    <Element
      is={components.Container}
      canvas
      className="flex flex-grow basis-1/3 flex-col p-3 md:items-end"
    >
      <Element
        is={components.Heading}
        content="Review"
        fontSize={30}
        className="mb-2 text-3xl font-bold text-[#1b1b1b]"
      />
    </Element>
    <Element
      is={components.Container}
      canvas
      className="flex flex-grow basis-2/3 flex-col p-3"
    >
      <Element is={components.ProductReviews} />
    </Element>
  </Element>
)
