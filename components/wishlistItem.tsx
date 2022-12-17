import { IWishlistItem } from "../types";
import styles from "../styles/WishlistItem.module.css"
import Image from "next/image";

type Props = {
    wishlist: IWishlistItem,
}

export default function WishlistItem({ wishlist }: Props) {
    return (
        <div className={styles.card}>
            
            <div className={styles.containerImage} onClick={() => open(wishlist.link, "_blank")}>
                <Image src={wishlist.image} width={1920} height={1080} alt={wishlist.alt ? wishlist.alt : "No text provided."} className={styles.image}/>
            </div>
            <div className={styles.descriptionBox}>
                <h4 className={styles.header}>{wishlist.name}</h4>
                <div className={styles.descScroll}>
                    <p className={styles.description}>{wishlist.description}</p>
                </div>
            </div>
            
        </div>
    );
}