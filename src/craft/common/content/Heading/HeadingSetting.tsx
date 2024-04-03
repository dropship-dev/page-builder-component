import { useNode } from '@craftjs/core'

export const HeadingSettings = () => {
  // const { actions } = useEditor()
  const {
    actions: { setProp },
    content,
    fontSize,
    node
  } = useNode((node) => ({
    content: node.data.props.content,
    fontSize: node.data.props.fontSize,
    node
  }))
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="mb-4 text-xl text-green-900">Heading title</div>
      <input
        className="mb-4 rounded-sm border border-gray-400 p-4"
        value={content}
        onChange={(e) => {
          setProp((props: any) => (props.content = e.target.value))
        }}
      />
      <div className="mb-4 text-xl text-green-900">Font size</div>
      <input
        className="mb-4 rounded-sm border border-gray-400 p-4"
        value={fontSize}
        onChange={(e) => {
          setProp((props: any) => (props.fontSize = e.target.value))
        }}
      />
      {/* <Button
        content="Delete"
        color="blue"
        hierarchy="primary"
        size="sm"
        onClick={() => {
          actions.delete(node.id)
        }}
      /> */}
    </div>
  )
}
