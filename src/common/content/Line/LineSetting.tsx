import { useNode } from '@craftjs/core'
import { Input, Switch } from '@dropship-dev/react-components'
import DesktopIcon from '~/src/components/Icons/DesktopIcon'

export const LineSettings = () => {
  // const { actions } = useEditor()
  const {
    actions: { setProp },
    isFullWidth,
    width
  } = useNode((node) => ({
    isFullWidth: node.data.props.isFullWidth,
    width: node.data.props.width
  }))
  return (
    <div className="flex flex-col pt-4">
      {/* Style */}
      <div className="mb-6">
        <div className="mb-4 flex w-full items-center gap-1">
          <span className="text-textSM font-medium text-gray-900">Style</span>
          <DesktopIcon isActive={false} />
        </div>
      </div>
      <hr className="mb-6" />
      <div className="mb-6">
        <div className="mb-4 flex w-full items-center gap-1">
          <span className="text-textSM font-medium text-gray-900">Size</span>
          <DesktopIcon isActive={false} />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
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
          <div className="flex items-center justify-between">
            <span className="text-textXS font-medium text-gray-900">Width</span>
            <Input
              type="text"
              value={width}
              maxLength={16}
              onChange={(e) =>
                setProp((props: any) => (props.width = e.target.value))
              }
              className="ml-auto mr-1 w-[100px]"
              disabled={isFullWidth}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
