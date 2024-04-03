import { Element, UserComponent, useEditor, useNode } from '@craftjs/core'
import { Button } from '@dropship-dev/react-components'
import { useState } from 'react'
import { Container } from '../Container/ContainerCraft'
import { ContainerProps } from '../Container/types'
import { LayoutProps } from './types'

const LayoutSetting: UserComponent<Partial<LayoutProps>> = ({}) => {
  const { query, actions } = useEditor((state, query) => ({
    hoveredNodeId: state.events.hovered
  }))
  const {
    actions: { setProp },
    ncols,
    node
  } = useNode((node) => ({
    ncols: node.data.props.ncols,
    node: node
  }))

  const [numOfCol, setNumOfCol] = useState<number>(ncols)

  const addColumnClickHandler = () => {
    const nodeTree = query
      .parseReactElement(<Element canvas is={Container as ContainerProps} />)
      .toNodeTree()
    actions.addNodeTree(nodeTree, node.id, 0)
  }

  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="text-md text-green-900">Num of cols</div>
      <input
        type="number"
        className="h-10 w-full rounded-sm border border-gray-300 p-1"
        value={numOfCol}
        onChange={(e) => {
          const cols = parseInt(e.target.value)
          setNumOfCol(cols)
          setProp((props: any) => (props.ncols = cols))
        }}
      />
      <Button
        content="Add new column"
        hierarchy="primary"
        color="blue"
        size="md"
        className="w-full"
        onClick={addColumnClickHandler}
      />
    </div>
  )
}

export default LayoutSetting
