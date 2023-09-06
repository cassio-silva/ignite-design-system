import { StoryObj, Meta } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@kaz-dev-ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hover me!</Button>,
    label: '01 de Agosto - Disponível',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj = {}
