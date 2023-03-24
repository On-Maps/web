import { SelectCampus } from "@/components"
import React, { useState } from "react";
import { Box, SxProps, TextField, Theme } from "@mui/material";
import { Search } from "@mui/icons-material";
import { flexCenterContent } from "@/utils/cssInJsBlocks";
import WindowIcon from '@mui/icons-material/Window';
import ViewListIcon from '@mui/icons-material/ViewList';
import Image from "next/image";

export default function Place() {
  const [campus, setCampus] = React.useState(null);
  const [typeCard, setTypeCard] = useState<'grid' | 'list'>('list')
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
        sx={{ ...flexCenterContent, gap: 2, width: 1, flexDirection: 'column', p: 4, fontWeight: 600, color: '#0000008A' }}
      >
        <h1>Descubra lugares, faça uma pesquisa!</h1>
        <Box sx={{
          width: 1, alignItems: 'center', display: 'flex', gap: 2,
        }}>
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
        <Box
          sx={{
            ...flexCenterContent, gap: 2, alignItems: 'center', backgroundColor: '#fff', borderRadius: 2, boxShadow: 2
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