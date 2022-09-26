import type { NextApiRequest, NextApiResponse } from 'next'

import NotionService from '@services/notion'
import PageService from "@services/pages"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const { loadDataPage } = PageService
  const { loadCentralDogma } = NotionService


  const pageKey = req.body.pageKey ? JSON.stringify(req.body.pageKey) : "home"

  const centralDogma = (await loadCentralDogma()).results

  const { layout, data, id, version } = loadDataPage(centralDogma, pageKey)


  const pageData = {
    id: 'natures-secret-pages',
    db: id,
    version: version,
    layout: layout,
    data: data,
  }
  
  res.status(200).json(pageData)

}