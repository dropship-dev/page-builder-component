import { Node, NodeHelpersType, UserComponent, useNode } from '@craftjs/core'
import LayoutSetting from './LayoutSetting'
import { LayoutProps } from './types'

const Layout: UserComponent<Partial<LayoutProps>> = ({
  children,
  className,
  gap
}) => {
  const {
    connectors: { connect, drag }
  } = useNode()

  return (
    <div
      ref={(dom) => {
        connect(drag(dom))
      }}
      className={`${className}`}
      style={{
        gap: `${gap}px`
      }}
    >
      {children}
    </div>
  )
}

const LayoutDefaultProps: Partial<LayoutProps> = {
  className: 'w-full mb-3 flex flex-row p-3',
  gap: 32,
  style: {}
}

Layout.craft = {
  name: 'Layout',
  props: LayoutDefaultProps,
  rules: {
    canMoveIn: (
      incomingNodes: Node[],
      dropTargetNode: Node,
      helpers: NodeHelpersType
    ) => {
      return incomingNodes.every((incomingNode) => {
        return incomingNode.data.name === 'Container'
      })
    },
    canMoveOut(canMoveOut, self, helpers) {
      return false
    }
  },
  related: {
    settings: LayoutSetting
  }
}

export { Layout }
