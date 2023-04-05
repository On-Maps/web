import { Box, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Category from "./components/_category";
import { TPlace } from "@/types";
import { Router } from "next/router";
import { useRouter } from "next/router";
import { createElement, useEffect } from "react";
import { DataEquipaments } from "@/data";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from "swiper";

interface IPlaceListProps {
  place: TPlace;
}

export default function PlaceList({ place }: IPlaceListProps) {
  const router = useRouter();
  const { params } = router.query;

  const example = {
    id: 1,
    name: "Sala 1",
    category: "sala",
    floor: 4,
    block: "CCT",
    accessibility: true,
    open: true,
    campus: "Bandeirantes",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae cum molestias libero, sapiente expedita cupiditate vel ducimus reiciendis quo odit tenetur accusamus asperiores similique commodi aut nulla qui neque explicabo.",
    responsible: {
      name: "John Doe",
      email: "john@gmail.com",
      phone: "123-456-7890",
    },
    equipments: [
      "computer",
      "projector",
      "printer",
      "cafe",
      "books",
    ],
    image: [
      {
        url: "https://cdn.discordapp.com/attachments/771470980324524043/1001706440601370766/preview1.png",
        name: "Sala 1",
      },
      {
        url: "https://cdn.discordapp.com/attachments/771470980324524043/1001706440601370766/preview1.png",
        name: "Sala 1",
      },
    ],
  };
  useEffect(() => {
    if (params) {
      // Chamar via Axios ou fetch
    }
  }, [params]);

  return (
    <Box sx={styles.mainContainer}>
      <Grid sx={styles.subContainer}>
        <Box sx={styles.imageContainer}>
          {/* <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            navigation={true}
            loop={true}
            modules={[Pagination, Navigation, Autoplay]}
          >
            {example.image.map((image, index) => (
              <SwiperSlide key={index}  >
                <Box>
                  <Image
                    src={image.url}
                    alt={image.name}
                    width={400}
                    height={400}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper> */}
        </Box>
        <Box sx={styles.titleContainer}>
          <Typography variant="h3">
            titulo
          </Typography>
          <Category category="sala" />
        </Box>
        <Box sx={styles.categoriesContainer}>
          <Typography variant="h5">
            Piso: 4
          </Typography>
          <Typography variant="h5">
            Bloco: CCT
          </Typography>
          <Typography variant="h5">
            Acessibilidade: Sim
          </Typography>
          <Typography variant="h5">
            Aberto: 24h
          </Typography>
          <Typography variant="h5">
            Campus: Bandeirantes
          </Typography>
        </Box>
        <Grid sx={styles.detailContainer}>
          <Box sx={styles.informationDetail}>
            <Typography variant="h4" sx={{ m: 0 }}>
              Descrição
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae cum molestias libero, sapiente expedita cupiditate vel ducimus reiciendis quo odit tenetur accusamus asperiores similique commodi aut nulla qui neque explicabo.
            </Typography>
          </Box>
          <Grid sx={styles.subDetailContainer}>
            <Box sx={styles.informationDetail}>
              <Typography variant="h4">
                Responsável pelo local
              </Typography>
              <Box sx={styles.uselessContainer}>
                <Box>
                  <Typography variant="body2">Nome:<span></span></Typography>
                  <Typography variant="body2">Email:<span></span></Typography>
                  <Typography variant="body2">Telefone:<span></span></Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={styles.informationDetail}>
              <Typography variant="h4"> Mais informações </Typography>
              <Box sx={styles.uselessContainer}>
                <Box>
                  {place?.capacity == 0
                    ? null :
                    <Typography variant="body2">Capacidade: {place?.capacity}</Typography>
                  }
                  <Typography variant="body2">Criado:<span></span></Typography>
                  <Typography variant="body2">Atualizado:<span></span></Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={styles.informationDetail}>
              <Typography variant="h4"> Mais informações </Typography>
              <Box sx={styles.uselessContainer}>
                <Box>
                  {place?.capacity == 0
                    ? <Typography variant="body2">Capacidade: {place?.capacity}</Typography>
                    : null
                  }
                  <Typography variant="body2">Criado:<span></span></Typography>
                  <Typography variant="body2">Atualizado:<span></span></Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={styles.informationDetail}>
              <Typography variant="h4">Equipamentos</Typography>
              {DataEquipaments.filter((item) =>
                place?.equipments.includes(item.value)
              )
                .slice(0, 3)
                .map((item, _index) => {
                  return (
                    <>
                      <Box key={item.value} sx={styles.cardEquipment}>
                        {createElement(item.icon, {
                          sx: {
                            fontSize: 18,
                          },
                        })}
                        {item.title}
                      </Box>
                      {_index === 2 && place.equipments.length > 3 && '...'}
                    </>
                  )
                })}
            </Box>
          </Grid>
          <Box sx={styles.informationDetail}>
            <Typography variant="h4">Localização</Typography>
            <iframe
              title="Google Maps"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/place?key=&q=SPACE_NEEDLE_SEATTLE+WA`}
              allowFullScreen
            />
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
    gap: 2,
    mt: 2,
    ml: 4,
    mr: 4,
    mb: 4,
    gridTemplateColumns: '1fr',
    '@media (max-width: 768px)': {
      m: 1,
      gridTemplateColumns: '1fr',
    }
  },
  subDetailContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 2,
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    }
  },
  informationDetail: {
    display: 'flex',
    flexDirection: 'column',

  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '400px',
  },
  titleContainer: {
    ml: 4,
    '@media (max-width: 768px)': {
      m: 1,
    }
  },
  categoriesContainer: {
    display: 'flex',
    mt: 2,
    ml: 4,
    gap: 2,
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
  },
  cardEquipment: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'secondary.main',
    gap: 1,
    fontSize: 12,
    boxShadow: 1,
    px: 1,
    py: 0.2,
    borderRadius: 2,
    whiteSpace: 'nowrap',
  },
}