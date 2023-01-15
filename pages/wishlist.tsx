import { useEffect, useState } from "react";
import ItemScroll from "../components/itemScroll";
import WishlistItem from "../components/wishlistItem";
import styles from '../styles/Wishlist.module.sass';
import { IWishListCollection, IWishlistItem } from "../types";

export default function Wishlist() {
    const wishListItem1: IWishlistItem = {
        id: 0,
        name: "Burglar Bag",
        description: "A bag used for bagging bodies",
        image: "/BodyBag.jpg",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }

    const wishlistCollection: IWishListCollection = {
        "Don't actually buy this.": [
            wishListItem1
        ]
    }

    const [content, setContent] = useState<IWishListCollection>(wishlistCollection);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('/api/wishlist')
            .then((res) => res.json())
            .then((data) => {
                let newContent: IWishListCollection = data;
                console.log(newContent);
                console.log(Object.keys(newContent));
                setContent(newContent);
                setIsLoading(false);
            })
    }, [setContent, setIsLoading])

    return (
        <main className="main">
            <h1 className="title">
                My <span>WISHLIST</span>
            </h1>

            {
                isLoading ? 
                    <p>Loading...</p>
                    :
                    Object.keys(content).map((key, index) => {
                        return (
                            <ItemScroll header={key} key={index}>
                                {
                                    content[key].map((item) => {
                                        return <WishlistItem wishlist={item} key={item.id}></WishlistItem>;
                                        }
                                    )
                                }
                            </ItemScroll>
                        );
                    })
            }  
        </main>
    );
}