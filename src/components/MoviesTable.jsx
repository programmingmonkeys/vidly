import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Like from './common/Like'
import Table from './common/Table'

import {getCurrentUser} from '../services/authService'

class MoviesTable extends Component {
  columns = [
    { path: 'title', label: 'Title', content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link> },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    { key: 'like', content: movie => <Like liked={movie.liked} onLikeToggle={() => this.props.onLike(movie)} /> }, 
  ]

  deleteColumn = {
    key: 'delete',
    content: movie => (
      <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">
        Delete
      </button>
    ),
  }

  constructor() {
    super()
    const user = getCurrentUser()
  if (user && user.isAdmin ) this.columns.push(this.deleteColumn)
}

  render() {
    const { movies, sortColumn, onSort } = this.props

    return <Table columns={this.columns} data={movies} sortColumn={sortColumn} onSort={onSort} />
  }
}
export default MoviesTable
