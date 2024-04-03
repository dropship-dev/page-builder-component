import { ContainerProps } from './types'

const Container: React.FC<ContainerProps> = ({
  children,
  placeHolderText,
  ...props
}) => {
  return <div {...props}>{children}</div>
}

export { Container }
