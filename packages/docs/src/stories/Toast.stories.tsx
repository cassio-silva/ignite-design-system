import React, { useState, useRef } from 'react'
import { Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@kaz-dev-ignite-ui/react'

export function ToastMain(props: ToastProps) {
  const [open, setOpen] = useState(false)
  const timerRef = useRef(0)

  function handleOpenToast() {
    setOpen(false)
    timerRef.current = window.setTimeout(() => {
      setOpen(true)
    })
  }

  return (
    <Toast open={open} onOpenChange={setOpen} {...props}>
      <Button onClick={handleOpenToast}>Agendar</Button>
    </Toast>
  )
}

export default {
  title: 'Display/Toast',
  component: ToastMain,
  args: {
    title: 'Agendamento Realizado',
    content: 'Quarta-feira, 23 de Outubro às 16h',
    duration: 4000,
    position: 'bottom-right',
  },
  argTypes: {
    position: {
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      control: {
        type: 'inline-radio',
      },
    },
    duration: {
      control: {
        type: 'number',
      },
    },
  },
} as Meta<ToastProps>
