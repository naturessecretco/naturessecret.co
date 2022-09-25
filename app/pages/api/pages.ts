import type { NextApiRequest, NextApiResponse } from 'next'
import PageService from "@services/pages"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const { loadLayout, resolveQuery, loadDataPage } = PageService.methods

  const pageKey = req.body.pageKey ? JSON.stringify(req.body.pageKey) : "home"

  const pageIndex = loadDataPage(pageKey).data

  const dataQuery = await resolveQuery(pageIndex)


  const pageData = {
    id: 'natures-secret-pages',
    version: Date.now(),
    layout: loadLayout(),
    data: dataQuery
  }
  res.status(200).json(pageData)

}