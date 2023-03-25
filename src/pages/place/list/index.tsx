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
    <Box sx={styles}>
      <Box sx={{ ...flexCenterContent, m: 4 }}>
        <SelectCampus
          value={campus}
          setValue={setCampus}
          buttonProps={{
            sx: {
              width: 1,
              p: 2,
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
      <Box
        sx={{ ...flexCenterContent, gap: 2, width: 1, flexDirection: 'column', p: 4, fontWeight: 700, color: '#0000008A' }}
      >
        <Box sx={{
          width: 1, alignItems: 'center', display: 'flex', gap: 2, flexDirection: 'column', backgroundColor: '#fff', borderRadius: 2
        }}>
          <h1>Descubra lugares, faça uma pesquisa!</h1>
          <Box
            sx={{
              ...flexCenterContent, gap: 2, width: '80%', mb: 6
            }}
          >
            <TextField
              sx={{
                height: 'auto',
                width: '100%',
              }}
              InputProps={{
                endAdornment: <Search />,
              }}
              disabled={!campus}
              placeholder={
                campus
                  ? `Pesquise por ${campus === 'cornelio' ? 'Cornélio Procópio' : campus === 'bandeirantes' ? 'Bandeirantes' : 'Jacarezinho'}` : 'Selecione um campus'
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
        {rooms.map((room) => {
          return <PlaceCardSearch type={typeCard} room={room} key={room.id} />
        })}
        <Box
          sx={{
            ...flexCenterContent, gap: 2, alignItems: 'center', backgroundColor: '#fff', borderRadius: 2, boxShadow: 2, md: { flexDirection: 'row' }
          }}
        >
          <Image src="/search-animate.svg" width={500} height={500} alt={"search image"} />
          <Box sx={{
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: 2, p: 4, fontSize: 20, fontWeight: 600, color: '#0000008A'
          }} >
            <h2>Busque locais novos!</h2>
            <h3> - Salas específicas </h3>
            <h3> - Eventos novos </h3>
            <h3> - Locais de estudo </h3>
            <h3> - Locais de lazer </h3>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}

const styles: SxProps<Theme> = {
  container: {
    ...flexCenterContent, flexDirection: 'column', gap: 4, p: 4
  },
}