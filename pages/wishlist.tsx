import ItemScroll from "../components/itemScroll";
import WishlistItem from "../components/wishlistItem";
import styles from '../styles/Wishlist.module.css';
import { IWishlistItem } from "../types";

export default function Wishlist() {
    const wishListItem1: IWishlistItem = {
        id: 0,
        name: "Burglar Bag",
        description: "A bag used for bagging bodies",
        image: "/BodyBag.jpg",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }

    return (
        <main className="main">
            <h1 className="title">
                My <span>WISHLIST</span>
            </h1>

            <ItemScroll header="Items Under $20">
                <WishlistItem wishlist={wishListItem1}></WishlistItem>
                <WishlistItem wishlist={wishListItem1}></WishlistItem>
                <WishlistItem wishlist={wishListItem1}></WishlistItem>
                <WishlistItem wishlist={wishListItem1}></WishlistItem>
                <WishlistItem wishlist={wishListItem1}></WishlistItem>
                <WishlistItem wishlist={wishListItem1}></WishlistItem>
                <WishlistItem wishlist={wishListItem1}></WishlistItem>
                <WishlistItem wishlist={wishListItem1}></WishlistItem>
                <WishlistItem wishlist={wishListItem1}></WishlistItem>
                <WishlistItem wishlist={wishListItem1}></WishlistItem>
                <WishlistItem wishlist={wishListItem1}></WishlistItem>
                <WishlistItem wishlist={wishListItem1}></WishlistItem>
                <WishlistItem wishlist={wishListItem1}></WishlistItem>
                <WishlistItem wishlist={wishListItem1}></WishlistItem>
            </ItemScroll>

            <ItemScroll header="Items between $20-$50">
                <WishlistItem wishlist={wishListItem1}/>
                <WishlistItem wishlist={wishListItem1}/>
                <WishlistItem wishlist={wishListItem1}/>
                <WishlistItem wishlist={wishListItem1}/>
                <WishlistItem wishlist={wishListItem1}/>
                <WishlistItem wishlist={wishListItem1}/>
                <WishlistItem wishlist={wishListItem1}/>
                <WishlistItem wishlist={wishListItem1}/>
                <WishlistItem wishlist={wishListItem1}/>
                <WishlistItem wishlist={wishListItem1}/>
            </ItemScroll>

            <ItemScroll header="Items over $50">
                <WishlistItem wishlist={wishListItem1}/>
            </ItemScroll>
        </main>
    );
}