import { UserComponent, useNode } from '@craftjs/core'
import { ContainerProps } from './types'

const ContainerSetting: UserComponent<Partial<ContainerProps>> = ({}) => {
  const {
    actions: { setProp },
    className
  } = useNode((node) => ({
    className: node.data.props.className
  }))

  // const [backgroundColor, setBackgroundColor] = useState(
  //   style.backgroundColor || '#ffffff'
  // )

  // const [height, setHeight] = useState(style.height || '50px')

  return (
    <div className="flex flex-col gap-2 p-4">
      {/* <div className="text-md text-green-900">Background color</div>
      <input
        type="color"
        className="h-10 w-full rounded-sm border border-gray-300 p-1"
        value={backgroundColor}
        onChange={(e) => {
          setBackgroundColor(e.target.value)
          setProp(
            (props: any) => (props.style.backgroundColor = e.target.value)
          )
        }}
      />
      <div className="text-md text-green-900">Height</div>
      <input
        type="text"
        className="h-10 w-full rounded-sm border border-gray-300 p-1"
        value={height}
        onChange={(e) => {
          setHeight(e.target.value)
          setProp((props: any) => (props.style.height = e.target.value))
        }}
      /> */}
      <div className="text-md text-green-900">Class Name</div>
      <input
        type="text"
        className="h-10 w-full rounded-sm border border-gray-300 p-1"
        value={className}
        onChange={(e) => {
          setProp((props: any) => (props.className = e.target.value))
        }}
      />
    </div>
  )
}

export default ContainerSetting
