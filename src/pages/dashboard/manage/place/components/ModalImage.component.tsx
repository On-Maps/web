import { DialogHeader } from '@/components/Dialog'
import { Form } from '@/components/Form'
import { DataRole } from '@/data'
import { Dialog, Typography, DialogContent } from '@mui/material'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { TPlace } from '../types'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import React from 'react';
import ImageSwiper from './ImageSwiper.component'


type TProps = {
  open: boolean
  handleClose: () => void
  data: TPlace | undefined
}

export const ModalImage = (props: TProps) => {
  const { open, handleClose, data } = props

  const formHandler = useForm<{
    placeName: string
    campus: string
    building: string
    url: string
    category: string
    MANAGE_PLACE: boolean
    MANAGE_USER: boolean
  }>({
    mode: 'all',
  })

  useEffect(() => {
    formHandler.reset({
      placeName: data?.name,
      url: data?.url,
      campus: data?.campus,
      building: data?.building,
      category: data?.category,
      MANAGE_PLACE: data?.role.includes('MANAGE_PLACE'),
      MANAGE_USER: data?.role.includes('MANAGE_USER'),
    })
  }, [data, formHandler])

  if (!data) return null

  return (
    <Dialog onClose={handleClose} aria-labelledby="config-dialog" open={open}>
      <DialogHeader id="config-dialog-title" onClose={handleClose}>
        <Typography component="span" variant="h6" fontWeight={'bold'}>
          Visualizar Imagens
        </Typography>
      </DialogHeader>
      <DialogContent dividers>
        <Form
          id="edit-user"
          handler={formHandler}
          onSubmit={async (data) => {
            const roles = []
            if (data.MANAGE_PLACE) roles.push(DataRole.MANAGE_PLACE.value)
            if (data.MANAGE_USER) roles.push(DataRole.MANAGE_USER.value)
            const dataToSubmit = {
              placeName: data.placeName,
              campus: data.campus,
              area: data.area,
              role: roles,
            }
            console.log(dataToSubmit)
            handleClose()
          }}
        >
          <Typography component="span" variant="body1" fontWeight={'bold'}>
            Clique e arrate para o lado
        </Typography>
        <ImageSwiper />
        </Form>
      </DialogContent>
    </Dialog>
  )
}
