type Props = {
  isActive?: boolean
}

const TextAlignRight = ({ isActive = false }: Props) => {
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
        d="M3 4.5C3 4.08579 3.33579 3.75 3.75 3.75H15.75C16.1642 3.75 16.5 4.08579 16.5 4.5C16.5 4.91421 16.1642 5.25 15.75 5.25H3.75C3.33579 5.25 3 4.91421 3 4.5ZM7.5 9C7.5 8.58579 7.83579 8.25 8.25 8.25H15.75C16.1642 8.25 16.5 8.58579 16.5 9C16.5 9.41421 16.1642 9.75 15.75 9.75H8.25C7.83579 9.75 7.5 9.41421 7.5 9ZM4.5 13.5C4.5 13.0858 4.83579 12.75 5.25 12.75H15.75C16.1642 12.75 16.5 13.0858 16.5 13.5C16.5 13.9142 16.1642 14.25 15.75 14.25H5.25C4.83579 14.25 4.5 13.9142 4.5 13.5Z"
        fill={`${isActive ? activeColor : inactiveColor}`}
      />
    </svg>
  )
}

export default TextAlignRight
