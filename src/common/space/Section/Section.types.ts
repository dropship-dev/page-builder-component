import React from 'react'

export interface SectionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'is'> {}

export const SectionDefaultProps: Partial<SectionProps> = {
  className: 'w-full bg-transparent p-3'
}
