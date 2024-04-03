import { useNode } from '@craftjs/core'

type Props = {}

const ProductQuantityInputSetting = (props: Props) => {
  const {
    actions: { setProp }
  } = useNode((node) => ({}))
  return <div className="flex flex-col p-4"></div>
}

export { ProductQuantityInputSetting }
