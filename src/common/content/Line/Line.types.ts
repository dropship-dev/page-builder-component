export interface LineProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'is'> {
  margin?: number
  width?: string | number
  strokeWidth?: number // Stroke width
  strokeStyle: 'solid' | 'dotted' | 'dashed'
  strokeColor: string
  isFullWidth?: boolean
}
