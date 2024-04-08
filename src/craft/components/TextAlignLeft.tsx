type Props = {
  isActive?: boolean
}

const TextAlignLeft = ({ isActive = false }: Props) => {
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
        d="M3 4.5C3 4.08579 3.33579 3.75 3.75 3.75H15.75C16.1642 3.75 16.5 4.08579 16.5 4.5C16.5 4.91421 16.1642 5.25 15.75 5.25H3.75C3.33579 5.25 3 4.91421 3 4.5ZM3 9C3 8.58579 3.33579 8.25 3.75 8.25H11.25C11.6642 8.25 12 8.58579 12 9C12 9.41421 11.6642 9.75 11.25 9.75H3.75C3.33579 9.75 3 9.41421 3 9ZM3 13.5C3 13.0858 3.33579 12.75 3.75 12.75H14.25C14.6642 12.75 15 13.0858 15 13.5C15 13.9142 14.6642 14.25 14.25 14.25H3.75C3.33579 14.25 3 13.9142 3 13.5Z"
        fill={`${isActive ? activeColor : inactiveColor}`}
      />
    </svg>
  )
}

export default TextAlignLeft
