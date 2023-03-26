import { Form } from '@/components/Form'
import { Box } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { createPlace } from './validations'

export default function Place() {
  const formHandler = useForm({
    mode: 'all',
    resolver: yupResolver(createPlace()),
  })

  return (
    <>
      <Form
        id="fast-pre-authorizations-create"
        handler={formHandler}
        onSubmit={async (data) => {
          console.log(data)
        }}
      >
        <Form.TextInput
          id="projectIdentifier"
          label="Identificação do Projeto"
          gridProps={{ xs: 12 }}
        />
        <Form.TextInput
          id="constructorInvoice.number"
          label="Número da Medição"
          gridProps={{ xs: 6 }}
          textFieldProps={{
            InputProps: { type: 'number' },
          }}
        />
        <Form.TextInput
          id="constructorInvoice.description"
          label="Descrição da Medição"
          gridProps={{ xs: 6 }}
        />
        <Form.DatePickerInput
          id="constructorInvoice.dueDate"
          label="Data de Vencimento"
          gridProps={{ xs: 6 }}
        />
        <Form.TextInput
          id="contractedEmail"
          label="E-mail do Fornecedor"
          gridProps={{ xs: 6 }}
        />
        <Form.TextInput
          id="contractedReceiptNumber"
          label="Número da NF"
          gridProps={{ xs: 6 }}
          textFieldProps={{
            inputProps: { type: 'number' },
          }}
        />
        <Form.FileInput
          id="file"
          placeholder="Nota Fiscal"
          helperText="Selecione a nota fiscal"
          gridProps={{ xs: 6 }}
          btnProps={{
            sx: {
              height: '54px',
              backgroundColor: 'white',
            },
            fullWidth: true,
          }}
        />
        <Form.SubmitBtn
          form={'fast-pre-authorizations-create'}
          btnProps={{ sx: { width: 1, height: '54px' } }}
          gridProps={{ sx: { px: '0 !important' } }}
          handler={formHandler}
        >
          Criar Pré-Autorização
        </Form.SubmitBtn>
      </Form>
    </>
  )
}
