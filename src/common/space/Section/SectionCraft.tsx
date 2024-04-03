import { UserComponent, UserComponentConfig, useNode } from '@craftjs/core'
import { SectionDefaultProps, SectionProps } from './Section.types'
import SectionSetting from './SectionSetting'

const Section: UserComponent<Partial<SectionProps>> = ({
  children,
  ...props
}) => {
  const {
    connectors: { connect, drag }
  } = useNode()

  const { className } = props

  return (
    <div
      ref={(dom) => {
        connect(drag(dom))
      }}
      className={`container ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

Section.craft = {
  displayName: 'Section',
  props: SectionDefaultProps,
  related: {
    settings: SectionSetting
  }
} as Partial<UserComponentConfig<SectionProps>>

export { Section }
