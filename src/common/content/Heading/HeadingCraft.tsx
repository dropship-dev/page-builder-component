import { UserComponent, useNode } from '@craftjs/core'
import { HeadingDefaultProps, HeadingProps } from './Heading.types'
import { HeadingSettings } from './HeadingSetting'

const Heading: UserComponent<Partial<HeadingProps>> = ({
  content,
  fontSize,
  className
}) => {
  const {
    connectors: { connect, drag }
  } = useNode()

  return (
    <div
      ref={(dom) => {
        connect(drag(dom))
      }}
      className={`relative inline-flex flex-col p-2 font-semibold ${className}`}
      style={{ fontSize: `${fontSize}px` }}
    >
      {content}
    </div>
  )
}

Heading.craft = {
  displayName: 'Heading',
  defaultProps: HeadingDefaultProps,
  related: {
    settings: HeadingSettings
  }
}

export { Heading }
