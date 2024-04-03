import { SectionProps } from './Section.types'

const Section: React.FC<SectionProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>
}

export { Section }
