import GlobalStyles from '@/styles/global'
import React from 'react'

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
