
//export const SERVICEURL = 'http://localhost:50670/api/';
export const SERVICEURL = 'https://adroidclouderp.ngrok.io/api/';
//export const SERVICEURL = 'http://localhost:82/api/';
//export const SERVICEURL = 'http://13.90.194.97:80/api/';
export const DATABASENAME = 'AutoSpareParts_PreSales2019';
export function getFinalUrl(url: String): RequestInfo {
    return SERVICEURL + url + DATABASENAME
}

export function makeIdGenerator() {
    let lastId = 0;

    return (() => () => {
        lastId += 1;

        return lastId;
    })();
}

export function delayResponse<T>(input: Promise<T> | (() => Promise<T>), time = 500): Promise<T> {
    return new Promise<T>((resolve) => {
        // setTimeout(resolve, time);
        resolve();
    }).then(() => (input instanceof Promise ? input : input()));
}

export function error<T>(message: string): Promise<T> {
    return Promise.reject<T>(new Error(message));
}

export function clone(data: any): any {
    return JSON.parse(JSON.stringify(data));
}

export function nameToSlug(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]/, '-').replace(/-+/, '-');
}
