import React from 'react'

export interface LayoutProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'is'> {
  gap: number
}
