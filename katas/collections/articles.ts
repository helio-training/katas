import got from 'got'

export const getArticles = async (
  uri: string = 'https://www.reddit.com/r/javascript.json',
) => await get(uri)

const get = async (uri: string) => (await got(uri)).body
