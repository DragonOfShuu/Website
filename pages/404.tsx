import Link from 'next/link'
import React from 'react'
import styles from '../styles/404.module.sass';

type Props = {}

export default function FourOhFour({}: Props) {
  return (
    <main className='main'>
        <h1 className="title">
            Page <span>Not</span> Found
        </h1>

        <h2>
            That&apos;s a 404!
        </h2>

        <Link href={"/"} className={styles.theLink}>
            Find Your Way Home
        </Link>
    </main>
  )
}