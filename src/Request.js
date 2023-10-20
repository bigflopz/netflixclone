const key = "b162591795954d636fc2fe2fadae5cd8"

const requests = {
    requestTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`,
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`
}

export default requests