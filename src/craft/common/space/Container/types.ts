import React from 'react'

export interface ContainerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'is'> {
  placeHolderText?: string
}
