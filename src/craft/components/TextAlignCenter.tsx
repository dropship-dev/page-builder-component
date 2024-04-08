type Props = {
  isActive?: boolean
}

const TextAlignCenter = ({ isActive = false }: Props) => {
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
        d="M2.5 4.5C2.5 4.08579 2.83579 3.75 3.25 3.75H15.25C15.6642 3.75 16 4.08579 16 4.5C16 4.91421 15.6642 5.25 15.25 5.25H3.25C2.83579 5.25 2.5 4.91421 2.5 4.5ZM5.5 9C5.5 8.58579 5.83579 8.25 6.25 8.25H12.25C12.6642 8.25 13 8.58579 13 9C13 9.41421 12.6642 9.75 12.25 9.75H6.25C5.83579 9.75 5.5 9.41421 5.5 9ZM4 13.5C4 13.0858 4.33579 12.75 4.75 12.75H13.75C14.1642 12.75 14.5 13.0858 14.5 13.5C14.5 13.9142 14.1642 14.25 13.75 14.25H4.75C4.33579 14.25 4 13.9142 4 13.5Z"
        fill={`${isActive ? activeColor : inactiveColor}`}
      />
    </svg>
  )
}

export default TextAlignCenter
