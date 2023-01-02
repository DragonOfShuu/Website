import React from 'react'
import Image from "next/image";

import styles from '../../styles/e-portfolio/Index.module.scss'
import { IArticleItem } from '../../types'
import Link from 'next/link';

type Props = {
    article: IArticleItem
}

export default function ArticleItem({ article }: Props) {
    return (
        <Link className={styles.articleItem} href={article.link}>
            {
                article.image ? 
                <Image src={article.image} 
                       width={1920} 
                       height={1080} 
                       alt={article.alt ? article.alt : "No text provided."} 
                       className={styles.articleImage}/>
                : <div className="topBar"/>
            }
            <h2 className={styles.title}>{article.name}</h2>
            <p className={styles.description}>{article.description}</p>
        </Link>
    )
}