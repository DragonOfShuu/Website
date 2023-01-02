import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <div>
            <Head>
                <title>Dragon of Shuu - Logan C.</title>
                <meta name="description" content="A website on my projects, my background, and ideas." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.headerNav}>
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

                    <div>
                        <Link href="/e-portfolio">E-Portfolio</Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}