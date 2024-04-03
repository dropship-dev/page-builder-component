import { UserComponent, UserComponentConfig, useNode } from '@craftjs/core'
import Image from 'next/image'
import React from 'react'
import ContainerSetting from './ContainerSetting'
import { ContainerProps } from './types'

const Container: UserComponent<Partial<ContainerProps>> = ({
  children,
  placeHolder,
  ...props
}) => {
  const {
    connectors: { connect, drag },
    isCanvas
  } = useNode((node) => ({
    isCanvas: node.data.isCanvas
  }))

  const { className, style } = props

  return (
    <div
      {...props}
      ref={(dom) => {
        connect(drag(dom))
      }}
      className={`${className}`}
      style={style}
    >
      {React.Children.count(children) === 0 ? (
        <div className="flex h-full w-full items-start justify-center border border-dashed border-gray-300 p-4">
          {isCanvas && (
            <div className="flex w-full items-center justify-center gap-2">
              <Image
                src="/icons/plus.svg"
                alt="Plus icon"
                width={16}
                height={16}
              />
              <span className="text-textXS font-normal text-gray-500">
                {placeHolder}
              </span>
            </div>
          )}
        </div>
      ) : (
        children
      )}
    </div>
  )
}

const ContainerDefaultProps: Partial<ContainerProps> = {
  className: 'w-full flex-grow bg-transparent p-4',
  placeHolder: 'Drop your components here'
}

Container.craft = {
  displayName: 'Container',
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSetting
  },
  rules: {}
} as Partial<UserComponentConfig<ContainerProps>>

export { Container }
