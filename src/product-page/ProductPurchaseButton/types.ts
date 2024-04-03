export interface ProductPurchaseButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'is'> {
  isFullWidth?: boolean
  width?: number
  height?: number
  backgroundColor?: string
  borderRadius?: number
  textColor?: string
  text: string
}
