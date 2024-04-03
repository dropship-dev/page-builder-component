export interface ProductTitleProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'is'> {
  title: string
  align: 'left' | 'center' | 'right' | 'justify'
  color: string
  isFullWidth: boolean
}
