import axios from 'axios'
import { toast } from 'react-toastify'
import { getJwt } from './authService'
import logger from './LogService'

axios.defaults.headers.common['x-auth-token'] = getJwt()

axios.interceptors.response.use(null, error => {
  const er = error.response
  const expectedError = er && er.status >= 400 && er.status < 500

  if (!expectedError) {
    console.log('logging error', error)
    logger.log(error)
    toast.error('unexpected error occurred')
  }

  return Promise.reject(error)
})

// eslint-disable-next-line
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
}
