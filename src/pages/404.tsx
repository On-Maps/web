import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import { flexCenterContent } from '@/utils/cssInJsBlocks'

export default function Custom404() {
  return (
    <Box sx={{ ...flexCenterContent, width: 1, height: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: 1,
          height: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: 1,
          }}
        >
          <Image src="/programmer.svg" alt="Login" width={300} height={140} />
          <Typography
            variant="h4"
            color="primary"
            align="center"
            fontWeight="bold"
            sx={{ paddingBottom: '1rem' }}
          >
            Desculpe, mas ainda não mapeamos essa área!
          </Typography>
        </Box>
        <Box
          sx={{
            width: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            marginTop: '5vh',
          }}
        >
          <Typography
            variant="h5"
            color="textSecondary"
            textAlign="center"
            fontWeight="bold"
            sx={{ paddingBottom: '1.5rem' }}
          >
            Tome um café e volte à navegação ☕
          </Typography>
          <Link href="/">
            <Box
              sx={{
                bgcolor: '#3e6cd8',
                color: '#ffffff',
                fontWeight: 'bold',
                display: 'flex',
                width: 1,
                justifyContent: 'center',
                padding: '0.5rem',
                borderRadius: '5px',
                WebkitBorderRadius: '5px',
                MozBorderRadius: '5px',
                msBorderRadius: '5px',
                OBorderRadius: '5px',
                fontSize: '1.8rem',
              }}
            >
              Voltar
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
