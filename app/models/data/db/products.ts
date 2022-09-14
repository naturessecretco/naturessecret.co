import images from "@db/images"

const productsDB = [
    {
        id: 'wildcrafted-seamoss',
        name: 'Wildcrafted Seamoss',
        description: '🌿Our Unique Wildcrafted Seamoss™️ is Rich in Over 92 Essential Vitamins & Nutrients!',
        heading: 'Top Seller',
        tags: ["featured"],
        value: '80.00',
        discount: '20%',
        price: '30.00',
        cover: images.find(image => image.id === 'mockup').src,
        category: 'seamoss',

    },
    {
        id: 'buckwheat-honey',
        name: 'Buckwheat Honey',
        description: 'Our organic Buckwheat Honey',
        discount: '20%',
        tags: ["featured"],
        price: '40.00',
        value: '70.00',
        cover: images.find(image => image.id === 'buckwheat-honey-1').src,
        category: 'seamoss',

    },
    {
        id: 'nutrient-gummies',
        name: 'Nutrient Gummies',
        description: 'Our organic Buckwheat Honey',
        discount: '20%',
        tags: ["featured"],
        price: '40.00',
        value: '70.00',
        cover: images.find(image => image.id === 'buckwheat-honey-1').src,
        category: 'seamoss',

    },
    {
        id: 'buckwheat-honey-2',
        name: 'Buckwheat Honey',
        description: 'Our organic Buckwheat Honey',
        discount: '20%',
        tags: ["featured"],
        price: '40.00',
        value: '70.00',
        cover: images.find(image => image.id === 'buckwheat-honey-1').src,
        category: 'seamoss',

    }
]

export default productsDB