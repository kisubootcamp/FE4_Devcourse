const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY4MGRmZDZhOGE3N2RlMGEyYmE1ZDU3MDJiYThhNyIsIm5iZiI6MTc0NTQ2MzE5OS4wMTEwMDAyLCJzdWIiOiI2ODA5YTc5ZjI3NmJmNjRlNDFhYjhjMjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.y9l2uDNrXzbRF5IglAyx669rChyh4aFPoUUV4U1Ourw',
  },
}

export const getNowPlayingMovie = async () => {
  try {
    const res = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
      options,
    )
    const data = await res.json()
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}
