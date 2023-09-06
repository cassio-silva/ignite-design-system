var l=Object.defineProperty;var o=(e,t)=>l(e,"name",{value:t,configurable:!0});import{r as a}from"./index.894cb683.js";import{d as c,a as u}from"./index.419219b4.js";import{j as r}from"./jsx-runtime.87912010.js";import"./iframe.26570b43.js";import"./index.275cc924.js";const m=o(function(t){const[s,n]=a.exports.useState(!1),i=a.exports.useRef(0);function p(){n(!1),i.current=window.setTimeout(()=>{n(!0)})}return o(p,"handleOpenToast"),r(c,{open:s,onOpenChange:n,...t,children:r(u,{onClick:p,children:"Agendar"})})},"ToastMain2"),y={parameters:{storySource:{source:`import React, { useState, useRef } from 'react'
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
    content: 'Quarta-feira, 23 de Outubro \xE0s 16h',
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
`,locationsMap:{"toast-main":{startLoc:{col:7,line:5},endLoc:{col:1,line:21},startBody:{col:7,line:5},endBody:{col:1,line:21}}}}},title:"Display/Toast",component:m,args:{title:"Agendamento Realizado",content:"Quarta-feira, 23 de Outubro \xE0s 16h",duration:4e3,position:"bottom-right"},argTypes:{position:{options:["top-left","top-right","bottom-left","bottom-right"],control:{type:"inline-radio"}},duration:{control:{type:"number"}}}},b=["ToastMain"];export{m as ToastMain,b as __namedExportsOrder,y as default};
//# sourceMappingURL=Toast.stories.c2dbd546.js.map
