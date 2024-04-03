import { useNode } from '@craftjs/core'

type Props = {}

const ProductImageSetting = (props: Props) => {
  // const { actions } = useEditor()
  const {
    actions: { setProp }
  } = useNode((node) => ({}))
  return (
    <div className="flex flex-col p-4">
      <div className="mb-2 text-textMD text-green-900">Product image</div>
    </div>
  )
}

export { ProductImageSetting }
