import type { NextApiRequest, NextApiResponse } from 'next'
import NotionService from "@services/notion"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const { getCentralDogma } = NotionService()
    const centralDogma = (await getCentralDogma()).results
    res.status(200).json(centralDogma)
}
