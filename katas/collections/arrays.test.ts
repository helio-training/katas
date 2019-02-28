import got from 'got'

console.log(got)

const get = async (uri: string): Promise<any> => (await got(uri)).body

describe(`Arrays`, () => {
  let articles

  beforeEach(async () => {
    const response = await get(`https://www.reddit.com/r/javascript.json`)
    console.log(response)
    // articles = <[]>response.body
  })

  test(`Arrays: `, async () => {})
})
