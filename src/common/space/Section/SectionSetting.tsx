import { UserComponent, useNode } from '@craftjs/core'
import { SectionProps } from './Section.types'

const SectionSetting: UserComponent<Partial<SectionProps>> = ({}) => {
  const {
    actions: { setProp },
    className
  } = useNode((node) => ({
    className: node.data.props.className
  }))

  // const [height, setHeight] = useState(style.height || '50px')

  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="text-md text-green-900">Class Name</div>
      <input
        type="text"
        className="h-10 w-full rounded-sm border border-gray-300 p-1"
        value={className}
        onChange={(e) => {
          setProp((props: any) => (props.style.className = e.target.value))
        }}
      />
    </div>
  )
}

export default SectionSetting
