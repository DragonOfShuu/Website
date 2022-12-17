import { IWishListCollection } from "../../types"

const payload: IWishListCollection = { 
    "Under $20": [
        {
            name: "Retro-Bit Legacy 16 Wired USB Controller",
            description: "A USB controller originally designed based off the SNES, with more buttons. This would be useful for my retropie setup.",
            id: 0,
            link: "https://www.amazon.com/Retro-Bit-Legacy-Wired-USB-Controller/dp/B08ZFCRX72/ref=sr_1_22?crid=2QJZ8MDQA3SCQ&keywords=speedrun&qid=1671250357&sprefix=speedrun%2Caps%2C126&sr=8-22",
            image: "/wishlistImages/SNESRIPOFFCONTROLLER.webp",
            tags: ["controller", "gaming"]
        },
        {
            name: "JARLINK Electric Pencil Sharpener",
            description: "A pencil sharpener that can support multiple types of pencils; this would be useful because I currently have to share my brother's sharpener.",
            id: 1,
            link: "https://www.amazon.com/JARLINK-Electric-Sharpener-Heavy-duty-Classroom/dp/B078DZY9Z5/",
            image: "/wishlistImages/JarlinkPencilSharpener.webp",
            tags: ["pencil", "sharpener"]
        },
        {
            name: "X-ACTO Pencil Sharpener",
            description: "A quick pencil sharpener that would be useful because I currently have to share my brother's sharpener.",
            id: 2,
            link: "https://www.amazon.com/X-ACTO-Pencil-Sharpener-Electric-SafeStart/dp/B086PMM18D/",
            image: "/wishlistImages/x-actoPencilSharpener.webp",
            tags: ["pencil", "sharpener"]
        }
    ],
    "Under $50": [
        {
            name: "Genshin Impact Hoodie Klee",
            description: "A hoodie from a game I enjoy. This hoodie matches my color theme as well.",
            id: 0,
            link: "https://www.amazon.com/HPY-Genshin-Printed-Pullover-Sweatshirt/dp/B09D7VV92P",
            image: "/wishlistImages/GenshinImpactRedHoodie.webp",
            tags: ["merch", "genshin", "impact"]
        },
        {
            name: "Retro-Bit 16 Wireless Controller",
            description: "A Wireless controller based off the design of the SNES, but with more buttons. This would be useful for my retropie setup. Darker version would be preferred.",
            id: 1,
            link: "https://a.co/d/90O5a8n",
            image: "/wishlistImages/SnesControlllerWireless.webp"
        }
    ],
    "Under $100": [
        {
            name: "Rasberry Pi 4 Model B",
            description: "A credit card sized computer that can be used for a multitude of tasks. The Raspberry Pi I have is very old, so having a later more powerful model would be very valuable.",
            id: 0,
            link: "https://www.microcenter.com/product/622539/pi4modelB8gb",
            image: "/wishlistImages/RaspberryPi4B.jpg",
            tags: ["computer", "gaming"]
        }
    ]
}

export default payload;