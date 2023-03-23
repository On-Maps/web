import { Grid, GridTypeMap, TextField, TextFieldProps } from '@mui/material'
import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import { flexCenterContent } from '@/utils/cssInJsBlocks'
import { useFormComponents } from './context/FormComponents.context'
import { get as _get } from 'lodash'

type Props = {
  id: string
  label: string
  gridProps?: Omit<GridTypeMap['props'], 'item' | 'container'>
  textFieldProps?: Omit<TextFieldProps, 'variant' | 'name' | 'label' | 'id'>
  disabled?: boolean
}

export const FormTextInput = (props: Props) => {
  useFormComponents()

  const {
    register,
    formState: { errors },
  } = useFormContext<any>()

  const { textFieldProps, gridProps, label, id } = props

  return (
    <Grid sx={{ ...flexCenterContent }} xs={12} {...gridProps} item>
      <TextField
        id={id}
        label={label}
        helperText={_get(errors, `${id}.message`) as ReactNode}
        error={!!_get(errors, `${id}.message`)}
        fullWidth
        {...register(id)}
        {...textFieldProps}
        disabled={props.disabled}
      />
    </Grid>
  )
}
