import type { NextApiRequest, NextApiResponse } from 'next'
import NotionService from "@services/notion"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    const { loadCentralDogma } = NotionService

    const centralDogma = (await loadCentralDogma()).results

    res.status(200).json(centralDogma)
}
