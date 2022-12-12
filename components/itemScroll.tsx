import styles from "../styles/ItemScroll.module.css"

type Props = {
    children: JSX.Element[],
    header: string
}

export default function ItemScroll({ header, children }: Props) {
    return (
        <>
            <h1 className={styles.header}>{header}</h1>
            <div className={styles.container}>
                <div className={styles.scrollable}>
                    {children}
                </div>
                <div className={styles.renderOver}></div>
            </div>
            
        </>
    );
}