import images from "@db/images"

const productsDB = [
    {
        id: 'wildcrafted-seamoss',
        name: 'Wildcrafted Seamoss',
        description: 'Wildcrafted Seamoss',
        heading: 'Top Seller',
        tags: ["featured"],
        value: '50.00',
        price: '10.00',
        cover: images.find(image => image.id === 'wildcrafted-seamoss-1').src,
        category: 'seamoss',

    },
    {
        id: 'buckwheat-honey',
        name: 'Buckwheat Honey',
        description: 'Wildcrafted Seamoss',
        price: '10.00',
        value: '50.00',
        cover: images.find(image => image.id === 'buckwheat-honey-1').src,
        category: 'seamoss',

    }
]

export default productsDB