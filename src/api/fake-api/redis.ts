import Redis from 'ioredis';


const initRedisClient = async () => {

    const redis = new Redis();
    // if (redis.status !== 'ready') {
    //     await redis.connect();
    // }
    redis.on('error', (error) => {
        /* istanbul ignore next */
        console.log(error);
        // logger.error('[REDIS] An error occurred on redis', { error });
    });
    return redis;
};

let redis: Redis.Redis;
export const getClient = async () => {
    if (redis) return redis;
    redis = await initRedisClient();
    return redis;
};