import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NoSSR from 'react-no-ssr'
import { MapInfoProvider } from './map/context/_useMapInfo.context'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/clients'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createCustomTheme } from '@/theme'
import AxiosInterceptor from '@/clients/http/AxiosInterceptor'
import { DashboardLayout } from '@/layouts'

export default function App({ Component, pageProps }: AppProps) {
  const isMapRoute = Component.name === 'Map'
  const isLoginRoute = Component.name === 'Login'
  const isHomeRoute = Component.name === 'Home'
  const is404ErrorRoute = Component.name === 'Custom404'

  console.log(Component.name)
  

  if (isMapRoute || isLoginRoute || isHomeRoute || is404ErrorRoute ) {
    return (
      <MapInfoProvider>
        <NoSSR>
          <Component {...pageProps} />
        </NoSSR>
      </MapInfoProvider>
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={createCustomTheme()}>
        <CssBaseline />
        <AxiosInterceptor>
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        </AxiosInterceptor>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
