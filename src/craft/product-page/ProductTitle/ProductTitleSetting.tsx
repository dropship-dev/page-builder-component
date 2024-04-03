import { useNode } from '@craftjs/core'
import { Switch, Textarea } from '@dropship-dev/react-components'
import StyleSetting from '~/src/craft/craft-settings/StyleSetting'
import ColorSetting from '../../craft-settings/ColorSetting'
import TextAlignSetting from '../../craft-settings/TextAlignSetting'

type Props = {}

const ProductTitleSetting = (props: Props) => {
  // const { actions } = useEditor()
  const {
    actions: { setProp },
    title,
    align,
    color,
    isFullWidth
  } = useNode((node) => ({
    title: node.data.props.title,
    align: node.data.props.align,
    color: node.data.props.color,
    isFullWidth: node.data.props.isFullWidth
  }))
  return (
    <div className="flex flex-col">
      {/* Text settings */}
      <div className="pb-4">
        <div className="mb-4 text-textSM font-medium text-gray-900 ">Text</div>

        {/* Product name */}
        <Textarea
          label="Product name"
          labelClassName="text-textXS font-medium text-gray-900"
          wrapperClassName="mb-2"
          placeholder="{{product-name}}"
          onChange={(e) => setProp((props) => (props.title = e.target.value))}
          value={title}
        />
        {/* Style */}
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="text-textXS font-medium text-gray-900">Style</span>
          <StyleSetting
            value="Heading 3"
            onChange={(value) => console.log(value)}
          />
        </div>
        {/* Text align */}
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="text-textXS font-medium text-gray-900">
            Text align
          </span>
          <TextAlignSetting
            value={align ? align : 'left'}
            onChange={(value) => setProp((props) => (props.align = value))}
          />
        </div>
        {/* Text color */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-textXS font-medium text-gray-900">Color</span>
          <ColorSetting
            value={color ? color : '#000000'}
            onChange={(value) => setProp((props) => (props.color = value))}
          />
        </div>
      </div>
      <div className="my-6 h-[1px] w-full bg-neutral-300"></div>
      {/* Size setttings */}
      <div className="pb-4">
        <div className="mb-4 text-textSM font-medium text-gray-900 ">Size</div>
        {/* Full width */}
        <div className="flex h-8 items-center justify-between gap-2">
          <span className="text-textXS font-medium text-gray-900">
            Full width
          </span>
          <Switch
            initialValue={isFullWidth}
            onCheckedChange={(e) => {
              setProp((props: any) => (props.isFullWidth = e))
            }}
          />
        </div>
      </div>
    </div>
  )
}

export { ProductTitleSetting }
