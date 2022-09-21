import images from "@db/images"

const productsDB = [
    {
        id: "wildcrafted-seamoss",
        name: "Wildcrafted Seamoss",
        source: "https://naturessecret.gumroad.com/l/wildcraftedseamoss?wanted=true",
        description: "🌿Our Unique Wildcrafted Seamoss™️ is Rich in Over 92 Essential Vitamins & Nutrients!",
        heading: "Top Seller",
        tags: ["featured"],
        value: "80.00",
        discount: "20%",
        price: "30.00",
        cover: "/assets/images/sea-moss-jar-website-only-mockup-4.png",
        category: "seamoss",

    },
    {
        id: "buckwheat-honey",
        name: "Buckwheat Honey",
        source: "https://naturessecret.gumroad.com/l/buckwheathoney",
        description: "Our organic Buckwheat Honey",
        discount: "20%",
        tags: ["featured"],
        price: "40.00",
        value: "70.00",
        cover: images.find(image => image.id === "bwh").src,
        category: "seamoss",

    },
    {
        id: "nutrient-gummies",
        name: "Nutrient Gummies",
        description: "Our organic Buckwheat Honey",
        discount: "20%",
        tags: ["featured"],
        price: "40.00",
        value: "70.00",
        cover: "/assets/images/seamoss-gummies-jar-mockup-2.png",
        category: "seamoss",

    },
]

export default productsDB