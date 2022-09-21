import type { NextApiRequest, NextApiResponse } from 'next'
import PageService from "@services/pages"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const { getLayout, resolveQuery, loadPage } = PageService.methods

  const pageKey = req.body.pageKey ? JSON.stringify(req.body.pageKey) : "home"

  const pageQuery = await resolveQuery(loadPage(pageKey).query)
  

  const results = {
    version: Date.now(),
    layout: getLayout(),
    data: pageQuery
  }

  res.status(200).json(results)

}