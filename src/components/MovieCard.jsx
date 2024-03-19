import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 p-3'>
        <img className='w-full object-cover rounded-sm'  src={IMG_CDN_URL + posterPath } alt="Movie Car" />
    </div>
  )
}

export default MovieCard