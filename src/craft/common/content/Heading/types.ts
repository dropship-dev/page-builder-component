export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'is'> {
  content?: string
  fontSize?: number
}

export const HeadingDefaultProps: Partial<HeadingProps> = {
  content: 'Sample heading',
  fontSize: 20
}
