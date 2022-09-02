const getDataPage = async () => {

    const pageData = await fetch('http://localhost:3000/api/pages', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }

    }).then(data=> data.json()).catch((e) => console.log(e))

    return pageData
}

export default getDataPage