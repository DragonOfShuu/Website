import React from 'react'
import Image from "next/image";

import styles from '../../styles/e-portfolio/Index.module.sass'
import { IArticleItem } from '../../types'
import Link from 'next/link';

type Props = {
    article: IArticleItem
}

export default function ArticleItem({ article }: Props) {
    return (
        <div className={styles.containerItem}>
            <Link className={styles.articleItem} href={article.link}>
                {
                    article.image ? 
                    <div className={styles.articleImage}>
                        <Image src={article.image} 
                        width={1920} 
                        height={1080} 
                        alt={article.alt ? article.alt : "No text provided."} 
                        className={styles.image}/>
                    </div>
                    : <></>
                }
                <div className={styles.title}>
                    <h2>{article.name}</h2>
                </div>
                
                <p className={styles.description}>{article.description}</p>
            </Link>
        </div>
    )
}