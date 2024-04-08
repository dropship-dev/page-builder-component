type Props = {
  isActive?: boolean
}

const TextAlignJustify = ({ isActive = false }: Props) => {
  const activeColor = '#4B56F3'
  const inactiveColor = '#181F39'
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 4.5C2.5 4.08579 2.83579 3.75 3.25 3.75H15.25C15.6642 3.75 16 4.08579 16 4.5C16 4.91421 15.6642 5.25 15.25 5.25H3.25C2.83579 5.25 2.5 4.91421 2.5 4.5ZM2.5 9C2.5 8.58579 2.83579 8.25 3.25 8.25H15.25C15.6642 8.25 16 8.58579 16 9C16 9.41421 15.6642 9.75 15.25 9.75H3.25C2.83579 9.75 2.5 9.41421 2.5 9ZM2.5 13.5C2.5 13.0858 2.83579 12.75 3.25 12.75H15.25C15.6642 12.75 16 13.0858 16 13.5C16 13.9142 15.6642 14.25 15.25 14.25H3.25C2.83579 14.25 2.5 13.9142 2.5 13.5Z"
        fill={`${isActive ? activeColor : inactiveColor}`}
      />
    </svg>
  )
}

export default TextAlignJustify
