const LogErrors = (e) => {
    console.log(e)
}

const getDataPage = async () => {

    const pageData = await fetch('http://localhost:3000/api/pages', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }

    }).then(data=> data.json()).catch(LogErrors)

    return pageData
}

export default getDataPage