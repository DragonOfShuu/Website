// Main E-portfolio file

import React from 'react'
import ArticleItem from '../../components/e-portfolio/articleItem';
import styles from "../../styles/e-portfolio/Index.module.sass";
import { ETag, IArticleItem } from '../../types';

type Props = {}

const articles: IArticleItem[] = [
    {
        name: "Credit Card Debt",
        id: 0,
        description: "A detailed article on what I have learned about the usage of Algebra in the real world.",
        link: "/e-portfolio/articles/credit-card-debt",
        image: "/e-portfolio/credit-card-debt/CreditCardImage.png",
        tags: [ETag.article, ETag.SLCC] 
    },
    {
        name: "Rune Translator",
        id: 1,
        description: "A translator specialized for runic translation; an alphabet from Norse Mythology, and is believed to have been used by vikings.",
        link: "/e-portfolio/projects/runes",
        image: "/e-portfolio/runes/RuneTranslatorImage.png",
        tags: [ETag.project]
    }
]

export default function Index({}: Props) {
    return (
        <main className="main">
            <h1 className="title">
                My <span>E-Portfolio</span>
            </h1>

            <div className={styles.spacerDiv}></div>

            <div className={styles.portfolioCardHolder}>
                {
                    articles.map((item) => {
                        return <ArticleItem article={item} key={item.id}/>
                    })
                }
            </div>
        </main>
    );
}