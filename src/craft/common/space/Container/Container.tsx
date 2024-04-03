import { ContainerProps } from './types'

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>
}

export { Container }
