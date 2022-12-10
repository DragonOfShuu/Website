import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <div>
            <Head>
                <title>Logan Cederlof</title>
                <meta name="description" content="A website on Logan Cederlof" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className={styles.nav}>
                <div>
                    <Link href="/">Home</Link>
                </div>

                <div>
                    <Link href="/about-me">About Me</Link>
                </div>

                <div>
                    <Link href="/wishlist">Wishlist</Link>
                </div>
            </nav>
        </div>
    );
}