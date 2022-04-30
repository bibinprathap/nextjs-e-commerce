const express = require('express')
const next = require('next')
const NextRedisCache = require('next-redis-cache')
const redis = require('redis')


const port = process.env.PORT || 3000
const development = process.env.NODE_ENV !== 'production'
const app = next({ dev: development })
const handler = app.getRequestHandler()
const client = redis.createClient()

/**
 *  Initialization of Next Redis Cache instance
 */
const nextRedisCache = new NextRedisCache(client, app, {
    includes: ['/'],  // routes to include for caching
})

app
    .prepare()
    .then(() => {
        const server = express()

        server.get('*',
            (request, response, nxt) => nextRedisCache.middleware(request, response, nxt),
            (request, response) => handler(request, response)
        )

        /* starting server */
        return server.listen(port, error => {
            if (error) throw error
            console.log(`> Ready on http://localhost:${port}`)
        })
    })
    .catch(error => new Error("Server isn't responded", error))