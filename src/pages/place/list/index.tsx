import { SelectCampus } from "@/components"
import React, { useState } from "react";
import { Box, SxProps, TextField, Theme } from "@mui/material";
import { Search } from "@mui/icons-material";
import { flexCenterContent } from "@/utils/cssInJsBlocks";
import WindowIcon from '@mui/icons-material/Window';
import ViewListIcon from '@mui/icons-material/ViewList';
import Image from "next/image";
import { PlaceCardSearch } from "./components/_PlaceCardSearch.component";


const rooms = [
  {
    id: 1,
    name: 'Sala 1',
    description: 'Sala de aula',
    piso: 1,
    category: 'sala',
    link: 'https://cdn.discordapp.com/attachments/771470980324524043/1001706440601370766/preview1.png',
    latitude: -23.108,
    longitude: -50.3594239,
  },
  {
    id: 2,
    name: 'Sala 2',
    description: 'Sala de aula',
    piso: 1,
    category: 'sala',
    link: 'https://cdn.discordapp.com/attachments/771470980324524043/1074461555904745524/f53137d8-2472-434b-8ab0-385a611f0c8d.JPG',
    latitude: -23.108,
    longitude: -50.3594239,
  },
  {
    id: 3,
    name: 'Sala 3',
    description: 'Sala de aula',
    piso: 2,
    category: 'sala',
    link: 'https://cdn.discordapp.com/attachments/1087523573289189476/1087888499216224397/image.png',
    latitude: -23.108,
    longitude: -50.3594239,
  },
]

export default function PlaceList() {
  const [campus, setCampus] = React.useState(null);
  const [typeCard, setTypeCard] = useState<'grid' | 'list' | null>(null)
  return (
    <Box>
      <Box sx={{ ...flexCenterContent, m: 4 }}>
        <SelectCampus
          value={campus}
          setValue={setCampus}
          buttonProps={{
            sx: {
              width: 1,
              borderRadius: 2,
              '&.Mui-selected': {
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
              },
              '&.Mui-selected:hover': {
                backgroundColor: 'primary.dark',
              },
            }
          }}
        />
      </Box>
      <Box sx={{ ...flexCenterContent, flexDirection: 'row' }}>
        <Image src="/search-animate.svg" width={500} height={500} alt={"search image"} />
        <Box sx={{ ...flexCenterContent, flexDirection: 'column', gap: 4, marginBottom: 35 }}>
          <h1>Descubra lugares, faça uma pesquisa!</h1>
          <Box sx={{ ...flexCenterContent, flexDirection: 'row', width: '100%', gap: 4 }}>
            <TextField
              sx={{ height: 'auto' }}
              InputProps={{
                endAdornment: <Search />,
              }}
              disabled={!campus}
              placeholder={
                campus
                  ? `Pesquise por ${campus === 'cornelio' ?
                    'Cornélio Procópio' : campus === 'bandeirantes' ?
                      'Bandeirantes' : 'Jacarezinho'}` :
                  'Selecione um campus'
              }
            />
            {typeCard === 'list' ? (
              <WindowIcon
                onClick={() => setTypeCard('grid')}
              />
            ) : (
              <ViewListIcon
                onClick={() => setTypeCard('list')}
              />
            )}
          </Box>
        </Box>
      </Box>
      {rooms.map((room) => {
        return <PlaceCardSearch type={typeCard} room={room} key={room.id} />
      })}
    </Box >
  )
}

const containerMain: SxProps<Theme> = {
  containerMain: {
    ...flexCenterContent, flexDirection: 'grid'
  },
}

const subContainer: SxProps<Theme> = {
  subContainer: {
    ...flexCenterContent, flexDirection: 'column', gap: 4, p: 4
  }
}

const searchContainer: SxProps<Theme> = {
  searchContainer: {
  }
}

const textFiled: SxProps<Theme> = {
  textFiled: {
    height: 'auto',
    width: '80%',
  }
}