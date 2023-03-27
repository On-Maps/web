import { Form } from '@/components/Form'
import {
  Button,
  MenuItem,
  Box,
  Grid,
  Select,
  Typography,
  Checkbox,
  ListItemText,
  InputLabel,
  useTheme,
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { createPlace } from './validations'
import { cellPhoneInputMask } from '@/utils/inputMasks'
import { createElement, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { DataCampus, DataMapCategories, DataEquipaments } from '@/data'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'

const MapComponent = dynamic(() => import('@/components/Map/Map.component'), {
  loading: () => <p>loading...</p>,
  ssr: false,
})

export default function Place() {
  const [markers, setMarkers] = useState<any>(null)
  const { palette } = useTheme()

  const formHandler = useForm<{
    name: string
    category: string
    description: string
    floor: string
    building: string
    campus: string
    capacity: number | null
    equipments: string[]
    accessibility: boolean
    open24h: boolean
    area: boolean
    position: any
  }>({
    mode: 'all',
    resolver: yupResolver(createPlace()),
    defaultValues: {
      name: '',
      category: '',
      description: '',
      floor: '',
      building: '',
      campus: '',
      capacity: null,
      equipments: [],
      accessibility: false,
      open24h: false,
      position: [],
    },
  })
  const watchArea = formHandler.watch('area')
  const watchCampus = formHandler.watch('campus')
  const watch24h = formHandler.watch('open24h')

  useEffect(() => {
    if (watchArea) {
      setMarkers([])
      return
    }
    setMarkers(null)
  }, [watchArea])

  useEffect(() => {
    if (watchArea) {
      formHandler.setValue('position', markers)
      formHandler.clearErrors('position')
    } else {
      formHandler.setValue('position', [markers])
      formHandler.clearErrors('position')
    }
  }, [formHandler, markers, watchArea])

  const latitude = DataCampus.find(
    (campus) => campus.value === watchCampus
  )?.lat
  const longitude = DataCampus.find(
    (campus) => campus.value === watchCampus
  )?.lng

  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Criar Local
      </Typography>

      <Form
        id="create-place"
        handler={formHandler}
        onSubmit={async (data) => {
          console.log(data)
        }}
      >
        <Form.TextInput
          id="name"
          label="Nome do local"
          gridProps={styles.gridName}
        />
        <Form.SelectInput
          id="category"
          label="Categoria"
          gridProps={styles.gridCategory}
          values={DataMapCategories.filter(
            (category) => category.value !== 'todos'
          ).map((category) => ({
            value: category.value,
            label: category.title,
          }))}
        />
        <Form.TextInput
          id="description"
          label="Descrição"
          gridProps={styles.gridDescription}
          textFieldProps={styles.textDescription}
        />
        <Form.TextInput
          id="floor"
          label="Piso"
          gridProps={styles.gridFloor}
          textFieldProps={{
            inputProps: { type: 'number' },
          }}
        />
        <Form.TextInput
          id="building"
          label="Bloco"
          gridProps={styles.gridBuilding}
        />
        <Form.SelectInput
          id="campus"
          label="Campus"
          gridProps={styles.gridCampus}
          values={[
            { value: 'bandeirantes', label: 'Bandeirantes' },
            { value: 'jacarezinho', label: 'Jacarezinho' },
            { value: 'cornelio procopio', label: 'Cornélio Procópio' },
          ]}
        />
        <Form.TextInput
          id="capacity"
          label="Capacidade"
          gridProps={styles.gridCapacity}
          textFieldProps={{
            inputProps: { type: 'number' },
          }}
        />
        <Form.SelectCheckboxInput
          id="equipments"
          label="Equipamentos"
          gridProps={styles.gridEquipaments}
          selectProps={styles.selectEquipaments}
          // values={DataEquipaments.map((equipament, _index) => ({
          //   value: equipament.value,
          //   label: (
          //     <Typography
          //       key={_index}
          //       sx={{ display: 'flex', alignItems: 'center' }}
          //     >
          //       {createElement(equipament.icon, {
          //         sx: { mr: 1 },
          //       })}{' '}
          //       {equipament.title}
          //     </Typography>
          //   ),
          // }))}
          values={DataEquipaments.map((equipament) => ({
            value: equipament.value,
            label: equipament.title,
          }))}
        />

        <Form.SwitchInput
          id="accessibility"
          label="Acessibilidade"
          gridProps={styles.gridAccessibility}
        />
        <Form.SwitchInput
          id="open24h"
          label="Aberto 24h"
          gridProps={styles.gridOpen24h}
        />
        <Form.DatePickerInput
          id="date.start"
          label="Data de Início"
          gridProps={styles.gridDatePicker}
          disabled={watch24h}
        />
        <Form.DatePickerInput
          id="date.end"
          label="Data de Término"
          gridProps={styles.gridDatePicker}
          disabled={watch24h}
        />
        <Grid item xs={12}>
          <Typography variant="h4" mb={2}>
            Selecione o local no mapa
          </Typography>
        </Grid>
        <Form.SwitchInput
          id="area"
          label="Mapear Área Grande"
          gridProps={styles.gridArea}
        />
        <MapComponent
          center={[
            latitude ? latitude : -23.108,
            longitude ? longitude : -50.3594239,
          ]}
          mapClick={{
            type: watchArea ? 'multiple' : 'single',
            markers: markers,
            setMarkers: setMarkers,
          }}
          mapStyle={styles.mapStyles}
        >
          <Button
            sx={styles.cleanMarkersBtn}
            startIcon={<CleaningServicesIcon />}
            onClick={() => {
              watchArea ? setMarkers([]) : setMarkers([null])
            }}
          >
            Limpar marcadores
          </Button>
        </MapComponent>
        <Typography
          sx={styles.errorPosition}
          visibility={
            formHandler.formState.errors.position ? 'visible' : 'hidden'
          }
        >
          É necessário selecionar uma localização no mapa para o local.
        </Typography>
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Responsável do local
          </Typography>
        </Grid>
        <Form.TextInput
          id="responsible.name"
          label="Nome do Responsável"
          gridProps={styles.gridResponsibleName}
        />
        <Form.TextInput
          id="responsible.email"
          label="E-mail do Responsável"
          gridProps={styles.gridResponsibleEmail}
        />
        <Form.MaskedTextInput
          id="responsible.phone"
          label="Telefone do Responsável"
          gridProps={styles.gridResponsiblePhone}
          mask={cellPhoneInputMask}
        />
        <Form.SubmitBtn
          form={'create-place'}
          btnProps={{ sx: { width: 1, height: '54px' } }}
          gridProps={{ xs: 12 }}
          handler={formHandler}
        >
          Criar Local
        </Form.SubmitBtn>
      </Form>
    </>
  )
}

const styles = {
  cleanMarkersBtn: {
    whiteSpace: 'nowrap',
    position: 'absolute',
    zIndex: 999,
    right: 0,
    borderBottom: 2,
    borderLeft: 2,
    borderRadius: 0,
    borderBottomLeftRadius: 8,
  },
  mapStyles: {
    height: 350,
    width: '100%',
    borderRadius: 4,
  },
  gridAccessibility: { xs: 12, sm: 3, md: 2 },
  gridOpen24h: { xs: 12, sm: 3, md: 2 },
  gridEquipaments: { xs: 12, sm: 6, md: 4 },
  gridDescription: {
    xs: 12,
    sx: {
      height: 155,
    },
  },
  gridFloor: { xs: 6, sm: 6, md: 4 },
  gridBuilding: { xs: 6, sm: 6, md: 4 },
  gridCampus: { xs: 6, sm: 6, md: 4 },
  gridCapacity: { xs: 6, sm: 6, md: 4 },
  gridArea: {
    xs: 12,
    sx: {
      display: 'flex',
      justifyContent: 'flex-start',
    },
  },
  gridResponsibleName: { md: 4, xs: 12 },
  gridResponsibleEmail: { md: 4, xs: 12 },
  gridResponsiblePhone: { md: 4, xs: 12 },
  gridDatePicker: { md: 6, xs: 12 },
  gridCategory: { xs: 12, sm: 4 },
  gridName: { xs: 12, sm: 8 },
  selectEquipaments: {
    sx: {
      '& .MuiSelect-selectMenu': {
        height: '100%',
      },
    },
  },
  textDescription: {
    multiline: true,
    rows: 4,
    sx: {
      height: '100%',
    },
  },
  errorPosition: {
    color: 'error.main',
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 1.66,
    letterSpacing: '0.03333em',
    marginRigth: 'auto',
    marginTop: '3px',
    marginRight: '14px',
    marginBottom: 0,
    marginLeft: '14px',
  },
}
