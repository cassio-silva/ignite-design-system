import { ReactNode } from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import { styled } from '../styles'

export interface TooltipProps {
  children: ReactNode
  label: string
}

export function Tooltip({ children, label }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent>
            {label}
            <RadixTooltip.Arrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

Tooltip.displayName = 'Tooltip'

export const TooltipContent = styled(RadixTooltip.Content, {
  padding: '$3 $4',
  borderRadius: '$sm',
  backgroundColor: '$gray900',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray100',
})
