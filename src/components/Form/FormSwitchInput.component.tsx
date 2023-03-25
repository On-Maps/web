import {
  Box,
  FormControl,
  Grid,
  GridTypeMap,
  InputLabel,
  Switch,
  SwitchProps,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { Controller, useFormContext } from 'react-hook-form'
import { flexCenterContent } from '@/utils/cssInJsBlocks'
import { useFormComponents } from './context/FormComponents.context'
import { get as _get } from 'lodash'

type Props = {
  id: string
  label: string
  gridProps?: Omit<GridTypeMap['props'], 'item' | 'container'>
  switchProps?: SwitchProps
  labelProps?: any
}

export const FormSwitchInput = (props: Props) => {
  useFormComponents()

  const {
    control,
    formState: { errors },
  } = useFormContext<any>()

  const { gridProps, id, switchProps, label, labelProps } = props

  return (
    <Grid sx={{ ...flexCenterContent }} xs={12} {...gridProps} item>
      <FormControl
        sx={{
          maxWidth: 50,
          height: 40,
        }}
      >
        <Controller
          name={id}
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <Box>
              <IOSSwitch {...field} checked={field.value} {...switchProps} />
            </Box>
          )}
        ></Controller>
      </FormControl>
      <InputLabel
        sx={{ color: '#0A2834', height: 35, marginLeft: 1 }}
        error={!!_get(errors, `${id}.message`)}
        {...labelProps}
      >
        {label}
      </InputLabel>
    </Grid>
  )
}

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 4,
    transitionDuration: '300ms',
    color: '#0A2834',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor:
          theme.palette.mode === 'dark'
            ? theme.palette.primary.main
            : theme.palette.primary.main,
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 18,
    height: 18,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#fff',
    border: '2px solid #0A2834',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}))
