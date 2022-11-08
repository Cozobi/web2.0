const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '15e383204c1b8a09dbfaaa4c01ed7e17',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;