

const resolveDataPage = (queryList: any) => {
    Object.keys(queryList).map(key => {
        queryList[key] = queryList[key]()
    }) 
}

export default resolveDataPage