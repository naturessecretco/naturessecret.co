// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import homePage from "@pages/homePage"


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    try {
        const data = homePage.init()
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ error })
    }



}
