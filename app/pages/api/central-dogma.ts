import type { NextApiRequest, NextApiResponse } from 'next'
import NotionService from "@services/notion"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if(req?.method === "POST") {
      res.status(500).json({ error: "Method not allowed!" })
    }
    
    const { getCentralDogma } = NotionService()
    const centralDogma = (await getCentralDogma())
    res.status(200).json(centralDogma)
}
