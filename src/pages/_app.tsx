import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NoSSR from 'react-no-ssr'
import { MapInfoProvider } from './map/context/_useMapInfo.context'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/clients'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createCustomTheme } from '@/theme'
import AxiosInterceptor from '@/clients/http/AxiosInterceptor'
import { DefaultLayout, DashboardLayout } from '@/layouts'
import React from 'react'
import { ToastProvider } from '@/hooks/useToast.hook'

export default function App({ Component, pageProps }: AppProps) {
  const noLayoutComponent = ['Login', 'Home', 'Custom404', 'Map']
  const defaultLayoutComponent = ['PlaceList']

  if (noLayoutComponent.includes(Component.name)) {
    return (
      <MapInfoProvider>
        <NoSSR>
          <Component {...pageProps} />
        </NoSSR>
      </MapInfoProvider>
    )
  }

  if (defaultLayoutComponent.includes(Component.name)) {
    return defaultProvider({
      children: <Component {...pageProps} />,
      layout: DefaultLayout,
    })
  }

  return defaultProvider({
    children: <Component {...pageProps} />,
    layout: DashboardLayout,
  })
}

function defaultProvider({
  children,
  layout,
}: {
  children: React.ReactNode
  layout: any
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={createCustomTheme()}>
        <CssBaseline />
        <AxiosInterceptor>
          <ToastProvider>
            {React.createElement(layout, {}, children)}
          </ToastProvider>
        </AxiosInterceptor>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
