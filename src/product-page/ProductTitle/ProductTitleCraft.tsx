import { UserComponent, useNode } from '@craftjs/core'
import { replaceAllPlaceholderText } from '~/src/craft/utils/'
import { useProductStore } from '../../store/product-page'
import { ProductTitleSetting } from './ProductTitleSetting'
import { ProductTitleProps } from './types'

const ProductTitle: UserComponent<Partial<ProductTitleProps>> = ({
  title,
  align,
  color,
  isFullWidth,
  className
}) => {
  const {
    connectors: { connect, drag }
  } = useNode()

  const textPlaceholders = useProductStore((state) => state.textPlaceholders)
  const content = replaceAllPlaceholderText({
    phrases: textPlaceholders,
    originalStr: title
  })

  const style: React.CSSProperties = {
    textAlign: align,
    color
  }

  if (isFullWidth) {
    style.width = '100%'
  }

  const TagName = 'h1'

  return (
    <TagName
      className={`${className}`}
      ref={(dom) => {
        connect(drag(dom))
      }}
      style={style}
    >
      {content}
    </TagName>
  )
}

const ProductTitleDefaultProps: Partial<ProductTitleProps> = {
  title: '{{product-name}}',
  align: 'left',
  color: '#000000',
  isFullWidth: true,
  className: 'mb-2'
}

ProductTitle.craft = {
  displayName: '(P) Title',
  defaultProps: ProductTitleDefaultProps,
  related: {
    settings: ProductTitleSetting
  },
  rules: {}
}

export { ProductTitle }
