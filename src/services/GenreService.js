import http from './httpService'
import { apiUrl } from '../config.json'

export const getGenres = () => http.get(`${apiUrl}/genres`)
