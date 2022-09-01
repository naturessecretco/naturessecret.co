

const resolvePageData = (queryList: any) => {
    
    Object.keys(queryList).map(key => {
        queryList[key] = queryList[key]()
    })
}

export default resolvePageData;