import { useNode } from '@craftjs/core'

type Props = {}

const ProductPriceSetting = (props: Props) => {
  const {
    actions: { setProp },
    lineThrough
  } = useNode((node) => ({
    lineThrough: node.data.props.lineThrough
  }))
  return (
    <div className="flex flex-col p-4">
      <div className="mb-2 text-textMD text-green-900">Line through</div>
      <input
        type="checkbox"
        className="mb-2 rounded-sm border border-gray-400 p-4"
        value={lineThrough}
        onChange={(e) => {
          setProp((props: any) => (props.lineThrough = e.target.checked))
        }}
      />
    </div>
  )
}

export { ProductPriceSetting }
