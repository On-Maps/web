import * as React from 'react'
import {
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
  ToggleButtonProps,
} from '@mui/material'

interface ISelectCampusProps {
  value: string | null
  setValue: React.Dispatch<React.SetStateAction<any>>
  buttonGroupProps?: Omit<ToggleButtonGroupProps, 'value' | 'onChange'>
  buttonProps?: Omit<ToggleButtonProps, 'value' | 'onChange'>
}

export function SelectCampus({
  value,
  setValue,
  buttonGroupProps,
  buttonProps,
}: ISelectCampusProps) {
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setValue(newAlignment)
  }

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={value}
        exclusive
        onChange={handleChange}
        {...buttonGroupProps}
      >
        <ToggleButton {...buttonProps} value="cornelio">
          Cornélio Procópio
        </ToggleButton>
        <ToggleButton {...buttonProps} value="bandeirantes">
          Bandeirantes
        </ToggleButton>
        <ToggleButton {...buttonProps} value="jacarezinho">
          Jacarezinho
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}
