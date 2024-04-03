import { UserComponent, useNode } from '@craftjs/core'
import { LineProps } from './Line.types'
import { LineSettings } from './LineSetting'

const Line: UserComponent<Partial<LineProps>> = ({
  className,
  margin,
  width,
  strokeWidth,
  strokeStyle,
  strokeColor,
  isFullWidth
}) => {
  const {
    connectors: { connect, drag }
  } = useNode()
  const style = {
    width: isFullWidth ? '100%' : `${width}px`,
    height: `${strokeWidth}px`,
    backgroundColor: strokeColor,
    marginTop: `${margin}px`,
    marginBottom: `${margin}px`
  }

  return (
    <div
      ref={(dom) => {
        connect(drag(dom))
      }}
      className={`mx-auto block max-w-full ${className}`}
      style={style}
    ></div>
  )
}

const LineDefaultProps: Partial<LineProps> = {
  isFullWidth: true,
  width: 300,
  strokeWidth: 1,
  strokeColor: '#000',
  margin: 16,
  strokeStyle: 'solid'
}

Line.craft = {
  displayName: 'Line',
  defaultProps: LineDefaultProps,
  related: {
    settings: LineSettings
  }
}

export { Line }
