/** @type {import('next').NextConfig} */
const API_KEY = "8f20a04e314661c2252e5462865b8d06"
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/contact",
                destination: "/form",
                permanent: false
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: "/api/movies",
                destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
            },
            {
                source: "/api/movies/:id",
                destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
            }
        ]
    }
}

module.exports = nextConfig
