import { SelectCampus } from '@/components'
import React, { useState } from 'react'
import { Box, TextField, Grid, Typography } from '@mui/material'
import { Search } from '@mui/icons-material'
import { flexCenterContent } from '@/utils/cssInJsBlocks'
import WindowIcon from '@mui/icons-material/Window'
import ViewListIcon from '@mui/icons-material/ViewList'
import Image from 'next/image'
import { PlaceCardSearch } from './components/_PlaceCardSearch.component'
import { TPlace } from '@/types'

const rooms: TPlace[] = [
  {
    id: 'p1',
    name: 'Library',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac augue nec velit bibendum rhoncus. Suspendisse interdum quam lacus, in vehicula nulla bibendum ut. Maecenas eu lorem id enim lobortis laoreet ac ut nisi. Fusce sed lectus ut quam posuere dictum eu ut nulla. Aliquam vel velit non nulla elementum rhoncus eu vel orci. Donec rutrum, mauris sit amet pellentesque eleifend,    ',
    category: 'biblioteca',
    position: [
      {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    ],
    image: [
      {
        url: 'https://cdn.discordapp.com/attachments/771470980324524043/1001706440601370766/preview1.png',
        name: 'Library',
      },
    ],
    floor: 3,
    building: 'CCT',
    campus: 'Downtown',
    accessibility: true,
    capacity: 100,
    equipments: [
      'computer',
      'projector',
      'printer',
      'cafe',
      'books',
      'ar condition',
    ],
    date: {
      start: '2023-04-01T09:00:00.000Z',
      end: '2023-04-01T18:00:00.000Z',
    },
    open24h: false,
    responsible: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
    },
    createdAt: '2023-03-28T12:00:00.000Z',
    updatedAt: '2023-03-28T12:00:00.000Z',
  },
  {
    id: '2',
    name: 'Library',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac augue nec velit bibendum rhoncus. Suspendisse interdum quam lacus, in vehicula nulla bibendum ut. Maecenas eu lorem id enim lobortis laoreet ac ut nisi. Fusce sed lectus ut quam posuere dictum eu ut nulla. Aliquam vel velit non nulla elementum rhoncus eu vel orci. Donec rutrum, mauris sit amet pellentesque eleifend,    ',
    category: 'biblioteca',
    position: [
      {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    ],
    image: [
      {
        url: 'https://cdn.discordapp.com/attachments/771470980324524043/1074461555904745524/f53137d8-2472-434b-8ab0-385a611f0c8d.JPG',
        name: 'Library',
      },
    ],
    floor: 3,
    building: 'CCT',
    campus: 'Downtown',
    accessibility: true,
    capacity: 100,
    equipments: ['computer', 'projector', 'printer'],
    date: {
      start: '2023-04-01T09:00:00.000Z',
      end: '2023-04-01T18:00:00.000Z',
    },
    open24h: false,
    responsible: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
    },
    createdAt: '2023-03-28T12:00:00.000Z',
    updatedAt: '2023-03-28T12:00:00.000Z',
  },
  {
    id: '3',
    name: 'Library',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac augue nec velit bibendum rhoncus. Suspendisse interdum quam lacus, in vehicula nulla bibendum ut. Maecenas eu lorem id enim lobortis laoreet ac ut nisi. Fusce sed lectus ut quam posuere dictum eu ut nulla. Aliquam vel velit non nulla elementum rhoncus eu vel orci. Donec rutrum, mauris sit amet pellentesque eleifend,    ',
    category: 'biblioteca',
    position: [
      {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    ],
    image: [
      {
        url: 'https://cdn.discordapp.com/attachments/1087523573289189476/1087888499216224397/image.png',
        name: 'Library',
      },
    ],
    floor: 3,
    building: 'CCT',
    campus: 'Downtown',
    accessibility: true,
    capacity: 100,
    equipments: ['computer', 'projector', 'printer'],
    date: {
      start: '2023-04-01T09:00:00.000Z',
      end: '2023-04-01T18:00:00.000Z',
    },
    open24h: false,
    responsible: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
    },
    createdAt: '2023-03-28T12:00:00.000Z',
    updatedAt: '2023-03-28T12:00:00.000Z',
  },
]

export default function PlaceList() {
  const [campus, setCampus] = React.useState(null)

  const customPlaceholderInput = (campus: string) => {
    switch (campus) {
      case 'cornelio':
        return 'Pesquise por Cornélio Procópio'
      case 'bandeirantes':
        return 'Pesquise por Bandeirantes'
      case 'jacarezinho':
        return 'Pesquise por Jacarezinho'
      default:
        return 'Selecione um campus'
    }
  }

  return (
    <Box width={1}>
      <Grid container columnSpacing={1}>
        <Grid
          item
          lg={4}
          sx={{
            display: { xs: 'none', lg: 'block' },
          }}
        >
          <Image
            src="/search-animate.svg"
            width={500}
            height={500}
            style={{
              width: '100%',
            }}
            alt={'search image'}
          />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Box mx={5}>
            <SelectCampus
              value={campus}
              setValue={setCampus}
              buttonGroupProps={{
                sx: {
                  width: 1,
                },
              }}
              buttonProps={{
                sx: styles.selectCampus,
              }}
            />
            <Box sx={styles.searchMainContainer}>
              <Box sx={styles.searchSubContainer}>
                <TextField
                  sx={styles.textField}
                  InputProps={{
                    startAdornment: <Search sx={{ mr: 1 }} />,
                  }}
                  disabled={!campus}
                  placeholder={customPlaceholderInput(
                    campus ? campus : 'default'
                  )}
                />
              </Box>
              <Box sx={styles.containerList}>
                {rooms.length === 0 ? (
                  <Typography variant="h6" sx={{ textAlign: 'center' }}>
                    Nenhuma lugar encontrado
                  </Typography>
                ) : (
                  rooms.map((room) => (
                    <PlaceCardSearch place={room} key={room.id} />
                  ))
                )}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

const styles = {
  containerMain: {
    display: 'grid',
  },
  containerCampus: {
    ...flexCenterContent,
    flexDirection: 'grid',
  },
  selectCampus: {
    width: 1,
    borderRadius: 2,
    whiteSpace: 'nowrap',
    '&.Mui-selected': {
      backgroundColor: 'primary.main',
      color: 'primary.contrastText',
    },
    '&.Mui-selected:hover': {
      backgroundColor: 'primary.dark',
    },
  },
  subContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    width: '80%',
    justifyItems: 'center',
  },
  searchMainContainer: {
    display: 'block',
    flexDirection: 'column',
    gap: 4,
    mt: 4,
  },
  searchSubContainer: {
    ...flexCenterContent,
    flexDirection: 'row',
    width: '100%',
    gap: 4,
  },
  textField: {
    height: 'auto',
  },
  containerEndAdornment: {
    ml: 1,
    ...flexCenterContent,
  },
  containerList: {
    display: 'flex',
    flexDirection: 'column',
    mt: 4,
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 310px)',
    '&::-webkit-scrollbar': {
      width: '0.6em',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      backgroundColor: 'secondary.dark',
      borderRadius: 2,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'primary.main',
      border: '2px solid #15181C',
      borderColor: 'secondary.dark',
      borderRadius: 2,
    },
  },
}
