{
  /* <Select
multiple
value={selectedOptions}
onChange={handleChange}
renderValue={(selected) => selected.join(', ')}
>
{options.map((option) => (
  <MenuItem key={option} value={option}>
    <Checkbox checked={selectedOptions.indexOf(option) > -1} />
    <ListItemText primary={option} />
  </MenuItem>
))}
</Select> */
}

import {
  ListItemText,
  Checkbox,
  FormControl,
  FormHelperText,
  Grid,
  GridTypeMap,
  InputLabel,
  InputLabelProps,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material'
import { ReactNode, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TSelectOption } from '@/types'
import { flexCenterContent } from '@/utils/cssInJsBlocks'
import { useFormComponents } from './context/FormComponents.context'
import { get as _get } from 'lodash'

type Props = {
  id: string
  label: string
  values: {
    label: any
    value: string
  }[]
  gridProps?: Omit<GridTypeMap['props'], 'item' | 'container'>
  selectProps?: Omit<SelectProps, 'label' | 'error'>
  inputLabelProps?: Omit<InputLabelProps, 'error'>
  defaultValue?: string
}

export const FormSelectCheckboxInput = (props: Props) => {
  useFormComponents()

  const {
    control,
    formState: { errors },
  } = useFormContext<any>()

  const {
    id,
    label,
    values,
    gridProps,
    selectProps,
    inputLabelProps,
    defaultValue = '',
  } = props

  return (
    <Grid sx={{ ...flexCenterContent }} {...gridProps} item>
      <FormControl sx={{ minWidth: 120, height: '80px', width: '100%' }}>
        <InputLabel
          {...inputLabelProps}
          error={!!_get(errors, `${id}.message`)}
        >
          {label}
        </InputLabel>
        <Controller
          name={id}
          control={control}
          defaultValue={defaultValue}
          render={({ field }) => (
            <Select
              label={label}
              error={!!_get(errors, `${id}.message`)}
              multiple
              value={[...field.value]}
              {...selectProps}
              onChange={(event) => {
                field.onChange(event.target.value)
              }}
            >
              {values.map((data) => (
                <MenuItem key={data.value} value={data.value}>
                  {data.label}
                </MenuItem>
              ))}
            </Select>
          )}
        ></Controller>
        <FormHelperText error>
          {_get(errors, `${id}.message`) as ReactNode}
        </FormHelperText>
      </FormControl>
    </Grid>
  )
}
