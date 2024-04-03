import { ContainerProps } from './types'

const Container: React.FC<ContainerProps> = ({
  children,
  placeHolder,
  ...props
}) => {
  return <div {...props}>{children}</div>
}

export { Container }
