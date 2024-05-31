import { headers } from 'next/headers'

export const GET = async function handler(req: any, res: any) {
  const url = process.env.API_URL

  return url
}
