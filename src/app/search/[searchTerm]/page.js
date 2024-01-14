import React from 'react'
const API_KEY = process.env.API_KEY

export default async function page({params}) {
    const res = await fetch(`http://api.themoviedb.org/3/search/movie/?api_key=${API_KEY}&query=${params.searchTerm}`)
  return (
    <div>page</div>
  )
}
