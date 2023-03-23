import { Yup } from '@/utils/formValidator'
import { formatCurrencyToString, onlyNumbers } from '@/utils/helpers'

export const createPlace = () => {
  return Yup.object().shape({
    projectIdentifier: Yup.string().required().max(20),
    constructorInvoice: Yup.object().shape({
      number: Yup.string().required(),
      description: Yup.string(),
      originalAmount: Yup.string()
        .required()
        .test(
          'originalAmount',
          'Deve ser menor ou igual que R$ 10.000.000,00',
          (value) => {
            if (!value) return false
            return +formatCurrencyToString(value) <= 10000000
          }
        )
        .test(
          'originalAmount',
          'Deve ser maior ou igual que R$ 500,00',
          (value) => {
            if (!value) return false
            return +formatCurrencyToString(value) >= 500
          }
        ),
      dueDate: Yup.string().required(),
    }),
    clientTaxId: Yup.string().transform(onlyNumbers).length(14).required(),
    contractedTaxId: Yup.string().transform(onlyNumbers).length(14).required(),
    contractedEmail: Yup.string().required().email('E-mail inválido'),
    contractedReceiptNumber: Yup.string(),
    file: Yup.mixed(),
  })
}
