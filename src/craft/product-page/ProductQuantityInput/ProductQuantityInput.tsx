import { Button } from '@dropship-dev/react-components'
import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { ProductQuantityInputProps } from './types'

const ProductQuantityInput: React.FC<
  Partial<ProductQuantityInputProps>
> = ({}) => {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="inline-block w-fit p-0.5">
      <div
        className={`inline-flex h-9 w-fit items-center rounded-md border-[1px] border-[#dbdbdb] max-[640px]:h-11 max-[640px]:rounded-none`}
      >
        <Button
          content={
            <div className="flex h-full w-[33px] cursor-pointer items-center justify-center">
              <AiOutlineMinus size={16} />
            </div>
          }
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity <= 1}
        />
        <div className="flex h-full w-7 items-center justify-center text-textSM font-semibold text-gray-900">
          {quantity}
        </div>
        <Button
          content={
            <div className="flex h-full w-[33px] cursor-pointer items-center justify-center">
              <AiOutlinePlus size={16} />
            </div>
          }
          onClick={() => setQuantity(quantity + 1)}
        />
      </div>
    </div>
  )
}

export { ProductQuantityInput }
