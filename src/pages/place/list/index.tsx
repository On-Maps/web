import { SelectCampus } from "@/components"
import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
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
    bloco: 'CCT',
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
    bloco: 'CCT',
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
    bloco: 'CCT',
    category: 'sala',
    link: 'https://cdn.discordapp.com/attachments/1087523573289189476/1087888499216224397/image.png',
    latitude: -23.108,
    longitude: -50.3594239,
  },
]

export default function PlaceList() {
  const [campus, setCampus] = React.useState(null);
  const [typeCard, setTypeCard] = useState<'grid' | 'list' | null>(null)
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
    <Box>
      <Box sx={styles.containerCampus}>
        <SelectCampus
          value={campus}
          setValue={setCampus}
          buttonProps={{
            sx: styles.selectCampus
          }}
        />
      </Box>
      <Box sx={styles.subContainer}>
        <Image src="/search-animate.svg" width={500} height={500} alt={"search image"} />
        <Box sx={styles.searchMainContainer}>
          <h1>Descubra lugares, faça uma pesquisa!</h1>
          <Box sx={styles.searchSubContainer}>
            <TextField
              sx={styles.textField}
              InputProps={{
                endAdornment: <Search />,
              }}
              disabled={!campus}
              placeholder={
                customPlaceholderInput(campus ? campus : 'default')
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
          <Box sx={{ display: 'flex', flexDirection: 'column', mt: 4 }}>
            {rooms.map((room) => {
              return <PlaceCardSearch type={typeCard} room={room} key={room.id} />
            })}
          </Box>
        </Box>
      </Box>
    </Box >
  )
}

const styles = {
  containerMain: {
    display: 'grid'
  },
  containerCampus: {
    ...flexCenterContent,
    flexDirection: 'grid'
  },
  selectCampus: {
    width: 1,
    borderRadius: 2,
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
    gap: 4
  },
  textField: {
    height: 'auto'
  }
}
