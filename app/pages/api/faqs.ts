// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import NotionService from "@services/notion"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    const { loadAllFAQs } = NotionService

    const faqData = (await loadAllFAQs()).results

    res.status(200).json(faqData)
}
