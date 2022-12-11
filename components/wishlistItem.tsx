import { IWishlistItem } from "../types";
import styles from "../styles/WishlistItem.module.css"
import { PropsWithChildren } from "react";

type Props = {
    wishlist: IWishlistItem,
}

// const WishlistItem: React.FC<Props> = ({ wishlist }) => {
//     return (
//         <div className={styles.card}>
//             <p>HELLO WORLD</p>
//         </div>
//     );
// }

function WishlistItem({ wishlist }: Props) {
    return (
        <div className={styles.card}>
            <p>HELLO WORLD</p>
        </div>
    );
}

export default WishlistItem;