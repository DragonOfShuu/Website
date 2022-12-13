import { IWishlistItem } from "../types";
import styles from "../styles/WishlistItem.module.css"
import { PropsWithChildren } from "react";

type Props = {
    wishlist: IWishlistItem,
}

function WishlistItem({ wishlist }: Props) {
    return (
        <div className={styles.card}>
            <p>HELLO WORLD</p>
        </div>
    );
}

export default WishlistItem;