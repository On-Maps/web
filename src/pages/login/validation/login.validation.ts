import { Yup } from '@/utils/formValidator'

export const login = () => {
  return Yup.object().shape({
    id: Yup.string().required(),
    username: Yup.string().required(),
    password: Yup.string().required(),
  })
}
