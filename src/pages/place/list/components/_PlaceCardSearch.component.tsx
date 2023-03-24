import React, { createElement } from 'react'
import Link from 'next/link'
import styles from '../styles/PlaceCardSearch.module.css'
import { DataMapCategories } from '@/data'
import { AiFillStar, AiOutlineRight } from 'react-icons/ai'
import { characterLimit } from '@/utils/functions'
import Image from 'next/image'
import { Box } from '@mui/material'

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
  }
  type?: 'grid' | 'list' | null
}

export function PlaceCardSearch({ room, type = 'list', ...rest }: TProps) {
  const icon =
    DataMapCategories.find((item) => item.value === room.category)?.icon ||
    AiFillStar

  if (!room) {
    return <div></div>
  }

  if (!type || type == null) return <div></div>

  return (
    <Box sx={{
      width: 1,
    }}>
      {type === 'list' ? (
        <Link href={`/place/${room.id}`} className={styles.link}>
          <div className={styles.container}>
            {createElement(icon, {
              size: 20,
              color: 'black',
            })}
            <div className={styles.text}>
              <h3 className={styles.title}>{room.name}</h3>
              <span className={styles.subtitle}>
                Tipo: {room.category} | Piso: {room.piso}
              </span>
            </div>
            <AiOutlineRight size={20} color="black" />
          </div>
        </Link>
      ) : (
        <Link href={`/place/${room.id}`}>
          <div className={styles.containerGrid}>
            <div className={styles.text}>
              <h3 className={styles.title}>
                {createElement(icon, {
                  size: 16,
                  color: 'black',
                })}
                {room.name}
              </h3>
              <div>
                <p
                  className={`${styles.subtitle} ${styles.container_subtitle}`}
                >
                  <span>Tipo: {room.category}</span>
                  <span>Piso: {room.piso}</span>
                  <span></span>
                </p>
                <p className={styles.subtitle}>
                  {characterLimit(room.description, 75)}
                </p>
              </div>
            </div>
            <div className={styles.image}>
              <Image src={room.link} alt="logo" height={80} width={60} />
            </div>
          </div>
        </Link>
      )}
    </Box>
  )
}
