import http from './httpService'
import { apiUrl } from '../config.json'

const apiEndPoint = `${apiUrl}/movies`

const movieUrl = id => `${apiEndPoint}/${id}`

export const getMovies = () => http.get(apiEndPoint)

export const getMovie = movieId => http.get(movieUrl(movieId))

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie }
    delete body._id
    return http.put(movieUrl(movie._id), body)
  }

  return http.post(apiEndPoint, movie)
}

export const deleteMovie = movieId => http.delete(movieUrl(movieId))
