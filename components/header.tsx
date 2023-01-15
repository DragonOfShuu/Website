import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Header.module.sass";

export default function Header() {
    return (
        <div>
            <Head>
                <title>Dragon of Shuu - Logan C.</title>
                <meta name="description" content="A website on my projects, my background, and ideas." />
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.headerNav}>
                <nav className={styles.nav}>
                    <Link href="/">Home</Link>

                    <Link href="/about-me">About Me</Link>

                    <Link href="/wishlist">Wishlist</Link>

                    <Link href="/e-portfolio">E-Portfolio</Link>
                </nav>
            </div>
        </div>
    );
}