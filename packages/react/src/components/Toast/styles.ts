import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const VIEWPORT_PADDING = 25

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  zIndex: 20000,

  variants: {
    position: {
      'bottom-right': {
        bottom: '$4',
        right: '$4',
      },
      'bottom-left': {
        bottom: '$4',
        left: '$2',
      },
      'top-right': {
        top: '$4',
        right: '$4',
      },
      'top-left': {
        top: '$4',
        left: '$2',
      },
    },
  },

  defaultVariants: {
    position: 'bottom-right',
  },
})

const slideInRight = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const slideInLeft = keyframes({
  from: { transform: `translateX(calc(-100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const hide = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

export const ToastContainer = styled(Toast.Root, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '$1',
  border: '1px solid',
  borderColor: '$gray600',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  width: '22.5rem',
  minHeight: '5.125rem',

  padding: '$3 $6',

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-out`,
  },

  variants: {
    position: {
      'bottom-right': {
        '&[data-state="open"]': {
          animation: `${slideInRight} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
        },
      },
      'top-right': {
        '&[data-state="open"]': {
          animation: `${slideInRight} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
        },
      },
      'bottom-left': {
        '&[data-state="open"]': {
          animation: `${slideInLeft} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
        },
      },
      'top-left': {
        '&[data-state="open"]': {
          animation: `${slideInLeft} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
        },
      },
    },
  },

  defaultVariants: {
    position: 'bottom-right',
  },
})

export const ToastTitle = styled(Toast.Title, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  fontFamily: '$default',
  fontSize: '$xl',
  lineHeight: '$base',
  fontWeight: '$bold',
  color: '$white',
})

export const ToastTextContent = styled(Toast.Description, {
  display: 'flex',
  alignItems: 'center',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray200',
})

export const ToastCloseButton = styled(Toast.Close, {
  lineHeight: 0,
  padding: '$2',
  backgroundColor: 'transparent',
  border: 'none',
  color: '$gray400',

  marginLeft: 'auto',
  cursor: 'pointer',
  '&:hover': {
    color: '$gray200',
  },
})
