import axios from 'axios'

export const publicHttpClient = axios.create({
  baseURL: 'http://localhost:8080/alfresco',
})
