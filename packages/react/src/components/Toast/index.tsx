import * as RadixToast from '@radix-ui/react-toast'
import {
  ToastCloseButton,
  ToastContainer,
  ToastTextContent,
  ToastTitle,
  ToastViewport,
} from './styles'
import { ReactNode } from 'react'
import { X } from 'phosphor-react'

export interface ToastProps {
  children: ReactNode
  title: string
  content: string
  position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  duration: number
}

export function Toast({
  children,
  title,
  content,
  position,
  duration,
  ...props
}: ToastProps) {
  return (
    <RadixToast.Provider duration={duration}>
      {children}
      <ToastContainer position={position} {...props}>
        <ToastTitle>
          {title}
          <ToastCloseButton>
            <X size={24} />
          </ToastCloseButton>
        </ToastTitle>
        <ToastTextContent>{content}</ToastTextContent>
      </ToastContainer>
      <ToastViewport position={position} />
    </RadixToast.Provider>
  )
}
