import React, { createElement } from 'react'
import Link from 'next/link'
import { DataMapCategories } from '@/data'
import { AiFillStar, AiOutlineRight } from 'react-icons/ai'
import { characterLimit } from '@/utils/functions'
import Image from 'next/image'
import { Box } from '@mui/material'
import { flexCenterContent } from "@/utils/cssInJsBlocks";

type TProps = {
  room: {
    id: number
    name: string
    description: string
    category: string
    piso: number
    link: string
    latitude: number
    longitude: number
    bloco: string
  }
  type?: 'grid' | 'list' | null
}

export function PlaceCardSearch({ room, type = 'list' }: TProps) {
  const icon =
    DataMapCategories.find((item) => item.value === room.category)?.icon ||
    AiFillStar

  if (!room) {
    return <div></div>
  }

  if (!type || type == null) return <div></div>

  return (
    <Box sx={styles.containerMain}>
      {type === 'list' ? (
        <Link href={`/place/${room.id}`}>
          <Box sx={styles.cardListContainer}>
            {createElement(icon, {
              size: 20,
              color: 'black',
            })}
            <Box sx={styles.cardListStyle}>
              <h3>{room.name}</h3>
              <span>
                Tipo: {room.category} | Piso: {room.piso} | Bloco: {room.bloco}
              </span>
            </Box>
            <AiOutlineRight size={20} color="black" />
          </Box>
        </Link>
      ) : (
        <Link href={`/place/${room.id}`}>
          <Box sx={styles.cardListContainerDetail}>
            <Box sx={styles.imageStyle}>
              <Image src={room.link} alt="logo" height={80} width={60} />
            </Box>
            <Box sx={styles.cardListDetailsStyle}>
              <h3>
                {room.name}
              </h3>
              <Box sx={{ display: 'flex', gap: 4, mr: 4 }}>
                <Box>
                  <p>Tipo: {room.category}</p>
                  <p>Piso: {room.piso}</p>
                </Box>
                <Box>
                  {characterLimit(room.description, 75)}
                  <p>Bloco: {room.bloco}</p>
                </Box>
                <AiOutlineRight size={20} color="black" />
              </Box>
            </Box>
          </Box>
        </Link>
      )}
    </Box>
  )
}

const styles = {
  containerMain: {
    width: 'fit-content',
    height: 'fit-content',
  },
  cardListContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    width: '100%',
    backgroundColor: 'white',
    mb: 4,
    p: 2,
    borderRadius: 4,
  },
  cardListContainerDetail: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    width: '100%',
    backgroundColor: 'white',
    mb: 4,
    p: 0,
    borderRadius: 4,
    with: '100%',
  },
  cardListStyle: {
    ...flexCenterContent,
    gap: 4,
  },
  cardListDetailsStyle: {
    dispaly: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    justifyContent: 'center',
  },
  imageStyle: {
    borderRadius: 4,
    overflow: 'hidden',
    width: 60,
    height: 80,
  }
}