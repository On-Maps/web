import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Category from "./components/_category";
import { TPlace } from "@/types";
import { Router } from "next/router";
import { useRouter } from "next/router";
import { useEffect } from "react";
interface IPlaceListProps {
  place: TPlace;
}

export default function PlaceList({ place }: IPlaceListProps) {
  const router = useRouter();
  const { params } = router.query;

  useEffect(() => {
    if (params) {
      // Chamar via Axios ou fetch
    }
  }, [params]);

  return (
    <Box sx={styles.mainContainer}>
      <Grid sx={styles.subContainer}>
        <Box sx={styles.imageContainer}>
          <Image src={''} width={400} height={400} alt="imagem do local" />
        </Box>
        <Box sx={styles.titleContainer}>
          <h1>Laboratório 4</h1>
        </Box>
        <Box sx={styles.categoriesContainer}>
          <Category category="sala" />
        </Box>
        <Grid sx={styles.detailContainer}>
          <Box sx={styles.informationDetail}>
            <h1>
              Descrição
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aut? Aperiam iusto sunt harum eligendi aliquam voluptates accusamus, odio sit doloremque quia est, magnam laudantium natus, obcaecati fugiat. Blanditiis, mollitia.
            </p>
          </Box>
          <Box sx={styles.informationDetail}>
            <h1>
              Campus do local
            </h1>
            <p>
              O atual lugar está localizado no campus de São Carlos, no prédio 4.
            </p>
          </Box>
          <Box sx={styles.informationDetail}>
            <h1>
              Horário de funcionamento
            </h1>
            <p>
              O local está aberto de segunda a sexta, das 8:00 às 18:00.
            </p>
          </Box>
          <Box sx={styles.informationDetail}>
            <h1>
              Piso do local
            </h1>
            <p>
              O respectivo local está localizado no piso 4, nos andares a cima.
            </p>
          </Box>
          <Box sx={styles.informationDetail}>
            <h1>
              Equipamentos do local
            </h1>
            <p>
              O local possui as seguintes ferramentas: computadores, projetores, etc.
            </p>
          </Box>
          <Box sx={styles.informationDetail}>
            <h1>
              Categoria do local
            </h1>
            <p>
              O local é uma sala de aula, no centro de tecnologias.
            </p>
          </Box>
          <Box sx={styles.informationDetail}>
            <h1>
              Responsável pelo local
            </h1>
            <Box sx={styles.uselessContainer}>
              <Box>
                <p>Nome:<span></span></p>
                <p>Email:<span></span></p>
                <p>Telefone:<span></span></p>
              </Box>
            </Box>
          </Box>
          <Box sx={styles.informationDetail}>
            <h1>Localização</h1>
            <p>Latitude:<span></span></p>
            <p>Longitude:<span></span></p>
          </Box>
          <Box sx={styles.informationDetail}>
            <h1> Mais informações </h1>
            <Box sx={styles.uselessContainer}>
              <Box>
                <p>Construindo:<span></span></p>
                <p>Acessibilidade:<span></span></p>
                <p>Capacidade:<span></span></p>
                <p>Aberto 24h:<span></span></p>
                <p>Criado:<span></span></p>
                <p>Atualizado:<span></span></p>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 1,
  },
  subContainer: {
    display: 'grid',
    backgroundColor: '#ffffff',
    borderRadius: 4,
    m: 4,
    boxShadow: 1,
    width: '80%',
    '@media (max-width: 768px)': {
      display: 'grid',
      gridTemplateColumns: '1fr',
      width: '100%',
    }
  },
  detailContainer: {
    display: 'grid',
    gap: 4,
    m: 4,
    gridTemplateColumns: '1fr 1fr',
    '@media (max-width: 768px)': {
      m: 1,
      gridTemplateColumns: '1fr',
    }
  },
  informationDetail: {
    display: 'flex',
    flexDirection: 'column',

  },
  imageContainer: {
    width: '100%',
    height: '400px',
  },
  titleContainer: {
    ml: 4,
    '@media (max-width: 768px)': {
      m: 1
    }
  },
  categoriesContainer: {
    ml: 4,
    '@media (max-width: 768px)': {
      display: 'grid',
      gridTemplateColumns: '1fr',
      m: 1
    }
  },
  uselessContainer: {
    display: 'flex',
    gap: 4,
  },
  uselessContent: {
    display: 'flex',
    flexDirection: 'column',
  }

}