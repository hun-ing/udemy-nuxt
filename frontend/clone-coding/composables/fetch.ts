import { appendResponseHeader, H3Event } from 'h3'

export const fetchWithCookie = async (event: H3Event, url: string) => {
    /* Get the response from the server endpoint */
    const res = await $fetch.raw(url, {
        method: 'POST',
        headers: {
            Authorization: 'test'
        },
        body: {
            email: 'test',
            password: 'test'
        }})
    /* Get the cookies from the response */
    const authorization = res.headers.get('Authorization');
    console.log('authorization = ', authorization);
    /* Return the data of the response */
    return res._data
}
