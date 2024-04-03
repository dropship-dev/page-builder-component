import { LayoutProps } from './types'

const Layout: React.FC<Partial<LayoutProps>> = ({
  children,
  className,
  gap
}) => {
  const style = {
    gap: `${gap}px`
  }
  return (
    <div className={`mb-3 flex flex-row ${className}`} style={style}>
      {children}
    </div>
  )
}

export { Layout }
