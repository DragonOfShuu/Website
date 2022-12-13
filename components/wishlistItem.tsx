import { IWishlistItem } from "../types";
import styles from "../styles/WishlistItem.module.css"
import Image from "next/image";

type Props = {
    wishlist: IWishlistItem,
}

export default function WishlistItem({ wishlist }: Props) {
    return (
        <div className={styles.card} onClick={() => open(wishlist.link, "_blank")}>
            
            <div className={styles.containerImage}>
                <Image src={wishlist.image} width={1920} height={1080} alt={wishlist.alt ? wishlist.alt : "No text provided."} className={styles.image}/>
            </div>
            <div className={styles.descriptionBox}>
                <h4 className={styles.header}>{wishlist.name}</h4>
                <p className={styles.description}>{wishlist.description}</p>
            </div>
            
        </div>
    );
}