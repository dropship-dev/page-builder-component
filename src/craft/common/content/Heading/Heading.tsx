import { HeadingProps } from './Heading.types'

const Heading: React.FC<HeadingProps> = ({ content, fontSize }) => {
  return (
    <div
      className={`relative inline-flex flex-col p-2 font-semibold`}
      style={{ fontSize: `${fontSize}px` }}
    >
      {content}
    </div>
  )
}

export { Heading }
